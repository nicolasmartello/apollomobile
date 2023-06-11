import React from 'react';
import {useQuery} from '@apollo/client';
import {Layout, QueryResult} from '../components';
import TrackDetail from '../components/track-detail';
import { GET_TRACK } from '@app/queries';

const Track = ({ trackId }) => {
  const { loading, error, data } = useQuery(GET_TRACK, {
    variables: { trackId }
  });
  return (
    <Layout>
      <QueryResult error={error} loading={loading} data={data}>
        <TrackDetail track={data?.track} />
      </QueryResult>
    </Layout>
  );
};

export default Track;