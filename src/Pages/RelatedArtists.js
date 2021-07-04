import React from 'react';
import gql from 'graphql-tag';
import { useParams } from 'react-router';
// import { Query } from 'react-apollo';
// import BubblesGraph from '../components/BubblesGraph';

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
  const { id } = useParams();

  return (
    <>
      <h1>Hello</h1>
    </>
    // <div>
    //   <Query query={GET_TRACK}>
    //     {({ loading, data }) => !loading && (
    //       <BubblesGraph graphData={data} dataSet={"topTracksPopularity"}></BubblesGraph>
    //     )}
    //   </Query>
    // </div>
  );
}
