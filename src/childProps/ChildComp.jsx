import React from 'react';

const ChildComp = ({
    props1,
    props2,
    props3,
}) => {
    return (
        <div>
            {'Child component'}
            <div>
            {props1}
            </div>
            <div>
            {props2}
            </div>
            <div>
            {props3}
            </div>
        </div>
    )
};

export default ChildComp;
