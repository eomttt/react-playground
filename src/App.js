import React, { useState } from 'react';
import { Provider } from 'react-redux';

import './App.css';

// Props to child
import ParentComp from './components/childProps/ParentComp';
import ChildComp from './components/childProps/ChildComp';

// MulitiSelector
import MultiSelector from './components/multiSelector/MultiSelector';
import TestMultiCheckItem from './components/multiSelector/TestMultiCheckItem';
import TestMultiCategories, { initialSelectedIds, exceptionIds, notSelectionIds } from './components/multiSelector/TestMultiCategories';

// Props to components
import PropsComp from './components/propsComponent/PropsComp';

// Redux & Redux-Thunk test
import CountComponent from './components/reduxThunkTest/Count';

import createStore from './store';
import reducers from './reducers';

const store = createStore(reducers);

function App() {
  const [selectedItemsParent, setSelectedItemsParent] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
    setSelectedItemsParent(selectedIdListOnlyParent);
    setSelectedItems(selectedIdList);
  };

  return (
    <Provider store={store}>
      <div className="App">
        <PropsComp />
        <ParentComp>
          <ChildComp />
        </ParentComp>
        <MultiSelector
          categories={TestMultiCategories}
          initialSelectedIds={initialSelectedIds}
          exceptionIds={exceptionIds}
          notSelectionIds={notSelectionIds}
          handleSelectedCategories={handleSelectedCategories}
        >
          <TestMultiCheckItem/>
        </MultiSelector>
        <div>
          {'Only parent: '}{
            selectedItemsParent.map((id) => {
              return `${id}, `;
            })
          }
        </div>
        <div>
          {'Whole selected: '}{
            selectedItems.map((id) => {
              return `${id}, `;
            })
          }
        </div>
        <CountComponent />
      </div>
    </Provider>
  );
}

export default App;
