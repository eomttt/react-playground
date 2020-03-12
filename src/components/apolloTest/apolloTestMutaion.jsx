import React from 'react';
import { Mutation } from 'react-apollo';
import { gql } from 'apollo-boost';

const ADD_PERSON = gql`
  mutation AddPerson($name: String!, $age: Int!, $gender: String!) {
    addPerson(name: $name, age: $age, gender: $gender) {
      id
      name
    }
  }
`;

const ApolloTestMutation = () => {
  return (
    <Mutation 
      mutation={ADD_PERSON}
    >
      {
        (addPerson, { loading, error, data }) => {
          if (loading) {
            return <p>LOADING</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          console.log('Mutaion data', data);
          return (
            <div onClick={() => {
              addPerson({
                variables: {
                  name: 'test1',
                  age: 5,
                  gender: 'male'
                }
              })
            }}>
              MUTATION BUTTON
            </div>
          );
        }
      }
    </Mutation>
  )
};

export default ApolloTestMutation;
