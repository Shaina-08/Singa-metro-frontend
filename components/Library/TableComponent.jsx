import React from 'react';
import PropTypes from 'prop-types';
import './TableComponent.css'; 

const TableComponent = ({ columns, data, title }) => {
  return (
    <div className="table-container">
      {title && <h3 className="table-title">{title}</h3>}
      <table className="custom-table">
        <thead>
          <tr>
            {columns.map((col) => (
              <th key={col.key}>{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((col) => (
                <td key={col.key}>{row[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TableComponent.propTypes = {
  title: PropTypes.string,
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string.isRequired,
      key: PropTypes.string.isRequired,
    })
  ).isRequired,
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableComponent;
