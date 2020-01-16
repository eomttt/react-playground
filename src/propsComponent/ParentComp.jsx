import React from 'react';


const ParentComp = ({ childOne, childTwo }) => {
    return (
        <div>
            {childOne()}
            {'Parent Component'}
            {childTwo()}
        </div>
    )
};

export default ParentComp;
