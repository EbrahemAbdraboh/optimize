import React from "react";
import "./SearchBox.scss";

const SearchBox = (props) => {
    return (
      <input
        className='search-box'
        type='search'
        placeholder='Course Name'
        onChange={props.searchBoxOnchange}
      />
    );
}

export default SearchBox;
