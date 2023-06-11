import React from 'react';
import { Text, View, Image } from 'react-native';

const TrackCard = ({ track }) => {
  const { title, thumbnail, author, length, modulesCount, id } = track;
  
  return (
    <View>
      <Image
        source={thumbnail}
      />
      <Text>{id}</Text>
      <Text>{title}</Text>
      <Text>{author.name}</Text>
      <Text>{length}</Text>
    </View>
  );
};

export default TrackCard;
