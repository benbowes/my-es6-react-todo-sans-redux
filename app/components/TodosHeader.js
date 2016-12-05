import React, { PropTypes } from 'react';
import * as styles from './TodosHeader.scss';

const TodosHeader = ({ counter, children }) => (
	<header className={`sg-row ${styles.todosHeader}`}>
    <h1 className={styles.todosHeading}>
      {children}
    </h1>
    <span className={styles.todosCounter}>
      {counter} items
    </span>
	</header>
);

TodosHeader.propTypes = {
  counter: PropTypes.number,
  children: PropTypes.string
};

export default TodosHeader;
