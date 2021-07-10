import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import ForceChart from '../components/ForceChart'
import { useLocation } from 'react-router';
import { useParams } from 'react-router-dom';


export default function RelatedArtists(props) {
  const location = useLocation();

  let GET_TRACK = gql`
    query GetTrack {
      relatedArtists (id:"${location.state ? location.state.id : ""}") {
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

  if (location.state) {
    return (
      <div>
        <Query query={GET_TRACK}>
          {({ loading, data }) => !loading && (
            <ForceChart graphData={data} parent={location.state}></ForceChart>
          )}
        </Query>
      </div>
  );
  }

  return (<></>);

}
