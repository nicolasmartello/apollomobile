import React from 'react';

import { useQuery } from '@apollo/client';
import { GET_TRACK } from '@app/queries';

import QueryHandler from '../queryHandler';

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  });
  return (
    <QueryHandler error={error} loading={loading} data={data}>
      {data?.track}
    </QueryHandler>
  );
};

export default Track;