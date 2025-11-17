# TODOs

## Backend

- [ ] Create backend incl. CI/CD (github), containerization (Docker Compose), deployment (Oracle VM & local Kubernetes), Database (Postgres without ORM)
  - [ ] NestJS
  - [ ] Spring Boot (Kotlin)

## Frontend

- [ ] Add SSR
  - [ ] if possible with HTML streaming
  - [ ] with lazy / partial hydration
- [ ] Image loading
  - [ ] Add an image to the start page which will function as LCP and ensure it is prefetched
  - [ ] Add an image outside of the initial viewport and ensure it is lazy loaded.
- [ ] TODO List UI features
  - [ ] Add a text filter for todo items including label, input, button.
  - [ ] Add a checkbox (incl. rendering of checked items)
  - [ ] Performance: Try out lazy loading of components by adding a component which can display the full todo item text when clicking on an entry (enlarge the area, exchange, no modal).
- [ ] Routing & Syncing
  - [ ] create start page with search input and search button, which redirects to todo page with search param set. make sure that the param is updated via the filter input on the todo page (there are 2 inputs)
  - [ ] create a page which does some simulated computation (setTimeout) and ensure that navigation change will not be blocked by rendering
