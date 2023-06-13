import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { styles } from "./queryHandler.styles";

const QueryHandler = ({ loading, error, data, children }) => {
  if (error) {
    return <Text>ERROR: {error.message}</Text>;
  }
  if (loading) {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator />
        <ActivityIndicator size="large" />
        <ActivityIndicator size="small" color="#0000ff" />
        <ActivityIndicator size="large" color="#00ff00" />
      </View>
    );
  }
  if (!data) {
    return <Text>Nothing to show...</Text>;
  }
  if (data) {
    return children;
  }
};

export default QueryHandler;
