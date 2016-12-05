import React, { PropTypes } from 'react';

const Button = ({ buttonTitle, type, classes, clickHandler, children }) =>
  <button
    title={buttonTitle || ''}
    type={type || 'button'}
    className={classes || 'sg-button'}
    onClick={clickHandler}>
    {children}
  </button>;

Button.propTypes = {
  type: PropTypes.string,
  classes: PropTypes.string,
  clickHandler: PropTypes.func,
  children: PropTypes.string,
  buttonTitle: PropTypes.string
};

export default Button;
