import { FC } from 'react';
import cn from 'classnames';

import { Checkbox, Ellipsis } from '../../../../shared/ui';

import * as styles from './TasksCard.module.scss';

interface IData {
  avatar: string;
  title: string;
  deadline: string;
  importance: string;
}

interface Props {
  className?: string;
  data: IData[];
}

const TasksCard: FC<Props> = ({ data }) => {
  const taskTitleClasses = cn(styles.taskTitle, 'primary medium');
  const importanceClasses = cn(styles.taskImportance, 'tiny medium');

  return (
    <div className={styles.tasksContainer}>
      <h3 className={styles.tasksTitle}>задачи</h3>
      <Ellipsis className={styles.extra} />
      <ul className={styles.tasks}>
        {data.map((item, index) => (
          <li className={styles.task} key={index}>
            <Checkbox className={styles.checkbox} />
            <div className={styles.taskInfo}>
              <span className={taskTitleClasses}>{item.title}</span>
              <span className={importanceClasses}>{item.importance}</span>
              <img className={styles.taskAvatar} src={item.avatar} alt="avatar" />
              <span className={styles.taskDeadline}>До {item.deadline}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TasksCard;
