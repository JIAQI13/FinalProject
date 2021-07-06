import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ForceChart from '../components/ForceChart'
// import { useParams } from 'react-router';

export const GET_TRACK = gql`
  query GetTrack {
    topTracks {
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

export default function RelatedArtists () {
  // const { id } = useParams();

  return (
    <div>
      <Query query={GET_TRACK}>
        {({ loading, data }) => !loading && (
          <ForceChart graphData={data}></ForceChart>
        )}
      </Query>
    </div>
  );
}
