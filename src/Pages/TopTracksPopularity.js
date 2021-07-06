import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BubblesGraph from '../components/BubblesGraph';

export const GET_TRACK = gql`
  query GetTrack {
    topTracks {
      id
      name
      popularity
      album {
        images {
          height
          url
          width
        }
      }
    }
  }
`;

export default function TopTracks (props) {
  return (
    <div>
      <Query query={GET_TRACK}>
        {({ loading, data }) => !loading && (
          <BubblesGraph graphData={data} dataSet={"topTracksPopularity"}></BubblesGraph>
        )}
      </Query>
    </div>
  );
}
