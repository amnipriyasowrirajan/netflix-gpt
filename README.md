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
- Fetch API from TMDB movies

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
