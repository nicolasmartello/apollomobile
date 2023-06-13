# Apollo-mobile

The scaffolding of this project belongs to [Apollographql - tutorial](https://odyssey.apollographql.com/). The goal of this project is play with Apollojs, React-native and typescript.


## How to use this repo

There are 2 main folders:

- `server`: The starting point of our GraphQL server.
- `mobile`: The starting point of the mobile application.

#### First run the server

1. Navigate to the `server` folder.
2. Run `npm install`.
3. Run `npm start`.

This will start the GraphQL API server.

#### To run the mobile app
In another Terminal.

1. Navigate to the `mobile` folder.
2. Run `npx expo start`.
3. Create an `.env` file.
4. Configure the the server URL with your local IP, `SERVER_URL="http://your-IP:4000"`. If you change the port, you must change the port in the server as well.
5. Run `npm start`.
6. Install Expo in your mobile device. Use your device camera to open the app.
