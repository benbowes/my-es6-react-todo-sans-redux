import React, { Component } from 'react';
import Label from './components/common/Label';
import RemoveTodo from './components/RemoveTodo';
import TodosHeader from './components/TodosHeader';
import AddNewTodo from './components/AddNewTodo';
import { addItem, removeItem } from './reducers';
import * as styles from './BaseComponent.scss';

/** note: styles prefixed with `sg-` are coming in from a global stylesheet */

class BaseComponent extends Component {

  constructor() {
    super();
    this.state = {
      items: [ 'Go to the park', 'Eat some cheese', 'Host a party' ]
    };

    this.stateUpdaters = {
      addItems: ( newItem ) => this.setState(
        addItem( this.state, newItem )
      ),
      removeItems: ( itemIndex ) => this.setState(
        removeItem( this.state, itemIndex )
      )
    };
  }

  render() {
    const todosCount = this.state.items.length;
    const noTodosMessage = (todosCount === 0)
            ? <p>Oh my, you have been busy...</p>
            : null;

    return (
      <section className={`${styles['todos']}`}>
        <TodosHeader counter={todosCount}>What todo to do today</TodosHeader>
        {noTodosMessage}
        {this.state.items.map((item, index) => (
          <div className="sg-row" key={`todo_${index}`}>
            <Label>{item}</Label>
            <RemoveTodo
              buttonTitle={'Remove this item'}
              index={index}
              removeItem={this.stateUpdaters.removeItems}
            />
          </div>
        ))}
        <AddNewTodo addItem={this.stateUpdaters.addItems} />
      </section>
    );
  }
}

export default BaseComponent;
