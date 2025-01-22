import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const Sidebar = ({ navigationLinks, onNavigate }) => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Singa Metro Authority</h2>
      <ul className="sidebar-nav">
        {navigationLinks.map((link) => (
          <li
            key={link.id}
            className="sidebar-item"
            onClick={() => onNavigate(link.id)}
          >
            {link.icon && <span className="sidebar-icon">{link.icon}</span>}
            <span className="sidebar-label">{link.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Sidebar.propTypes = {
  navigationLinks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
    })
  ).isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Sidebar;
