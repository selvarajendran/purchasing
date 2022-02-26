import React from 'react';
import PropTypes from 'prop-types';

const Grid = ({ data, header, check }) => {
  return (
    <div>
      <div className="grid-header">
        {check && <div className="grid-header-check" />}
        {header.map((title) => (
          <div className="grid-header-title">{title}</div>
        ))}
      </div>
      <div className="grid-row-group">
        {data.map((row) => {
          const keys = Object.keys(row);
          return (
            <div className="grid-row">
              {check && <div className="checkbox" />}
              {keys.map((key) => (
                <div className="grid-row-data">{row[key]}</div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

Grid.defaultProps = {
  check: false
};

Grid.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  header: PropTypes.arrayOf(PropTypes.string).isRequired,
  check: PropTypes.bool
};

export default Grid;
