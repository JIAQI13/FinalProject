import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useHistory } from 'react-router';
import BubblesGraph from '../components/BubblesGraph';

export const GET_ARTIST = gql`
  query GetArtist {
    topArtists {
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

export default function TopArtistsPopularity () {
  // If a user selects an artist's bubble, will send user
  // to the artist's id, currently looking for related artists
  const history = useHistory()

  const onClick = (id) => {
    history.push(`${id}/related-artists`)
  }

  return (
    <div>
      <Query query={GET_ARTIST}>
        {({ loading, data }) => !loading && (
          <BubblesGraph graphData={data} dataSet={"topArtistsPopularity"} onClick={onClick}></BubblesGraph>
        )}
      </Query>
    </div>
  );
}
