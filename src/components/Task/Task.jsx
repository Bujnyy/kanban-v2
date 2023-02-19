import styles from './Task.module.scss';

import React from 'react';

const Task = ({ title, description, difficulty, date, image, ...props }) => {
  return (
    <div className={styles.taskContainer}>
      {image ? <img src={image} className={styles.image} /> : ''}
      <div className={styles.taskInfo}>
        <div className={styles.taskFeature}>
          <div className={styles.difficulty}>{difficulty}</div>
          <div className={styles.date}>{date}</div>
        </div>
        <div className={styles.infoContainer}>
          <div className={styles.title}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.profile}></div>
      </div>
    </div>
  );
};

export default Task;
