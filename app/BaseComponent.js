import React, { Component } from 'react';
import Label from './components/common/Label';
import RemoveTodo from './components/RemoveTodo';
import TodosHeader from './components/TodosHeader';
import AddNewTodo from './components/AddNewTodo';
import { addItem, removeItem } from './stateManipulators';
import * as styles from './BaseComponent.scss';

/** note: styles prefixed with `sg-` are coming in from a global stylesheet */

class BaseComponent extends Component {

  constructor() {
    super();
    this.state = {
      items: [
        'Go to the park',
        'Eat some cheese',
        'Host a party'
      ]
    };

    this.stateUpdaters = {
      addItemUpdater: ( newItem ) => this.setState(
        addItem(this.state, newItem)
      ),
      removeItemUpdater: ( itemIndex ) => this.setState(
        removeItem(this.state, itemIndex)
      )
    };
  }

  getUniqueIteratorKey = (itemString, index) => {
    return `${itemString.replace(/ /g, '_')}_${index}`;
  };

  render() {
    const noTodosMessage = (this.state.items.length === 0) && <p>Oh my, you have been busy...</p>;

    return (
      <section className={`${styles['todos']}`} >
        <TodosHeader counter={this.state.items.length}/>
        {noTodosMessage}
        {this.state.items.map((item, index) =>
          <div className="sg-row" key={this.getUniqueIteratorKey(item, index)}>
            <Label>{item}</Label>
            <RemoveTodo
              buttonTitle={'Remove this item'}
              index={index}
              removeItem={this.stateUpdaters.removeItemUpdater}
            />
          </div>
        )}
        <AddNewTodo addItem={this.stateUpdaters.addItemUpdater} />
      </section>
    );
  }
}

BaseComponent.propTypes = {};

export default BaseComponent;
