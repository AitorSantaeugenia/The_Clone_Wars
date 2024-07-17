# Netflix clone with React, Tailwind CSS & Firebase

## Introduction 
<code>Note:</code> since it's under construction (not finished yet), maybe some functions are dissabled (like login or my list)</br>
Also, firestore database will only work until 1/11/2022. Then will stop working (maybe I renew the dates, maybe not)...</br>
<code>For sure the repo is better than the online one</code></br>

## Deploy
https://netflix-cl-90b7a.web.app/ || [or here](https://netflix-cl-90b7a.web.app/)

~~~
testing@test.com
Testing
~~~

<details>
  <summary><code>Why a clone of netflix?</code></summary>

  ```javascript
   // I want to create Frontend copies (with ReactJS, Tailwind, NetxJS, GrapQL or other tecnologies)
   // of all famous websites, just to keep learning.
   // Some of them, will have backend too with NodeJS, ExpressJS, Mongoose, MongoDB, Firebase, etc.
  ```  
</details>

---
<code>Adding and removing movies to your list:</code>
<div align="center">

![Adding-Removing](https://user-images.githubusercontent.com/14861253/193696864-e22c41ce-2286-4a2e-9516-38b7b32d0e5a.gif)
</div>

<code>Demonstration:</code>
<div align="center">

![Demo](https://user-images.githubusercontent.com/14861253/193696115-a341f5bc-da9b-4574-8668-f51272a8c06a.gif)
</div>

<code>Fully responsive:</code>
<div align="center">

![Responsive](https://user-images.githubusercontent.com/14861253/193696191-4a2c5b73-4856-4928-a2ce-5dda72d26d3b.gif)

</div>

---

## Dependencies
  <code>yarn install || npm i</code>

~~~json
    "@testing-library/jest-dom": "^5.14.1",
    "@testing-library/react": "^13.0.0",
    "@testing-library/user-event": "^13.2.1",
    "axios": "^0.27.2",
    "firebase": "^9.9.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.4.0",
    "react-router-dom": "^6.3.0",
    "react-scripts": "5.0.1",
    "tailwind-scrollbar-hide": "^1.1.7",
    "web-vitals": "^2.1.0"
~~~

## [API](https://developers.themoviedb.org/3/getting-started/introduction) usage
~~~js
We are using The Movie Database API, you can find it here:
//https://developers.themoviedb.org/3/getting-started/introduction
~~~

## Create a .env file with the following
~~~js
  #TMDB API
  REACT_APP_IMDB_API_KEY=yours

  #FIREBASE
  REACT_APP_FIREBASE_API_KEY=yours
  REACT_APP_FIREBASE_AUTH_DOMAIN=yours
  REACT_APP_FIREBASE_PROJECT_ID=yours
  REACT_APP_FIREBASE_STORAGE_BUCKET=yours
  REACT_APP_MESSAGING_SENDER=yours
  REACT_APP_APP_ID=yours
~~~

---

## TODO
- Improve acordion function
- Chevron netflix alike
- Carousel
- Play video
- Modal for more info about movie/TV serie -> done in local version, need a fix tho
- Maybe explore another options with the API
