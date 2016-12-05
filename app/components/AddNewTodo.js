import React, { Component, PropTypes } from 'react';
import Button from './common/Button';
import * as styles from './AddNewTodo.scss';

/**
* @description Class component. Styles prefixed with `sg-` are coming in from a global stylesheet
* @returns {JSX} */

class AddNewTodo extends Component {

  /** @param event {SyntheticEvent} React event that mimics a form submit event */
  addItemHandler( event ) {
    const { addItem } = this.props;
    event.preventDefault();

    if(this.refs.addItemInput.value !== ''){
      addItem(this.refs.addItemInput.value);
      this.refs.addItemInput.value = ''; // clear input field once redux store has been updated
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

          <Button buttonTitle="Add a new item" type="submit" classes="sg-button sg-button--primary">
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
