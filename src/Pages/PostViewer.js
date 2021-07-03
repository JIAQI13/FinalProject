import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Table } from 'reactstrap';

export const GET_POSTS = gql`
  query GetPosts {
    posts {
      id
      author
      body
    }
  }
`;

export const GET_ARTIST = gql`
  query GetArtist {
    query {
      id
      name
      popularity
      genres
    }
  }
`;

export default function PostViewer() {
  return (
    <div>
      <Query query={GET_POSTS}>
        {({ loading, data }) => !loading && (
          <Table>
            <thead>
              <tr>
                <th>Author</th>
                <th>Body</th>
              </tr>
            </thead>
            <tbody>
              {data.posts.map(post => (
                <tr key={post.id}>
                  <td>{post.author}</td>
                  <td>{post.body}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Query>
      <Query query={GET_ARTIST}>
        {({ loading, data }) => !loading && (
          <Table>
            <thead>
              <tr>
                <th>name</th>
                <th>popularity</th>
              </tr>
            </thead>
            <tbody>
              {data.query.map(artist => (
                <tr key={artist.id}>
                  <td>{artist.name}</td>
                  <td>{artist.popularity}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Query>
    </div>
  );
};

