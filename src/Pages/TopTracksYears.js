import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import HeatMap from '../components/HeatMap'
import Loader from "react-loader-spinner";


export default function RelatedArtists (props) {

  const GET_TRACKS_INFO_FIRST = gql`
    query gettopTrackOffset {
      topTrackOffset(limit:"49", offset:"0"){
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

  const GET_TRACKS_INFO_SECOND = gql`
    query gettopTrackOffset {
      topTrackOffset(limit:"50", offset:"49"){
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

  return (
    <div>
      <Query query={GET_TRACKS_INFO_FIRST}>
        {({ loading: loadingOne, data: one }) => (
          <Query query={GET_TRACKS_INFO_SECOND}>
            {({ loading: loadingTwo, data: two }) => {
              if (loadingOne || loadingTwo) {
                return (
                  <Loader
                    type="Bars"
                    color="#57F289"
                    height={100}
                    width={100}
                  />
                );
              }
              return (
                <HeatMap dataGraphFirst={one} dataGraphSecond={two}></HeatMap>
              );
            }}
          </Query>
        )}
      </Query>
    </div>
  );
}
