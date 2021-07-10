import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { useHistory } from 'react-router';
import BubblesGraph from '../components/BubblesGraph';
import Loader from 'react-loader-spinner';

const tmpStyle = {
  display: 'flex',
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  paddingTop: "20%"
};

export const GET_ARTIST = gql`
  query GetArtist {
    topArtists {
      id
      name
      popularity
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
  // to the artist's id, looking for related artists
  const history = useHistory()

  const onClick = (id, name, images, external_urls) => {
    console.log("name", name)
    console.log("images", images)
    console.log("external_urls", external_urls)

    history.push({
      pathname: `${id}/related-artists`,
      state: {
        id: id,
        name: name,
        images: [...images],
        external_urls: {...external_urls}
      }
    });
  }

  return (
    <div>
      <Query query={GET_ARTIST}>
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
          data.topArtists.forEach((element) => {element.numbers = element.popularity})

          console.log("graphData", data)

          return (
            <BubblesGraph graphData={data} onClick={onClick}></BubblesGraph>
          );
        }}
      </Query>
    </div>
  );
}
