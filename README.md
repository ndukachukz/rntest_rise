# Rise Dev Test React Native Documentation

Welcome to the documentation for the React Native application! This guide will cover essential processes such as clearing cache, building the APK, and locating the built APK files.

## Table of Contents

1. [Clearing Cache](#clearing-cache)
2. [Building APK](#building-apk)
3. [Locating Built APK Files](#locating-built-apk-files)

---

## 1. Clearing Cache <a name="clearing-cache"></a>

Clearing the cache can resolve various issues that might arise during the development and testing of your React Native application. Follow these steps to clear the cache:

1. **Clear Metro Bundler Cache**:

   To clear the Metro Bundler cache, run the following command in your project's root directory:

   ```bash
   npx react-native start --reset-cache
   ```

2. **Clear Android Build Cache**:

   If you're encountering issues related to the Android build, you can clear the Android build cache by running the following command:

   ```bash
   cd android && ./gradlew clean
   ```

3. **Clear iOS Build Cache**:

   For iOS, you can clear the build cache by deleting the `DerivedData` folder. The path is generally:

   ```
   ~/Library/Developer/Xcode/DerivedData/
   ```

   Delete the contents of the `DerivedData` folder.

---

## 2. Building APK <a name="building-apk"></a>

Building the APK (Android Package) is an important step in preparing your React Native app for distribution or testing on Android devices. Here's how you can build the APK:

run `yarn build:apk` or follow the steps below.

1. **Navigate to the Android Directory**:

   Open your terminal and navigate to the `android` directory of your React Native project:

   ```bash
   cd android
   ```

2. **Build the APK**:

   To build the APK, use the following Gradle command:

   ```bash
   ./gradlew assembleRelease
   ```

   This command will trigger the build process and create the APK file.

3. **Generated APK Location**:

   Once the build process is complete, you can find the generated APK file at the following location:

   ```
   rise/android/app/build/outputs/apk/release/app-release.apk
   ```

---

## 3. Locating Built APK Files <a name="locating-built-apk-files"></a>

After building the APK, you can easily locate the generated APK files using the file paths provided in the previous section:

- For release APK: `rise/android/app/build/outputs/apk/release/app-release.apk`

---

Congratulations!.

For more in-depth information and troubleshooting, refer to the official documentation of [React Native](https://reactnative.dev/docs/getting-started) and [Android Studio](https://developer.android.com/studio/build/building-cmdline).

If you encounter any issues beyond the scope of this documentation, don't hesitate to seek help from the team lead.
