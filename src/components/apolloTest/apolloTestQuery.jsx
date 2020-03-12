/**
 * 단순 Query test
 */

import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_PERSON = gql`
  query Person($id: String!) {
    person(id: $id) {
      name
    }
  }
`

const ApolloTestQuery = () => {
  return (
    <Query
      query={GET_PERSON}
      variables={{ id: '1' }}
    >
      {
        ({ loading, error, data}) => {
          if (loading) {
            return <p>LOADING</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          console.log('Query data', data);
          return <p>{data.person.name}</p>;
        }
      }
    </Query>
  )
};

export default ApolloTestQuery;
