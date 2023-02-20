import React from 'react';
import Task from './Task/Task';
import TasksColumn from './BoardColumn/BoardColumn';
import macbook from '../../../public/meeting.jpeg';
import styles from './Board.module.scss';
import BoardTitle from './BoardTitle/BoardTitle';

const TaskSection = () => {
  return (
    <div className={styles.main}>
      <BoardTitle />

      <div className={styles.taskSectionContainer}>
        <TasksColumn>
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
            image={macbook}
          />
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
          />
        </TasksColumn>
        <TasksColumn>
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
            image={macbook}
          />
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
          />
        </TasksColumn>
        <TasksColumn>
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
            image={macbook}
          />
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
          />
        </TasksColumn>
        <TasksColumn>
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
            image={macbook}
          />
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
          />
        </TasksColumn>
        <TasksColumn>
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
            image={macbook}
          />
          <Task
            title='Research competition’s product design'
            description='Make research about other kanban projects to make sure that our
      product is the best'
            difficulty='LOW'
            date='Sept 22, 2022'
          />
        </TasksColumn>
      </div>
    </div>
  );
};

export default TaskSection;
