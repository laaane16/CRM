import { FC } from 'react';
import cn from 'classnames';

import * as styles from './SectionHeader.module.scss';
import { useAppDispatch } from '../../../shared/lib';
import { useSelector } from 'react-redux';
import { getPeoplesView } from '../../../pages/PeoplePage/model/selectors/getPeoplesView/getPeoplesView';
import { peoplesActions, peoplesReducer } from '../../../pages/PeoplePage/model/slice/peoplePageSlice';
import { EmployeesCardView } from '../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { IView } from '../../../pages/PeoplePage/model/types/PeoplesSchema';

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

const SectionHeader: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const listView = useSelector(getPeoplesView);

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
  );
};

export default SectionHeader;
