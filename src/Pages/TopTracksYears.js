import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HeatMap from '../components/HeatMap'
import { useLocation, useParams } from 'react-router';

export default function RelatedArtists (props) {
  const location = useLocation();

  const GET_TRACKS_INFO = gql`
    query getTopTracksInfo {
      topTracksInfo {
          id
          name
          artists{
            name
          }
          album{
            release_date
          }
        }
      }
    `;

  console.log("tracks?", GET_TRACKS_INFO)

  return (
    <div>
      <Query query={GET_TRACKS_INFO}>
        {({ loading, data }) => !loading && (
          <HeatMap graphData={data}></HeatMap>
        )}
      </Query>
    </div>
  );
}
