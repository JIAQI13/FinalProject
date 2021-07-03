import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BubblesGraph from '../components/BubblesGraph';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtist {
    query {
      id
      name
      popularity
      genres
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
