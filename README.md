<p align="center">
  <img src="./.github/assets/readme-banner.svg" alt="DigitalMap" width="100%" />
</p>

<p align="center">
  An early-stage cross-platform mapping experiment built around React, Expo, and React Native Maps.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-17.0-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/React_Native-0.64-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-SDK_44-000020?style=flat-square&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/Maps-react--native--maps-22C55E?style=flat-square&logo=googlemaps&logoColor=white" alt="React Native Maps" />
  <img src="https://img.shields.io/badge/Status-Early_Prototype-F97316?style=flat-square" alt="Early prototype" />
</p>

## Overview

**DigitalMap** is an experimental repository for exploring map-based interfaces across web and mobile. It includes an Expo / React Native project scaffold, platform artwork, a `react-native-maps` dependency, and an experimental React entry point intended to render a dedicated `MapChart` component.

The repository also retains a small React Native form exercise in `lesson6/`, documenting an earlier learning step involving state, text input, and component styling.

## Intended Capabilities

- 🗺️ Render an interactive digital map
- 📱 Support Android, iOS, and web through Expo
- 📍 Build on `react-native-maps` for native map experiences
- 🎨 Use platform-specific icons, splash screens, and adaptive artwork
- 🧪 Provide a compact environment for testing map and UI concepts

## Tech Stack

| Area | Technology |
|---|---|
| Application | React 17, React Native 0.64 |
| Runtime | Expo SDK 44 |
| Mapping | react-native-maps 0.29 |
| Web support | React DOM, React Native Web |
| Tooling | Babel, Yarn / npm |

## Repository Structure

```text
DigitalMap/
├── App.js                  # Experimental map application entry
├── app.json                # Expo project configuration
├── assets/                 # App icon, splash, favicon, adaptive icon
├── babel.config.js         # Expo Babel preset
├── lesson6/6.txt           # React Native form and state exercise
├── package.json
└── yarn.lock
```

## Getting Started

### Prerequisites

- Node.js 14 or later
- npm or Yarn
- Expo-compatible development environment

### Installation

```bash
git clone https://github.com/salmasoo88/DigitalMap.git
cd DigitalMap
yarn install
```

### Expo Commands

```bash
yarn start      # Open the Expo development tools
yarn android    # Launch on Android
yarn ios        # Launch on iOS
yarn web        # Launch the web target
```

## Current Status

> [!WARNING]
> This repository is an early project snapshot, not a runnable release. The committed `App.js` references `MapChart` and `styles.css`, but those files are not currently present. It also mixes a React DOM entry pattern with an Expo project configuration.

Before running the project, the implementation should be aligned around either:

1. an Expo / React Native entry component using `react-native-maps`, or
2. a React web entry with the missing `MapChart.js`, `styles.css`, and HTML root restored.

## Suggested Next Steps

- [ ] Restore or implement the missing map component
- [ ] Choose and document the primary web or native runtime
- [ ] Update Expo and React Native dependencies
- [ ] Add location data and interactive markers
- [ ] Add screenshots and platform-specific test notes
- [ ] Introduce linting and component tests

## Maintainer

**Salma Soofiyan** — Cybersecurity, AI & Machine Learning Researcher  
[GitHub](https://github.com/salmasoo88) · [LinkedIn](https://www.linkedin.com/in/salma-soofiyan-92033011b/)

