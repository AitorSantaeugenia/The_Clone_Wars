# Netflix clone with React, Tailwind CSS & Firebase

- yarn create-react-app .
- yarn add -D tailwindcss postcss
- npx tailwind init
- add in tailwind.config.js
  content: ["./src/**/*.{jsx, ts, tsx, html, js}"],
- yarn add axios react-router-dom firebase
- yarn add react-icons tailwind-scrollbar-hide
- npm i -g firebase-tools

- firebase init 
  - select Hosting (not github one)
  - existing project > select your proyect
- yarn run build
- firebase deploy

# TODO
- Improve acordion function
- Navigate to /browse when user is signup, but go to "/" if user it's not (there is a bug, going to /browse and then redirecting)