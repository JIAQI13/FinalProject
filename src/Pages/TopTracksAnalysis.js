import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import RadarGraph from "../components/RadarGraph";
import { NavLink } from "react-router-dom";

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
    <div className="d-flex flex-row bd-highlight mb-3">
      <div className="d-flex align-items-center">
        <Query query={TOP_TRACKS}>
          {({ loading, data }) =>
            // !loading && console.log(data.top10Tracks)
            !loading && (
              <div className="d-flex flex-column p-2 m-2">
                <span className="d-flex bg-primary text-white">
                  Top 10 Tracks
                </span>
                <ol>
                  {data.top10Tracks.map((track) => {
                    return (
                      <li className="p-1 m-2">
                        {track.name}
                        {track.images}
                      </li>
                    );
                  })}
                </ol>
              </div>
            )
          }
        </Query>
      </div>
      <div className="flex-grow-1">
        <Query query={TRACKS_ANALYSIS}>
          {
            ({ loading, data }) =>
            // !loading && console.log(data)
            !loading && <RadarGraph data={data}></RadarGraph>
          }
        </Query>
      </div>
    </div>
  );
}
