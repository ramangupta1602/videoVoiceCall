This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Video and Voice Call Implementation Guide

This project already includes the core setup for Zego Cloud-based calling. Follow the steps below to implement and run video and voice calls in the app.

## 1. Create a Zego Cloud account

1. Sign up at Zego Cloud.
2. Create a new project.
3. Copy your AppID and AppSign values.
4. Paste them into [src/constants/MyAppKeys.tsx](src/constants/MyAppKeys.tsx).

Example:

```ts
const AppID = 'your_app_id';
const AppSign = 'your_app_sign';
```

## 2. Install the required packages

The project already depends on the Zego calling SDK packages in [package.json](package.json). If you are setting up from scratch, install them with:

```sh
npm install @zegocloud/zego-uikit-prebuilt-call-rn @zegocloud/zego-uikit-rn zego-express-engine-reactnative zego-zim-react-native
```

Then install iOS pods:

```sh
cd ios
pod install
```

## 3. Create a call screen

The call UI is already wired in [src/screens/VideoCallScreen/VideoCallScreen.js](src/screens/VideoCallScreen/VideoCallScreen.js).

This screen uses the `ZegoUIKitPrebuiltCall` component and passes:

- `appID`
- `appSign`
- `userID`
- `userName`
- `callID`
- a call configuration object

## 4. Choose the call type

You can switch between video and voice calls by changing the config object.

### Video call

```js
import { ONE_ON_ONE_VIDEO_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
```

### Voice call

```js
import { ONE_ON_ONE_VOICE_CALL_CONFIG } from '@zegocloud/zego-uikit-prebuilt-call-rn';
```

Use the voice config when you want audio-only calling.

## 5. Pass the user and call identifiers

Use a unique identifier for each user and call:

```js
userID={'12345'}
userName={'App Stack Engineer'}
callID={'12345'}
```

In a real app, these should come from your backend or authentication system instead of hardcoded values.

## 6. Connect the screen from the home screen

The home screen already has a button that navigates to the call screen. The navigation is configured through [src/navigation/Routes.js](src/navigation/Routes.js) and [src/screens/Home/Home.tsx](src/screens/Home/Home.tsx).

When the user taps the button, the app opens the call UI.

## 7. Handle call lifecycle events

You can respond when a call ends or fails:

```js
config={{
  ...ONE_ON_ONE_VIDEO_CALL_CONFIG,
  onCallEnd: (callID, reason, duration) => {
    navigation.goBack();
  },
}}
```

This is useful for closing the screen, saving call history, or sending analytics events.

## 8. Run the app

Start Metro:

```sh
npm start
```

Then run the app:

```sh
npm run android
```

or

```sh
npm run ios
```

## 9. Testing checklist

- Open the app on two devices or simulators.
- Start a call from one device.
- Accept the incoming call from the other device.
- Verify video/audio works.
- Test ending the call and the callback flow.

## 10. Production recommendations

- Store AppID and AppSign securely.
- Generate `userID` and `callID` dynamically from your backend.
- Use voice config for audio-only calls.
- Add authentication and call history if you plan to ship the feature.

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
# VideoCalling_ZegoCloude
