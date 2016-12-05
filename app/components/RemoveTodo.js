import React, { PropTypes } from 'react';
import Button from './common/Button';

/**
* @description triggers a `redux dispatch` call that updates the redux store
* @param dispatch {function} a redux `store.dispatch` reference
* @param index {number} injected as a prop via BaseComponent's render method  */

const RemoveTodo = ({ removeItem, index, buttonTitle }) => {
  return (
    <Button
      buttonTitle={buttonTitle}
      clickHandler={() => {
        removeItem( index );
      }}
    >
      &#10005;
    </Button>
  );
};

RemoveTodo.propTypes = {
  removeItem: PropTypes.func,
  buttonTitle: PropTypes.string,
  index: PropTypes.number
};

export default RemoveTodo;
