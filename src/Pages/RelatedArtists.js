import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ForceChart from '../components/ForceChart'
import { useParams } from 'react-router-dom';


export default function RelatedArtists(props) {
  const { id } = useParams();
  console.log(id);

  const GET_TRACK = gql`
    query GetTrack {
      relatedArtists (id:"${id}") {
        id
        name
        images {
          height
          url
          width
        }
        external_urls {
          spotify
        }
      }
    }
  `;

  return (
    <div>
      <Query query={GET_TRACK}>
        {({ loading, data }) => !loading && (
          <ForceChart graphData={data} parent={id}></ForceChart>
        )}
      </Query>
    </div>
  );
}
