import { FC } from 'react';

import * as styles from './HistoryCard.module.scss';
import cn from 'classnames';
import { Ellipsis } from '../../../../shared/ui';

interface Props {
  className?: string;
}

const HistoryCard: FC<Props> = (props) => {
  const avatar =
    'https://s3-alpha-sig.figma.com/img/93e2/fb68/8d9c02096c95887f5dd199d9b5fe5d8f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6Sn5Lse9m6zKApeAzPh-qhcICZMQ231njoxKR-ySm1KSO2gpSEZE9yRvcdG9e9x6XXh2ANHEX-RVu9fIpdwJaG-MyeQh4lYcypG0W7cnE73WUuYhAM-ite9liWwbktZxMo2VeVEzxomxpmp0aiM5-raYJWCCcubmdP4w0D816ual3RijN-UbWfpe4Zjydu5MAH7i2cNRZUqHiBZx6h2RL5IuRDunpS4b71sq5ZuKvRym~XUBTv~s6XUBmjtA6UiPUTe1gsOJ~g2Re3kr5S-aRY5DrpVp~gL3lHVg3AsK275d-wZs7tzrHIWxyssA2~U~VVAecEbhFBOi5QV1w8DJQ__';

  const boldTextClasses = cn(styles.boldText, 'primary bold');
  const mediumTextClasses = cn(styles.mediumText, 'primary medium');
  const dateClasses = cn(styles.date, 'tiny medium');

  return (
    <div className={styles.history}>
      <h3 className={styles.title}>АКТИВНОСТЬ</h3>
      <Ellipsis className={styles.extra} />
      <ul className={styles.historyList}>
        {new Array(15).fill(1).map((i, index) => (
          <li className={styles.historyItem} key={index}>
            <img className={styles.avatar} src={avatar} alt="" />
            <div className={styles.info}>
              <div className={boldTextClasses}>Александр Соломонов</div>
              <span className={mediumTextClasses}>добавил </span>
              <span className={boldTextClasses}>NDA.docx</span>
              <div className={dateClasses}>2 мин назад</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryCard;
