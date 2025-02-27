import { FC, RefObject, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import * as styles from './EmployeesList.module.scss';

import EmployeesCard, { EmployeesCardView } from '../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { DynamicModuleLoader, useAppDispatch, useInfiniteScroll } from '../../../../shared/lib';
import { fetchNextPeoplesPage } from '../../../../pages/PeoplePage/model/services/fetchNextPeoplesPage/fetchNextPeoplesPage';
import { fetchPeoplesList } from '../../../../pages/PeoplePage/model/services/fetchPeoplesList/fetchPeoplesList';
import {
  peoplesActions,
  peoplesReducer,
  peoplesSelectors,
} from '../../../../pages/PeoplePage/model/slice/peoplePageSlice';
import Skeleton from '../../../../shared/ui/Skeleton/Skeleton';
import { getPeoplesIsLoading } from '../../model/selectors/getPeoplesIsLoading/getPeoplesIsLoading';
import { getPeoplesView } from '../../model/selectors/getPeoplesView/getPeoplesView';
import { getPeoplesLimit } from '../../model/selectors/getPeoplesLimit/getPeoplesLimit';
import { IView } from '../../model/types/PeoplesSchema';
import { getPeoplesInit } from '../../model/selectors/getPeoplesInit/getPeoplesInit';

interface Props {
  className?: string;
}

const reducers = {
  peoples: peoplesReducer,
};

const EmployeesList: FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getPeoplesIsLoading);
  const peoples = useSelector(peoplesSelectors.selectAll);
  const view = useSelector(getPeoplesView);
  const limit = useSelector(getPeoplesLimit);
  const _inited = useSelector(getPeoplesInit);

  useEffect(() => {
    if (!_inited) {
      dispatch(peoplesActions.initState());
      dispatch(fetchPeoplesList());
    }
  }, []);

  const listClasses = cn(styles.list, styles[view]);

  const wrapRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;
  const elRef = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement>;

  useInfiniteScroll({
    wrapRef,
    elRef,
    callback: () => {
      dispatch(fetchNextPeoplesPage());
    },
  });

  const cardView = view === IView.GRID ? EmployeesCardView.LARGE : EmployeesCardView.SMALL;

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <div ref={wrapRef} className={className}>
        <ul className={listClasses}>
          {peoples.map((people) => (
            <EmployeesCard className={styles.card} key={people.id} data={people} view={cardView} />
          ))}
          {isLoading
            ? new Array(limit)
                .fill(1)
                .map((i, index) => <Skeleton key={index} className={cn(styles.card, styles.cardSkeleton)} />)
            : null}
        </ul>
        <div ref={elRef} style={{ width: '100%', height: '1px' }} />
      </div>
    </DynamicModuleLoader>
  );
};

export default EmployeesList;
