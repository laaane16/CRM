import { FC } from 'react';
import cn from 'classnames';

import * as styles from './SectionHeader.module.scss';

interface Props {
  className?: string;
}

const data: { title: string; count: number }[] = [
  { title: 'Штатные', count: 12 },
  { title: 'Сдельные', count: 5 },
  { title: 'Кандидаты', count: 6 },
  { title: 'Архив', count: 3 },
  { title: 'Партнеры', count: 19 },
  { title: 'Запросы', count: 10 },
];

const SectionHeader: FC<Props> = (props) => {
  return (
    <div className={styles.header}>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li className={styles.listItem} key={index}>
            <span className={cn(styles.itemTitle, 'secondary medium')}>{item.title}</span>
            <span className={cn(styles.itemCount, 'secondary medium')}>{item.count}</span>
          </li>
        ))}
      </ul>
      <div className={styles.gridToggle}>
        <span className={styles.toggleItem}>L</span>
        <span className={cn(styles.toggleItem, styles.toggleItemDefault)}>C</span>
      </div>
    </div>
  );
};

export default SectionHeader;
