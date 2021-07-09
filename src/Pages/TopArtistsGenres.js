import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ChordChart from '../components/ChordChart';
import Loader from "react-loader-spinner";

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
  const tmpStyle = {
    "display": 'flex',
    "justify-content": "center",
    "align-content": "center",
    "padding-top": "30%"
  };

  return (
    <div>
      <Query query={GET_ARTIST}>
        {({ loading, data }) => {
          if (loading) {
            return (
              <div style={tmpStyle}>
                <Loader
                  type="Bars"
                  color="#57F289"
                  height={100}
                  width={100}
                />
              </div>
            );
          }
          return(
            <ChordChart graphData={data}></ChordChart>
          );
        }}
      </Query>
    </div>
  );
}
