import { FC, useEffect } from 'react';

import * as styles from './HistoryCard.module.scss';
import cn from 'classnames';
import { Ellipsis } from '../../../../shared/ui';
import { DynamicModuleLoader } from '../../../../shared/lib';
import { tasksReducer } from '../../../../entities/Task/model/slice/tasksSlice';

interface Props {
  className?: string;
}

const HistoryCard: FC<Props> = (props) => {
  const avatar = 'https://timeweb.com/ru/community/article/43/4372a42395939b59d7e234e6042983f8.jpg';
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
