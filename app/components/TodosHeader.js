import React, { PropTypes } from 'react';
import * as styles from './TodosHeader.scss';

const TodosHeader = ({ counter }) =>
	<header className={`sg-row ${styles.todosHeader}`}>
		<h1 className={styles.todosHeading}>What todo to do today</h1>
		<span className={styles.todosCounter}>{counter} items</span>
	</header>;

TodosHeader.propTypes = {
  counter: PropTypes.number
};

export default TodosHeader;
