import React, { PropTypes } from 'react';

const Label = ({ children }) => (
  <span>{children}</span>
);

Label.propTypes = {
  children: PropTypes.string
};

export default Label;
