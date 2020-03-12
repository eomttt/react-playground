import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const ApolloTest = () => {
  return (
    <Query
      query={gql`
        query {
          testMovies(limit: 3, rating: 9) {
            id
            title
            rating
          }
          testMovie(id: 15553) {
            title
            summary
          }
        }
      `}
    >
      {
        ({ loading, error, data}) => {
          if (loading) {
            return <p>LOADING</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          console.log('Data', data);
          return <p>Data</p>;
        }
      }
    </Query>
  )
};

export default ApolloTest;
