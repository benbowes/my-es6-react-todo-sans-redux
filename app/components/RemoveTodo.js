import React, { PropTypes } from 'react';
import Button from './common/Button';

const RemoveTodo = ({ removeItem, index, buttonTitle }) => (
  <Button
    buttonTitle={buttonTitle}
    clickHandler={() => { removeItem( index ); }}
  >
    &#10005;
  </Button>
);

RemoveTodo.propTypes = {
  removeItem: PropTypes.func,
  buttonTitle: PropTypes.string,
  index: PropTypes.number
};

export default RemoveTodo;
