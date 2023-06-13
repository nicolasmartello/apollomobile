import { View, ScrollView } from 'react-native';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Tracks from './components/tracks';
import Header from './components/header';
import { styles } from './App.styles';

const server = process.env.SERVER_URL;
const client = new ApolloClient({
  uri: server,
  cache: new InMemoryCache()
});

const App = () => (
  <ApolloProvider client={client}>
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <View style={styles.container}>
        <Header />
        <Tracks />
      </View>
    </ScrollView>
  </ApolloProvider>
);

export default App;


