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

const GET_PEOPLE = gql`
  {
    people {
      id
    }
  }
`

const ApolloTestMutationUpdate = () => {
  return (
    <Mutation 
      mutation={ADD_PERSON}
      update={(cache, { data }) => {
        const res = cache.readQuery({ query: GET_PEOPLE });
        cache.writeQuery({
          query: GET_PEOPLE,
          data: {
            people: res.people.concat([data.addPerson])
          }
        })
      }}
    >
      {
        (addPerson, { loading, error, data }) => {
          if (loading) {
            return <p>LOADING</p>;
          }
          if (error) {
            return <p>ERROR</p>;
          }
          console.log('Mutaion update data', data);
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
              MUTATION BUTTON UPDATE
            </div>
          );
        }
      }
    </Mutation>
  )
};

export default ApolloTestMutationUpdate;
