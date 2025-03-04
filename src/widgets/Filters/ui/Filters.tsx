import { FC, useEffect, useMemo, useState } from 'react';

import { Accordeon, Search } from '../../../shared/ui';

import * as styles from './Filters.module.scss';
import { useDebounce } from '../../../shared/lib/hooks/useDebounce';
import { useAppDispatch } from '../../../shared/lib';
import { peoplesActions } from '../../../pages/PeoplePage/model/slice/peoplePageSlice';
import { fetchPeoplesList } from '../../../pages/PeoplePage/model/services/fetchPeoplesList/fetchPeoplesList';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers';
import { IFilter } from '../../../pages/PeoplePage/model/types/PeoplesSchema';
import { getFiltersData } from '../configs/config';

interface Props {
  className?: string;
}

const Filters: FC<Props> = () => {
  const [search, setSearch] = useState('');

  const dispatch = useAppDispatch();
  const searchFromStore = useSelector((state: StateSchema) => state.peoples?.search) || '';
  const selectedFilters = useSelector((state: StateSchema) => state.peoples?.filters);

  const { pathname } = window.location;

  useEffect(() => {
    setSearch(searchFromStore);
  }, [searchFromStore]);

  const listData = useMemo(() => getFiltersData(pathname), []);

  const debouncedSearchChange = useDebounce((value: string) => {
    dispatch(peoplesActions.setSearch(value));
    dispatch(fetchPeoplesList({ replace: true }));
  }, 300);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    debouncedSearchChange(value);
  };

  const onSelect = (filter: IFilter): void => {
    if (selectedFilters?.find((f) => f.value === filter.value)) {
      dispatch(peoplesActions.removeFilter(filter));
    } else {
      dispatch(peoplesActions.setFilter(filter));
    }
    dispatch(fetchPeoplesList({ replace: true }));
  };

  return (
    <aside className={styles.filters}>
      <Search className={styles.search} value={search} onChange={handleSearchChange} />
      <div>
        <h3 className={styles.title}>Настройки фильтра</h3>
        <span className={`${styles.filterIcon} icon-filter`}></span>
        <Accordeon selectedItems={selectedFilters || []} onSelect={onSelect} title="Рубрики" items={listData} />
      </div>
    </aside>
  );
};

export default Filters;
