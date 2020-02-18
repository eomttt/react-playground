import React from 'react';

const ParentComp = ({ children }) => {
    return (
        <div>
            {'Parent comp'}
            {
                React.cloneElement(children, {
                    props1: 'props1',
                    props2: 'props2',
                    props3: 'props3',
                })
            }
        </div>
    )
};

export default ParentComp;
