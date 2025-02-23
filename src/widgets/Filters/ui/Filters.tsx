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
    {
      Component: () => (
        <span className={styles.component}>
          <span className={styles.circle}></span>
          <span className={`${styles.componentTitle} secondary regular`}>Global Solutions</span>
          <span className={`${styles.count} secondary bold`}>10</span>
        </span>
      ),
    },
    {
      Component: () => (
        <span className={styles.component}>
          <span className={styles.circle}></span>
          <span className={`${styles.componentTitle} secondary regular`}>Global Solutions</span>
          <span className={`${styles.count} secondary bold`}>10</span>
        </span>
      ),
    },
    {
      Component: () => (
        <span className={styles.component}>
          <span className={styles.circle}></span>
          <span className={`${styles.componentTitle} secondary regular`}>Global Solutions</span>
          <span className={`${styles.count} secondary bold`}>10</span>
        </span>
      ),
    },
    {
      Component: () => (
        <span className={styles.component}>
          <span className={styles.circle}></span>
          <span className={`${styles.componentTitle} secondary regular`}>Global Solutions</span>
          <span className={`${styles.count} secondary bold`}>10</span>
        </span>
      ),
    },
  ];
  const Component = () => <span></span>;

  return (
    <aside className={styles.filters}>
      <Search className={styles.search} value={search} onChange={setSearch} />
      <div>
        <h3 className={styles.title}>Настройки фильтра</h3>
        <span className={`${styles.filterIcon} icon-filter`}></span>
        <Accordeon title="Рубрики" items={listData} />
        {/* <ul>
          {listData.map((item, index) => (
            <li className={styles.listItem} key={index}></li>
          ))}
        </ul> */}
      </div>
    </aside>
  );
};

export default Filters;
