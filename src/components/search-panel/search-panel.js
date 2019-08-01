import React from 'react';

const SearchPanel = () => {
    const serachText = 'Durchsuchen';

    return (
        <input placeholder={serachText}

        className = "form-control search-input"
        id="input"/>
    )
};

export default SearchPanel;