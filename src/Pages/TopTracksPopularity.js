import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import BubblesGraph from '../components/BubblesGraph';
import Loader from 'react-loader-spinner';

const tmpStyle = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20%"
};

export const GET_TRACK = gql`
  query GetTrack {
    topTracks {
      id
      name
      popularity
      external_urls {
        spotify
      }
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
      {({ loading, data }) => {
          if (loading) {
            return (
              <div style={tmpStyle}>
                <h1>Vusic</h1>
                <Loader
                  type="Bars"
                  color="#57F289"
                  height={100}
                  width={100}
                />
              </div>
            );
          }
          data.topTracks.forEach((element) => {
            element.numbers = element.popularity
            element.images = [...element.album.images]
          })

          return (
            <BubblesGraph graphData={data}></BubblesGraph>
          );
        }}
      </Query>
    </div>
  );
}
