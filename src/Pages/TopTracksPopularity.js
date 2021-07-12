import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import BubblesGraph from "../components/BubblesGraph";
import VusicLoader from "../components/VusicLoader";

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

export default function TopTracks(props) {
  return (
    <div>
      <Query query={GET_TRACK}>
        {({ loading, data }) => {
          if (loading) {
            return <VusicLoader />;
          }
          data.topTracks.forEach((element) => {
            element.numbers = element.popularity;
            element.images = [...element.album.images];
          });

          return (
            <>
              <h1 class="d-flex justify-content-center display-3 text-white">
                Tracks by Popularity
              </h1>
              <BubblesGraph graphData={data}></BubblesGraph>
            </>
          );
        }}
      </Query>
    </div>
  );
}
