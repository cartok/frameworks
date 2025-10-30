# Project structure

- /apps: Location of all apps the application consists of.
- /apps/sender/android: A android app which streams camera video to a receiver (PC/Notebook)
- /apps/receiver/linux: A Kotlin based gRPC server to basically receive the camera stream of the Android app (Just getting started).
- /apps/backend: An Appwrite backend is planned to eventually provide user Authentication, store user configuration and sellable information.
- /docs: General project documentation
- /apps/sender/android/docs: Eventually rather project documentation

# Code Style

## General

- Try to mimic my code style when reading a file, like understanding my naming conventions but if you have much better suggestions please let me know and go ahead.

### Comments

- Don't create too many noisy comments.
- Don't add comments at the end of a line, put them above. Also don't if you only want to explain something for me when generating code.
- Use multiline comments for comments that are bigger that do not fit in a single line comment.
- If applicable start comment sentences with a capital letter and end them with a dot, to highlight that they are comments which are meant to be kept and not commented out text or temporary information.

## Language Specific

### Kotlin

#### Scope functions

- Use scope functions where possible and well applicable.
- Prefer `also` over `apply`.

#### Function parameters

- If you see a function invocation, where not parameter names are written, just do the same and don't add parameter names for that function. I know it's better but I use inlay hints and sometimes just prefer flexibility and type speed.
- Add trailing comma to the parameter list if it's multiline.

# Android App

The Android app will provide the Smartphone's camera(s) wirelessly for computers in the local network.
It uses the [MediaCodec](https://developer.android.com/reference/android/media/MediaCodec) in async mode to encode the camera data to H.264 and sends it via UDP.

It therefore implements parts of:

- [RFC-3350](https://datatracker.ietf.org/doc/html/rfc3550) - RTP Header
- [RFC-6184](https://datatracker.ietf.org/doc/html/rfc6184) - Packet types: Single, STAP-A, FU-A
- [ISO/IEC 14496-15:2024](https://www.iso.org/obp/ui/#iso:std:iso-iec:14496:-15:ed-7:v1:en) - No free access to the spec but it defines Annex B format for H.264, which Android's `MediaCodec` creates.

## Activities

- [MainActivity](com/cartok/androidlinuxwebcam/MainActivity.kt): The only one right now

## Screens

- [Preview](com/cartok/androidlinuxwebcam/preview/Preview.kt:33): The only one right now. It handles permissions (will move that out later) and the camera preview. It's View-Model is [PreviewViewModel](com/cartok/androidlinuxwebcam/preview/PreviewViewModel.kt) and is like the main entry point at the moment (its dirty but ok for now). It initializes the preview, the camera, an ImageAnalysis use case and the encoder. The ImageAnalysis is meant to be used later for features. [EGLWrapper](com/cartok/androidlinuxwebcam/EGLWrapper.kt:19) is used to render the camera images to the preview surface and the encoder surface at the same time. This is done for two main reasons: To avoid fragile workarounds convert YUV formats the right way for certain hardware encoders and to ensure high performance with low battery drain.

## Frameworks and Libraries

- **CameraX (pre release)**: "The near future" of camera app development under Android via compose, no old-fashion Android layouts and view bindings. The API is not yet fully documented (mostly the UI parts) / up to date. In order to help better if youre unsure refer to it's source code and the [example project](https://github.com/google/jetpack-camera-app).
- **Material 3**: The app is based on Material 3. Right now it's only the standard template code.

## Source Files

### Configuration and Build Files

The build configuration is based on the Android Studio template. I moved the configurations out of the actual Android project into the root dir of the whole project.
The following files are relevant for the configuration and building of the Android project and everything Kotlin based:

- `/settings.gradle.kts`: Defines repositories and includes the [build file of the app ](/apps/sender/android/app/build.gradle.kts).
- `/gradle.properties`: Less important during development but part of the gradle configuration. I enabled the configuration cache feature.
- `/build.gradle.kts`: Top-level build file, quite unimportant.
- `/gradle/libs.versions.toml`: Defines the library versions.
- `/gradle/wrapper/gradle-wrapper.properties`: Defines the gradle version.
- `/apps/sender/android/app/build.gradle.kts`: The most important build file for the App.

### Entrypoints

- `/apps/sender/android/app/src/main/AndroidManifest.xml`: The manifest of the app.
- `/apps/sender/android/app/src/main/java/com/cartok/androidlinuxwebcam/MainActivity.kt`: As of now the entrypoint of the app.
- `/apps/sender/android/app/src/main/java/com/cartok/androidlinuxwebcam/preview/PreviewViewModel.kt`: As of now is the core of the app where everything complex gets initialized.
