import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BubblesGraphFollowers from '../components/BubblesGraphFollowers';

export const GET_ARTIST = gql`
  query GetArtist {
    query {
      id
      name
      popularity
      genres
      followers {
        href
        total
      }
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
          <BubblesGraphFollowers graphData={data}></BubblesGraphFollowers>
          )}
      </Query>
    </div>
  );
}
