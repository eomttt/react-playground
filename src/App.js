import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import ParentComp from './childProps/ParentComp';
import ChildComp from './childProps/ChildComp';

import MultiSelector from './multiSelector/MultiSelector';
import TestMultiCheckItem from './multiSelector/TestMultiCheckItem';
import TestMultiCategories, { initialSelectedIds, exceptionIds, notSelectionIds } from './multiSelector/TestMultiCategories';

import PropsComp from './propsComponent/PropsComp';

function App() {
  const [selectedItemsParent, setSelectedItemsParent] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectedCategories = (selectedIdListOnlyParent, selectedIdList) => {
    setSelectedItemsParent(selectedIdListOnlyParent);
    setSelectedItems(selectedIdList);
  };

  return (
    <div className="App">
      <PropsComp />
      {/* <ParentComp>
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
      </div> */}
    </div>
  );
}

export default App;
