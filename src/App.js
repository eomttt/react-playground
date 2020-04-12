import React, { useState, useEffect } from 'react';

import './App.css';

// Props to child
// import ParentComp from './components/childProps/ParentComp';
// import ChildComp from './components/childProps/ChildComp';

// MulitiSelector
// import MultiSelector from './components/multiSelector/MultiSelector';
// import TestMultiCheckItem from './components/multiSelector/TestMultiCheckItem';
import ReactTreeMultiSelector from 'react-tree-multi-selector';
// import MultiSelector from 'multi-select-react';
import TestMultiCategories, { initialSelectedIds, exceptionIds, notSelectionIds } from './components/multiSelector/TestMultiCategories';

// Props to components
// import PropsComp from './components/propsComponent/PropsComp';

// Redux & Redux-Thunk test
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';
// import ReduxThunk from 'redux-thunk';
// import createSagaMiddleware from 'redux-saga';

// import CountComponent from './components/reduxThunkTest/Count';
// import CountFCComponent from './components/reduxThunkTest/CountFC';

// import reducers from './reducers';
// import sagas from './sagas';

// // Apollo
// import { ApolloProvider } from 'react-apollo';
// // Apollo boost
// import ApolloClient, { gql } from 'apollo-boost';

// Apollo client
// import { ApolloClient } from 'apollo-client';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createHttpLink } from "apollo-link-http";
// import gql from "graphql-tag";  

// import ApolloTest from './components/apolloTest/apolloTest';
// import ApolloTestDelay from './components/apolloTest/apolloTestDelay';
// import ApolloTestQuery from './components/apolloTest/apolloTestQuery';

// import ApolloTestMutation from './components/apolloTest/apolloTestMutaion';
// import ApolloTestMutationUpdate from './components/apolloTest/apolloTestMutaionUpdate';

// import ApolloTestQueryAndMutation from './components/apolloTest/apolloTestQueryAndMutation';
// import ApolloTestQueryAndMutationUpdate from './components/apolloTest/apolloTestQueryAndMutationUpdate';

// Epub
// import EpubReader from './components/epubReader/EpubReader';

// const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducers, applyMiddleware(ReduxThunk, sagaMiddleware));

// sagaMiddleware.run(sagas);

// Use Apollo client
// const client = new ApolloClient({
//   link: createHttpLink({ uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : '' }),
//   cache: new InMemoryCache(),
// });

// // Use Apollo boost
// const client = new ApolloClient({
//   uri: process.env.NODE_ENV === 'development' ? 'http://localhost:4000/graphql' : '',
// });

// client
//   .query({
//     query: gql`
//       query {
//         testMovies(limit: 3, rating: 9) {
//           id
//           title
//           rating
//         }
//         testMovie(id: 15553) {
//           title
//           summary
//         }
//       }
//     `,
//   })
//   .then(result => console.log('TEST', result));

function App() {
  // const [selectedItemsParent, setSelectedItemsParent] = useState([]);
  // const [selectedItems, setSelectedItems] = useState([]);

  // const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
  //   setSelectedItemsParent(selectedIdListOnlyParent);
  //   setSelectedItems(selectedIdList);
  // };

  return (
    <>
      <ReactTreeMultiSelector />
    </>
  );
}

export default App;
