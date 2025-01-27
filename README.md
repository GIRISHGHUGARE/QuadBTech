# React Native Test

## Screen Recording
Link :- https://drive.google.com/drive/folders/18hA_pUhDU843hNU1l6iBhlDBZGp_pEBR?usp=sharing

## Description
This project is a React Native application designed to showcase movie data fetched from the TVMaze API. The app features:
- A **Splash Screen** for the initial loading experience.
- A **Home Screen** displaying a list of movies fetched from the API.
- A **Search Screen** to allow users to search for movies.
- A **Details Screen** showing detailed information about a selected movie.

The user interface is inspired by Netflix's dark theme, providing a visually engaging experience with smooth navigation.

---

## Features

### Splash Screen
- Displays an image and a welcoming message.
- Automatically transitions to the main app after 3 seconds.

### Home Screen
- Fetches and displays a list of movies using the API endpoint:
  ```
  https://api.tvmaze.com/search/shows?q=all
  ```
- Each movie card displays:
  - Thumbnail image.
  - Title.
  - Summary.
- Includes a search bar at the top that redirects users to the **Search Screen**.
- Clicking on a movie navigates to the **Details Screen**.

### Search Screen
- Features a search bar for typing queries.
- Fetches search results dynamically from the API endpoint:
  ```
  https://api.tvmaze.com/search/shows?q=${search_term}
  ```
- Displays search results in the same format as the Home Screen.
- Handles cases where no results are found and displays an appropriate message.

### Details Screen
- Displays detailed information about a selected movie:
  - High-resolution image.
  - Title.
  - Summary.

### Navigation
- **Bottom Tab Navigation** to switch between the Home Screen and the Search Screen seamlessly.
- **Stack Navigation** for navigating between movie details and main screens.

---

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/) installed.
- [React Native Expo](https://reactnative.dev/docs/environment-setup) set up.
- Android Studio or Xcode for running the app on an emulator/simulator.

### Steps
1. Clone the repository:
   ```
   git clone https://github.com/GIRISHGHUGARE/QuadBTech.git
   ```
2. Navigate to the project directory:
   ```
   cd MovieApp
   ```
3. Install dependencies:
   ```
   npm install
   ```
4. Start the Metro bundler:
   ```
   npm start
   ```
5. Run the app:
   - For Android:
     ```
     npx react-native run-android
     ```
   - For iOS:
     ```
     npx react-native run-ios
     ```

---

## Technologies Used
- **React Native**: For building the mobile application.
- **React Navigation**: For implementing stack and tab navigation.
- **React Native Vector Icons**: For icons used in the bottom navigation.
- **TVMaze API**: For fetching movie data.
- **Styling**: Custom Netflix-inspired dark theme using `StyleSheet`.

---

## Author
Girish Ghugare

