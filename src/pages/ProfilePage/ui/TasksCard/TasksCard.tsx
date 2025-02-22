import { FC, useEffect } from 'react';
import cn from 'classnames';

import { Checkbox, Ellipsis } from '../../../../shared/ui';

import * as styles from './TasksCard.module.scss';
import { useSelector } from 'react-redux';
import { getTasksIsLoading } from '../../../../entities/Task/model/selectors/getTasksIsLoading/getTasksIsLoading';
import { fetchTasksByUserId } from '../../../../entities/Task/model/services/fetchTasksByUserId/fetchTasksByUserId';
import { tasksReducer, tasksSelectors } from '../../../../entities/Task/model/slice/tasksSlice';
import { DynamicModuleLoader, useAppDispatch } from '../../../../shared/lib';
import Avatar, { AvatarSizes } from '../../../../shared/ui/Avatar/Avatar';
import Skeleton from '../../../../shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
}

const reducersList = { tasks: tasksReducer };

const TasksCard: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTasksByUserId({ id: 1 }));
  }, []);

  const tasks = useSelector(tasksSelectors.selectAll);
  console.log(tasks);
  const tasksIsLoading = useSelector(getTasksIsLoading);

  const taskTitleClasses = cn(styles.taskTitle, 'primary bold');
  const importanceClasses = cn(styles.taskImportance, 'tiny medium');

  return (
    <DynamicModuleLoader reducers={reducersList}>
      <div className={styles.tasksContainer}>
        {tasksIsLoading ? (
          <>
            <Skeleton className={styles.skeleton} width="100%" height="30%" />
            <Skeleton className={styles.skeleton} width="100%" height="30%" />
            <Skeleton className={styles.skeleton} width="100%" height="30%" />
          </>
        ) : (
          <>
            <h3 className={styles.tasksTitle}>задачи</h3>
            <Ellipsis className={styles.extra} />
            <ul className={styles.tasks}>
              {tasks.map((item, index) => (
                <li className={styles.task} key={index}>
                  <Checkbox className={styles.checkbox} />
                  <div>
                    <span className={taskTitleClasses}>{item.title}</span>
                    <span className={importanceClasses}>{item.priority}</span>
                    <div className={styles.wrap}>
                      <Avatar className={styles.avatar} size={AvatarSizes.SMALL} avatar={item.user.avatar} />
                      <span className={styles.taskDeadline}>До - {item.deadline}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </DynamicModuleLoader>
  );
};

export default TasksCard;
