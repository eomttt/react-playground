import React from 'react';

// tslint:disable-next-line: variable-name
const CheckCategoryItem = ({
    id, content, isCanSelect, isSelected, toggleCategory,
}) => {
    return (
        <>
        {
            isCanSelect
            ? <div className="watem-category-item onclick-cursor-pointer"
                onClick={() => toggleCategory && toggleCategory(id)}>
                <input type="checkbox" readOnly checked={isSelected} />
                <label>
                    <span>
                    </span>
                </label>
                {content}
            </div>
            : <div className="watem-category-item">{content}</div>
        }
        </>
    );
};

export default CheckCategoryItem;
