import PropTypes from 'prop-types';
import React from 'react';

const Breadcrumb = ({ children, icon = 'angle-right', addDelimiter = true, ...rest }) => {
  // Automatically add delimiter
  const kids =
    children.length > 0
      ? children.map((child, index) => [
          child,
          addDelimiter && index + 1 < children.length && (
            <hx-icon key={index} class="delimiter" type={icon} />
          ),
        ])
      : children;

  return (
    <nav className="hxBreadcrumb" {...rest}>
      {kids}
    </nav>
  );
};

Breadcrumb.propTypes = {
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default Breadcrumb;
