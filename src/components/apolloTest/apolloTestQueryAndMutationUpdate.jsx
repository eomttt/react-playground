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

const ApolloTestQueryAndMutationUpdate = () => {
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
          console.log('Query and Mutation update data in query', data);
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
                update={(cache, { data: updateData }) => {
                  const res = cache.readQuery({ query: GET_PEOPLE });
                  cache.writeQuery({
                    query: GET_PEOPLE,
                    data: {
                      people: res.people.concat([updateData.addPerson])
                    }
                  })
                }}
              >
                {
                  (addPerson, { loading, error, data: mutationData }) => {
                    if (loading) {
                      return <p>LOADING</p>;
                    }
                    if (error) {
                      return <p>ERROR</p>;
                    }
                    console.log('Query and Mutation update data in mutation', mutationData);
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

export default ApolloTestQueryAndMutationUpdate;
