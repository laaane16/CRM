import { FC } from 'react';

import * as styles from './EventCard.module.scss';
import { Ellipsis } from '../../../../shared/ui';
import cn from 'classnames';

interface Props {
  className?: string;
}

const EventCard: FC<Props> = (props) => {
  const avatar =
    'https://s3-alpha-sig.figma.com/img/93e2/fb68/8d9c02096c95887f5dd199d9b5fe5d8f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6Sn5Lse9m6zKApeAzPh-qhcICZMQ231njoxKR-ySm1KSO2gpSEZE9yRvcdG9e9x6XXh2ANHEX-RVu9fIpdwJaG-MyeQh4lYcypG0W7cnE73WUuYhAM-ite9liWwbktZxMo2VeVEzxomxpmp0aiM5-raYJWCCcubmdP4w0D816ual3RijN-UbWfpe4Zjydu5MAH7i2cNRZUqHiBZx6h2RL5IuRDunpS4b71sq5ZuKvRym~XUBTv~s6XUBmjtA6UiPUTe1gsOJ~g2Re3kr5S-aRY5DrpVp~gL3lHVg3AsK275d-wZs7tzrHIWxyssA2~U~VVAecEbhFBOi5QV1w8DJQ__';

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
