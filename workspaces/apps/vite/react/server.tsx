import { html } from "@elysiajs/html";
import { Elysia, type Context } from "elysia";

// TODO: Styles are missing, get loaded after page load.

const mode: "development" | "production" = process.env.NODE_ENV as
  | "development"
  | "production";

const viteDevServer =
  mode !== "development"
    ? null
    : await (
        await import("vite")
      ).createServer({
        server: {
          middlewareMode: true,
          watch: { usePolling: true, interval: 100 },
        },
        appType: "custom",
      });

async function getIndexHtmlFileText() {
  return await Bun.file("index-redux-ssr.html").text();
}

const server = viteDevServer
  ? new Elysia({ name: "dev-server" })
      .decorate("viteDevServer", viteDevServer)
      .use(html())
      .use(
        (await import("elysia-connect-middleware")).connect(
          viteDevServer.middlewares
        )
      )
      .get("*", async (context) => {
        const vitePort = context.viteDevServer.config.server.port;
        const viteUrl = `http://localhost:${vitePort}`;
        const indexHtmlFileText =
          await context.viteDevServer.transformIndexHtml(
            context.request.url,
            (
              await getIndexHtmlFileText()
            ).replace(
              `<!--vite-dev-scripts-->`,
              `
                <script type="module" src="${viteUrl}/@vite/client"></script>
                <script type="module" src="${viteUrl}/entry-client.tsx"></script>
                <script type="module">
                  import RefreshRuntime from '${viteUrl}/@react-refresh'
                  RefreshRuntime.injectIntoGlobalHook(window)
                  window.$RefreshReg$ = () => {}
                  window.$RefreshSig$ = () => (type) => type
                  window.__vite_plugin_react_preamble_installed__ = true
                </script>
              `
            )
          );

        const { render } = await context.viteDevServer.ssrLoadModule(
          `/src/entry-server.tsx`
        );

        return generateResponse({
          indexHtmlFileText,
          render,
          requestUrl: context.request.url,
        });
      })
  : new Elysia({ name: "production-server" })
      .use(html())
      .use((await import("elysia-compress")).compression())
      .use(
        (await import("@elysiajs/static")).staticPlugin({
          assets: "src/assets",
        })
      )
      .get("*", async (context) => {
        const indexHtmlFileText = await getIndexHtmlFileText();
        try {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore: File might not exist
          const { render } = await import(`dist/server/entry-server.js`);

          return generateResponse({
            indexHtmlFileText,
            render,
            requestUrl: context.request.url,
          });
        } catch (error) {
          console.log(`Build the server before running it.`);
          throw error;
        }
      });

function generateResponse({
  indexHtmlFileText,
  render,
  requestUrl,
}: {
  indexHtmlFileText: string;
  render: (url: string) => string;
  requestUrl: Context["request"]["url"];
}) {
  const reactHtml = render(requestUrl);
  const result = indexHtmlFileText.replace(
    "<!--ssr-react-html-->",
    () => reactHtml
  );

  return new Response(result, {
    status: 200,
    headers: {
      "content-type": "text/html",
    },
  });
}

new Elysia().use(server).listen(4000);

console.log("server started");
