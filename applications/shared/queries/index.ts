import { gql } from '@apollo/client';

export const GET_TRACK = gql`
  query getTrack($trackId: ID!) {
    track(id: $trackId) {
      id,
      description,
      thumbnail,
      length,
      numberOfViews,
      author {
        id,
        name,
        photo,
      },
      modulesCount,
      modules {
        id,
        title,
        length,
      }
    }
  }
`;


export const TRACKS = gql`
  query getTracks {
    tracksForHome {
      id
      title
      thumbnail
      length
      modulesCount
      author {
        name
        photo
      }
    }
  }
`;


/**
 * Mutation to increment a track's number of views
 * (exported for tests)
 */
export const INCREMENT_TRACK_VIEWS = gql`
  mutation IncrementTrackViewsMutation($incrementTrackViewsId: ID!) {
    incrementTrackViews(id: $incrementTrackViewsId) {
      code,
      success,
      message,
      track {
        id
        numberOfViews
      }
    }
  }
`;