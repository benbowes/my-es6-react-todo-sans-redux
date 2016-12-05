import React, { PropTypes } from 'react';

const Label = ({ children }) => (
  <span>{children}</span>
);

Label.propTypes = {
  label: PropTypes.string
};

export default Label;
