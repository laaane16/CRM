import { FC } from 'react';

import * as styles from './NotificationCard.module.scss';
import { Notification } from '../../model/types/notification';

interface Props extends DeepPartial<Notification> {
  className?: string;
}

const NotificationCard: FC<Props> = ({ title, id, userId, message }) => {
  return (
    <div className={styles.notificationCard}>
      <h3 className={styles.title}>{title}</h3> <h3 className={styles.userId}>От {userId}</h3>
      <span className={styles.message}>{message}</span>
    </div>
  );
};

export default NotificationCard;
