const { ApolloServer } = require('apollo-server');
const TrackTypeDefs  = require('./schemas/track-schemas');
const TrackResolvers = require('./resolvers/track-resolvers');
const TrackApi = require('./datasources/track-api');

const server = new ApolloServer({
  typeDefs: [TrackTypeDefs],
  resolvers: [TrackResolvers],
  dataSources: () => ({
    trackAPI: new TrackApi()
  })
})

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});