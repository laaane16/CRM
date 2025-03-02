import { FC, useEffect, useState } from 'react';

import { Accordeon, Search } from '../../../shared/ui';

import * as styles from './Filters.module.scss';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce';
import { useAppDispatch } from '../../../shared/lib';
import { peoplesActions } from '../../../pages/PeoplePage/model/slice/peoplePageSlice';
import { fetchPeoplesList } from '../../../pages/PeoplePage/model/services/fetchPeoplesList/fetchPeoplesList';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers';

interface Props {
  className?: string;
}

const Filters: FC<Props> = () => {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const searchFromStore = useSelector((state: StateSchema) => state.peoples?.search) || '';

  useEffect(() => {
    setSearch(searchFromStore);
  }, [searchFromStore]);

  const debouncedSearchChange = useDebounce((value: string) => {
    dispatch(peoplesActions.setSearch(value));
    dispatch(fetchPeoplesList({ replace: true }));
  }, 300);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearchChange(value);
  };

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
      <Search className={styles.search} value={search} onChange={handleSearchChange} />
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
