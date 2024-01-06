# Netflix GPT

- Create React App
- Configured TailwindCSS
- Header
- Routing of App
- Login Form
- Sign up Form
- Form Validation
- useRef Hook =>(useRef is a React Hook that lets you reference a value that’s not needed for rendering.)
- Firebase setup
- deploying our app to production
- Create Signup User Account
- Implement Sign In user API
- Created Redux Store with userSlice
- Implemented the sign out features
- Update Profile
- BugFix: Sign Up user displayName and profile picture update
- BugFix: if the user is not logged in redirect /browse to login page.
- Unsubscribe to the onAuthStateChanged callback
- create a custom hooks for browser ( create a folder name hooks,name of the hook always start with use)
- Add hardcoded values to the constants file.
- Fetch API from TMDB movies
- Register TMDB API and create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for now Playing movies
- create movieSlice
- Update store with movies data
- Planning for MainContainer & secondary Container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Youtube video and make it autoplay and mute
- Tailwind classes to make Main Container look awesome

# Features

- Login/Sign Up
  - Sign In/Sign Up Form
  - Redirect to Browser Page
- Browser (after authentication)

  - Header
  - Main Movie
    - Trailer in Background
    - Title and Description
    - Movie Suggestion
      - MovieLists \* N

- NetflixGPT

  - Search Bar
  - Movie Suggestions

- Large forms usage use formik.org

- I am going to use useRef hooks
- Regex => for email validation

- You can either use a state variable to store the email and password information, or you can use useRef.
- using useRef is created by react

- When you submit the sign-in form, it will refresh the page. So, in the form, add onSubmit={(e) => e.preventDefault()} => i dont want to submit the form.
- useRef is used for reference a field or tag over email & password
- install redux library => i am going install two libraries
  - npm i D @reduxjs/toolkit
  - npm i react-redux
- create a new file an utils=> appStore =>import { configureStore } from "@reduxjs/toolkit";
- create a new file another file in utils=> userSlice.js => import { createSlice } from "@reduxjs/toolkit";
