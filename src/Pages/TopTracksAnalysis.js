import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RadarGraph from "../components/RadarGraph";
import Loader from "react-loader-spinner";

const tmpStyle = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20%"
};

const TOP_TRACKS = gql`
  query TOP_TRACKS {
    top10Tracks {
      id
      name
    }
  }
`;
const TRACKS_ANALYSIS = gql`
  query TRACKS_ANALYSIS {
    tracksAnalysis {
      id
      danceability
      energy
      speechiness
      acousticness
      instrumentalness
      liveness
      valence
    }
  }
`;

export default function TopTracksAnalysis() {
  return (
    <Query query={TOP_TRACKS}>
      {({ loading: loadingOne, data: one }) => (
        <Query query={TRACKS_ANALYSIS}>
          {({ loading: loadingTwo, data: two }) => {
            if (loadingOne || loadingTwo) {
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
              return (
                <RadarGraph dataGraphFirst={one} dataGraphSecond={two}></RadarGraph>
              );
            }}
          </Query>
        )}
      </Query>
  );
}
