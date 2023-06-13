import React from 'react';
import { useQuery, gql } from '@apollo/client';
import { TRACKS } from '../../queries';

import QueryHandler from '../queryHandler';
import TrackCard from '../trackCard';

const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  return (
      <QueryHandler error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track) => (
          <TrackCard key={track.id} track={track} />
        ))}
      </QueryHandler>
  );
};

export default Tracks;
