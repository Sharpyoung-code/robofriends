import React from 'react';
import './SearchBox.css';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2 input'>
            <input
                className='pa3 br3 ba b--green bg-lightest-blue'
                type="search"
                placeholder='Search Robots'
                onChange={searchChange}
                size="80"
            />
        </div>
        
    )
}

export default SearchBox;