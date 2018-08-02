### WORK IN PROGRESS

## Objective
This is a single page webapp that retrieves your recent match history in the online game, League of Legends. Users can submit their LoL username (summoner name) or anyone else's summoner name in order to see their publicly available match history and a small profile overview. Each match in the user's match history displays important statistics about the user's actions in that particular match, such as: whether the match was won or lost, the champion played, number of kills obtained, items obtained, gold earned...etc.  

## MVP Goals
- User can input their Summoner Name to retrieve their recent match history (20 most recent matches).
- Deal with CORS restriction by retrieving info with Node server, and then display with Vue.js
- Webapp is responsive to mobile, tablet and desktop.

## Technology & Implementation
This app is made as a client-only frontend app that does not persist or retrieve data from a backend database. Instead it demonstrates how a frontend-only app can be used to retrieve and display data from a public 3rd party API, especially one that has CORS restrictions.

The frontend display is created using Vue.js. League of Legends API is queried using a Node.js server with express. This is necessary due to the CORS restrictions that disallow Riot API to be accessed directly from browser or client-based systems. Node queries the Riot API using the 'async' library and then it serves this data to the Vue.js app in the frontend which will proceed to build HTML elements based on the data received.

## Additional Goals
- Create at least one type of analytic process, derived from match history data:
  - Gold/min or average KDA
- Additional champ based analytics
  - Mastery list
  - Best gold or KDA / champ


Build Setup
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
For a detailed explanation on how things work, check out the guide and docs for vue-loader.
