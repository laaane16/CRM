import { FC } from 'react';
import cn from 'classnames';

import NotificationCard from '../NotificationCard/NotificationCard';

import * as styles from './NotificationList.module.scss';

interface Props {
  className?: string;
  data: Notification[];
}

const NotificationList: FC<Props> = ({ data, className }) => {
  return (
    <ul className={cn(styles.notificationList, className)}>
      {data.map((item, idx) => (
        <li key={idx}>
          <NotificationCard {...item} />
        </li>
      ))}
    </ul>
  );
};

export default NotificationList;
