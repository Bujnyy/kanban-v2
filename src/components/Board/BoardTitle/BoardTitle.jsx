import React from 'react';
import styles from './BoardTitle.module.scss';

const BoardTitle = () => {
  return (
    <div className={styles.workspaceInfo}>
      <div className={styles.titleContainer}>
        <span className={styles.title}>🐐 Tabana Projects</span>
        <div className={styles.workspaceProgress}>IN PROGRESS</div>
      </div>
      <div className={styles.workspaceDescription}>
        Tabana is an application that will be used for the livestock sector in
        indonesia
      </div>
    </div>
  );
};

export default BoardTitle;
