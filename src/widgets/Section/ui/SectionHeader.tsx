import { FC, useEffect } from 'react';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as styles from './SectionHeader.module.scss';

import { DynamicModuleLoader, useAppDispatch } from '../../../shared/lib';
import { getPeoplesView } from '../../../pages/PeoplePage/model/selectors/getPeoplesView/getPeoplesView';
import { peoplesActions } from '../../../pages/PeoplePage/model/slice/peoplePageSlice';
import { IView } from '../../../pages/PeoplePage/model/types/PeoplesSchema';
import SortPanel from '../../../features/sortByField/ui/SortPanel/SortPanel';
import { sortReducer, sortActions } from '../../../features/sortByField/model/slice/sort';
import { ISort } from '../../../features/sortByField/model/types/types';
import { StateSchema } from '../../../app/providers';
import { fetchPeoplesList } from '../../../pages/PeoplePage/model/services/fetchPeoplesList/fetchPeoplesList';

interface Props {
  className?: string;
}
interface IField {
  title: string;
  value: 'asc' | 'desc';
}

const fields: IField[] = [
  { title: 'name', value: 'asc' },
  // { title: 'Регион', value: 'asc' },
  // { title: 'Рубрика', value: 'asc' },
];

const data: { title: string; count: number }[] = [
  { title: 'Штатные', count: 12 },
  { title: 'Сдельные', count: 5 },
  { title: 'Кандидаты', count: 6 },
  { title: 'Архив', count: 3 },
  { title: 'Партнеры', count: 19 },
  { title: 'Запросы', count: 10 },
];

const reducers = {
  sort: sortReducer,
};

const SectionHeader: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const values = useSelector((state: StateSchema) => state.sort?.entities[pathname] || []);

  useEffect(() => {
    dispatch(sortActions.initState({ key: pathname, values: fields }));
  }, []);

  const listView = useSelector(getPeoplesView);

  const onChangeSort = (sort: ISort) => {
    dispatch(sortActions.setSort({ key: pathname, sort }));
    dispatch(fetchPeoplesList({ replace: true }));
  };

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <div>
        <div className={styles.header}>
          <ul className={styles.list}>
            {data.map((item, index) => (
              <li className={styles.listItem} key={index}>
                <span className={cn(styles.itemTitle, 'secondary medium')}>{item.title}</span>
                <span className={cn(styles.itemCount, 'secondary medium')}>{item.count}</span>
              </li>
            ))}
          </ul>
          <div className={styles.viewToggle}>
            <span
              onClick={() => dispatch(peoplesActions.setView(IView.LIST))}
              className={cn(styles.toggleItem, 'icon-list', { [styles.active]: IView.LIST === listView })}
            />
            <span
              onClick={() => dispatch(peoplesActions.setView(IView.GRID))}
              className={cn(styles.toggleItem, 'icon-grid', { [styles.active]: IView.GRID === listView })}
            />
          </div>
        </div>
        <SortPanel onChangeSort={onChangeSort} fields={values} />
      </div>
    </DynamicModuleLoader>
  );
};

export default SectionHeader;
