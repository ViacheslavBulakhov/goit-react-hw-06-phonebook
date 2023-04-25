import React from 'react';
import PropTypes from 'prop-types';

export function Filter({ changeFilter }) {
  return (
    <>
      <label>
        Find contacts by name
        <input
          onChange={e => {
            changeFilter(e.target.value.trim());
          }}
        ></input>
      </label>
    </>
  );
}

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};
