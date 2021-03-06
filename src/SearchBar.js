import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import { connect } from "react-redux";

import { filterAuthors } from "./redux/actions";

const SearchBar = ({ filterAuthors }) => (
  <div className="form-group col-lg-6 col-12 mx-auto">
    <div className="input-group my-3">
      <input
        className="form-control"
        type="text"
        onChange={(event) => filterAuthors(event.target.value)}
      />
      <div className="input-group-append">
        <span className="input-group-text">
          <FontAwesomeIcon icon={faSearch} />
        </span>
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => {
  return {
    filterAuthors: query => dispatch(filterAuthors(query))
  };
};

export default connect(null, mapDispatchToProps)(SearchBar);
