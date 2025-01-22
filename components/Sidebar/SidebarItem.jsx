import React from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';

const SidebarItem = ({ label, icon, onClick }) => {
  return (
    <li className="sidebar-item" onClick={onClick}>
      {icon && <span className="sidebar-icon">{icon}</span>}
      <span className="sidebar-label">{label}</span>
    </li>
  );
};

SidebarItem.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.element,
  onClick: PropTypes.func.isRequired,
};

export default SidebarItem;
