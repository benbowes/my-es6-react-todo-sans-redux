import React, { Component, PropTypes } from 'react';
import Button from './common/Button';
import * as styles from './AddNewTodo.scss';

/** Styles prefixed with `sg-` are coming in from a global stylesheet */

class AddNewTodo extends Component {

  addItemHandler( event ) {
    const { addItem } = this.props;
    event.preventDefault();

    if(this.refs.addItemInput.value !== ''){
      addItem(this.refs.addItemInput.value);
      this.refs.addItemInput.value = ''; // clear input field once state has been updated
    }
  }

  render() {
    return (
      <footer className={styles.todosFooter}>
        <form onSubmit={(event) => this.addItemHandler( event )} className="sg-row">
          <input
            className={styles.todosInput}
            type="text"
            ref="addItemInput"
            placeholder="Add an item..."
          />
          <Button
            type="submit"
            buttonTitle="Add a new item"
            classes="sg-button sg-button--primary"
          >
            Add
          </Button>
        </form>
      </footer>
    );
  }
}

AddNewTodo.propTypes = {
  addItem: PropTypes.func
};

export default AddNewTodo;
