/**
 * 단순 Query test
 */

import React from 'react';
import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

const GET_PEOPLE = gql`
  {
    people {
      name
      id
    }
  }
`

const ApolloTest = () => {
  return (
    <Query
      query={GET_PEOPLE}
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
          return (
            <>
            {
              data.people.map((person) => {
                return <div key={person.id}>{person.name}</div>
              })
            }
            </>
          );
        }
      }
    </Query>
  )
};

export default ApolloTest;
