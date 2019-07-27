import React from 'react';

const SearchPanel = () => {
    const serachText = 'Durchsuchen';
    const searchStyle = {
        border: '2px dotted pink'
    }
    return (
        <input placeholder={serachText}
        style = {searchStyle}
        className = ""
        id="input"/>
    )
};

export default SearchPanel;