import { FC } from 'react';

import * as styles from './EventCard.module.scss';
import { Ellipsis } from '../../../../shared/ui';
import cn from 'classnames';

interface Props {
  className?: string;
}

const EventCard: FC<Props> = (props) => {
  const avatar = 'https://timeweb.com/ru/community/article/43/4372a42395939b59d7e234e6042983f8.jpg';
  const eventTitleClasses = cn(styles.eventTitle, 'primary bold');
  const eventDescriptionClasses = cn(styles.eventDescription, 'secondary medium');

  return (
    <div className={styles.event}>
      <h3 className={styles.title}>СОБЫТИЕ</h3>
      <Ellipsis className={styles.extra} />
      <span className={styles.importance}>11:00</span>
      <span className={styles.importance}>17 марта</span>
      <span className={styles.importance}></span>
      <span className={eventTitleClasses}>Обсуждение проекта</span>
      <span className={eventDescriptionClasses}>Согласование технических функций с разработчиками</span>
      <ul className={styles.eventList}>
        {new Array(8).fill(1).map((i, index) => (
          <li key={index} className={styles.eventItem}>
            <img className={styles.avatarEvent} src={avatar} alt="avatar" />
          </li>
        ))}
      </ul>
      <div className={styles.eventRoom}>
        <span className="icon-map" /> <span className={styles.eventRoomTitle}>Комната Совещаний</span>
      </div>
    </div>
  );
};

export default EventCard;
