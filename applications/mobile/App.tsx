import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ApolloWrapper from '@app/apollo-wrapper';
import Tracks from './components/tracks';

const App = () => (
  <ApolloWrapper>
    <View style={styles.container}>
      <Text>Running mobile App</Text>
      <Tracks />
    </View>
  </ApolloWrapper>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
