import React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import BubblesGraphTTP from "../components/BubblesGraphTTP";
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
              <h1 class="d-flex justify-content-flex-end">
                Tracks by Popularity
              </h1>
              <BubblesGraphTTP graphData={data}></BubblesGraphTTP>
            </>
          );
        }}
      </Query>
    </div>
  );
}
