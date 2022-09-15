# Netflix clone with React, Tailwind CSS & Firebase

## Demo 
<code>Note:</code> since it's under construction (not finished yet), maybe some functions are dissabled (like login or my list)</br>
Also, firestore database will only work until 1/10/2022. Then will stop working (maybe I renew the dates, maybe not)...</br>
<code>For sure the repo is better than the online one</code></br>

~~~
testing@test.com
Testing
~~~

https://netflix-tcw.web.app/

## Dependencies
  <code>yarn install || npm i</code>

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

## [API](https://developers.themoviedb.org/3/getting-started/introduction) usage
~~~
We are using <b>The Movie Database API</b>, you can find it here:</br>
https://developers.themoviedb.org/3/getting-started/introduction
~~~

## Create a .env file with the following
~~~
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

# TODO
- Improve acordion function
- Chevron netflix alike
- Carousel
- Play video
- Modal for more info about movie/TV serie
- Maybe explore another options with the API