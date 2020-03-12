/**
 * Action 이 있을 때에 query test
 */

import React from 'react';
import { ApolloConsumer } from 'react-apollo';
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
    <ApolloConsumer>
      {
        (client) => {
          return (
            <div>
              <button onClick={async () => {
                const { data } = await client.query({
                  query: GET_PEOPLE,
                });
                console.log('Delay query datat', data);
              }} />
            </div>
          )
        }
      }
    </ApolloConsumer>
  )
};

export default ApolloTest;
