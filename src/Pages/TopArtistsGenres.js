import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ChordChart from '../components/ChordChart';

export const GET_ARTIST = gql`
  query GetArtist {
    topArtists {
      id
      name
      genres
      images {
        height
        url
        width
      }
    }
  }
`;

export default function TopArtistsPopularity () {
  return (
    <div>
      <Query query={GET_ARTIST}>
        {({ loading, data }) => !loading && (
          <ChordChart graphData={data}></ChordChart>
        )}
      </Query>
    </div>
  );
}
