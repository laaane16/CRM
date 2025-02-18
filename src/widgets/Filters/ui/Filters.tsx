import { FC, useState } from 'react';
import cn from 'classnames';

import { Accordeon, Input, Search } from '../../../shared/ui';

import * as styles from './Filters.module.scss';

interface Props {
  className?: string;
}

const Filters: FC<Props> = () => {
  const [search, setSearch] = useState('');

  const listData = [
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
    { title: 'Бытовая техника', count: 10 },
  ];

  return (
    <aside className={styles.filters}>
      <Search className={styles.search} value={search} onChange={setSearch} />
      <div>
        <h3 className={styles.title}>Настройки фильтра</h3>
        <span className={`${styles.filterIcon} icon-filter`}></span>
        <p className={`secondary medium ${styles.listTitle}`}>Мои компании</p>
        <Accordeon title="Рубрика" items={listData} />
        <ul>
          {listData.map((item, index) => (
            <li className={styles.listItem} key={index}>
              <span className={cn(styles.itemTitle, 'tiny regular')}>{item.title}</span>
              <span className={cn(styles.itemCount, 'tiny bold')}>{item.count}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Filters;
