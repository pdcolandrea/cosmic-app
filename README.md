[App Store]: https://apple.co/458U0ul
[React Native]: https://github.com/facebook/react-native
[TypeScript]: https://github.com/microsoft/TypeScript
[React Navigation]: https://github.com/react-navigation/react-navigation
[i18next]: https://github.com/i18next/react-i18next
[NativeWind]: https://github.com/marklawlor/nativewind
[Async Storage]: https://github.com/react-native-async-storage/async-storage
[Reanimated]: https://github.com/software-mansion/react-native-reanimated
[React Native Gesture Handler]: https://github.com/software-mansion/react-native-gesture-handler
[React Native Skia]: https://github.com/Shopify/react-native-skia
[Zustand]: https://github.com/pmndrs/zustand
[Urvashi Kaushik]: https://www.figma.com/community/file/1239478379819513105
[Expo]: https://github.com/expo/expo

<div align="center">
<img src="https://i.imgur.com/4B9GlM2.png alt="cosmic">
    <h3>Cosmic</h3>
</div>
<p align="center">
  <em>
    A fun, interactive React-Native app for users to explore the galaxy, featuring daily space facts and a favorite system to bookmark intriguing planets and stars.
    <br/><br/>
    <b>In Development</b>
  </em>
</p>
<p align="center">
  <a href="https://github.com/search?q=repo%3Apdcolandrea%2Fcosmic-app++language%3ATypeScript&type=code" target="_blank">
    <img src="https://img.shields.io/github/languages/top/pdcolandrea/cosmic-app" alt="Language">
  </a>
  <!-- <a href="https://apple.co/458U0ul" target="_blank">
    <img src="https://img.shields.io/itunes/v/6449445087?logo=Apple&label=App%20Store" alt="App store">
  </a> -->
<img src="https://img.shields.io/badge/iOS-12.0+-blue?logo=Apple" alt="MIT license">
  <a href="https://github.com/pdcolandrea/cosmic-app/blob/master/LICENSE" target="_blank">
    <img src="https://img.shields.io/badge/License-MIT-teal.svg" alt="MIT license">
  </a>
</p>

## About

Cosmic is an interactive React-Native app for exploring and learning about celestial bodies. It offers users an engaging way to discover and save their favorite planets and stars, supported with daily updated space facts.

## Features

- **Interactive Galactic Map**: Navigate through the stars and planets with ease.
- **Daily Space Facts**: Learn something new every day about the cosmos.
- **Favorites Feature**: Save and revisit your favorite celestial objects.
- **Animated Star Backgrounds**: Experience the galaxy with captivating animations powered by Skia and Reanimated.
- **Articles**: View recent space articles (Harcoded)
- **Profile**: View your profle (coming soon)

## Star Implementation

The potential performance issues noted in the animated components might be due to my own understanding of animation techniques rather than the capabilities of the packages themselves. For simpler or more performance-optimized alternatives, obviously, using a static star SVG background should be considered.

- **Reanimated Star Background**: `components/star-background.tsx` uses [Reanimated] to create an animated starry sky. Note: This implementation showed poorer performance compared to Skia.
- **Skia Animated Stars**: `components/star-skia-background.tsx` utilizes [React Native Skia] to produce a layered, animated star background with added depth and occasional shooting stars for enhanced visual impact. This implementation looks the best - by far. Performance..... not so much.
- **Standard Skia Background**: `components/star-skia-background-standard.tsx` offers a simpler animated star background using [React Native Skia] without the layers for a more straightforward effect. This implementation has the best performance.

<div align="center">
<img src="https://i.imgur.com/GRmJ8o8.gif" alt="cosmic" style="height: 700px; width: auto;">
<p>Preview of stars</p>
</div>

## Getting Started

### Installation

Open a Terminal in the project root and run...

Install all dependencies:

```shell
yarn install
```

Install all pods:

```shell
cd ios && pod install
```

### Running on Simulator

```shell
yarn run run:ios
```

or

```shell
yarn run run:android
```

## Built With

Cosmic is built using [Expo], [React Native] and [TypeScript].

### User Interface

- [NativeWind] - UI library
- [Reanimated] & [React Native Gesture Handler] - For building interactive UIs
- [React Native Skia] - Drawing background

- 🎨 [Urvashi Kaushik] - For the Design

### Features

- [Zustand] & [Async Storage] - Managing application state, data and storage
- [i18next] - Internalization

## License

Cosmic is licensed under the terms of the MIT license.
