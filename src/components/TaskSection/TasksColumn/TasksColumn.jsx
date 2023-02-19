import styles from './TasksColumn.module.scss';

import React, { Children } from 'react';

const TasksColumn = ({ children, ...props }) => {
  return (
    <div className={styles.tasksContainer}>
      <div className={styles.columnTitleContainer}>
        <span className={styles.columnName}>To Do</span>
        <div className={styles.tasksCount}>2</div>
      </div>
      <div className={styles.tasksWrapper}>{children}</div>
    </div>
  );
};

export default TasksColumn;
