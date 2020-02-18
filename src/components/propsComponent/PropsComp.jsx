import React from 'react';

import ParentComp from './ParentComp';
import ChildCompOne from './ChildCompOne';
import ChildCompTwo from './ChildCompTwo';

const PropsComp = () => {
    return (
        <ParentComp childOne={ChildCompOne} childTwo={ChildCompTwo} />
    )
};

export default PropsComp;
