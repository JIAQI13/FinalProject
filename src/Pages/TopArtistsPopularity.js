import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BubblesGraph from '../components/BubblesGraph';

export const GET_ARTIST = gql`
  query GetArtist {
    query {
      id
      name
      popularity
      genres
      images {
        height
        url
        width
      }
    }
  }
`;

export default function TopTracks () {
  return (
    <div>
      <Query query={GET_ARTIST}>
        {({ loading, data }) => !loading && (
          <BubblesGraph graphData={data}></BubblesGraph>
        )}
      </Query>
    </div>
  );
}
