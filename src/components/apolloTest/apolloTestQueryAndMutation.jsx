import React from 'react';
import { Mutation, Query } from 'react-apollo';
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
      name
    }
  }
`

const ApolloTestQueryAndMutation = () => {
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
          console.log('Query and Mutation data in query', data);
          return (
            <>
              <div>
                {
                  data.people.map((person) => {
                    return (
                      <div key={person.id}>
                        {person.name}
                      </div>
                    )
                  })
                }
              </div>
              <Mutation 
                mutation={ADD_PERSON}
              >
                {
                  (addPerson, { loading, error, data: mutationData }) => {
                    if (loading) {
                      return <p>LOADING</p>;
                    }
                    if (error) {
                      return <p>ERROR</p>;
                    }
                    console.log('Query and Mutation data in mutation', mutationData);
                    return (
                      <div onClick={() => {
                        addPerson({
                          variables: {
                            name: `person_${data.people.length + 1}`,
                            age: 5,
                            gender: 'male'
                          }
                        })
                      }}>
                        QUERY AND MUTATION MUTAION BUTTON
                      </div>
                    );
                  }
                }
              </Mutation>
            </>
          );
        }
      }
    </Query>
  )
};

export default ApolloTestQueryAndMutation;
