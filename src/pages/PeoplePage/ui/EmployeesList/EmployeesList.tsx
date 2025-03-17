import { FC, memo, useEffect, useRef, UIEvent, RefObject, Ref, useState, forwardRef, CSSProperties } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useLocation } from 'react-router-dom';
import {
  areEqual,
  FixedSizeGrid,
  FixedSizeList,
  ListChildComponentProps,
  GridChildComponentProps,
  GridOnItemsRenderedProps,
  ListOnItemsRenderedProps,
  ListOnScrollProps,
  GridOnScrollProps,
} from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';
import { Link } from 'react-router-dom';

import * as styles from './EmployeesList.module.scss';

import EmployeesCard, {
  EmployeesCardView,
  IEmployee,
} from '../../../../entities/Employee/ui/EmployeesCard/EmployeesCard';
import { DynamicModuleLoader, useAppDispatch } from '../../../../shared/lib';
import { fetchNextPeoplesPage } from '../../../../pages/PeoplePage/model/services/fetchNextPeoplesPage/fetchNextPeoplesPage';
import { peoplesReducer, peoplesSelectors } from '../../../../pages/PeoplePage/model/slice/peoplePageSlice';
import Skeleton from '../../../../shared/ui/Skeleton/Skeleton';
import { getPeoplesIsLoading } from '../../model/selectors/getPeoplesIsLoading/getPeoplesIsLoading';
import { getPeoplesView } from '../../model/selectors/getPeoplesView/getPeoplesView';
import { IView } from '../../model/types/PeoplesSchema';
import { getScrollPositionByPath } from '../../../../features/saveScrollPosition/model/selectors/getScrollPosition/getScrollPosition';
import { StateSchema } from '../../../../app/providers';
import { saveScrollActions } from '../../../../features/saveScrollPosition/model/slice/saveScrollSlice';
import { useTrottle } from '../../../../shared/lib/hooks/useTrottle';

interface Props {
  className?: string;
}

const reducers = {
  peoples: peoplesReducer,
};

const EmployeesList: FC<Props> = ({ className }) => {
  const wrapListRef = useRef<HTMLDivElement>(null) as Ref<FixedSizeList<IEmployee[]>>;
  const wrapGridRef = useRef<HTMLDivElement>(null) as Ref<FixedSizeGrid<IEmployee[]>>;

  const { pathname } = useLocation();
  const dispatch = useAppDispatch();

  const isLoading = useSelector(getPeoplesIsLoading);
  const peoples = useSelector(peoplesSelectors.selectAll);
  const view = useSelector(getPeoplesView);
  const scrollPosition = useSelector((state: StateSchema) => getScrollPositionByPath(state, pathname));

  const onScroll = (e: ListOnScrollProps & GridOnScrollProps): void => {
    dispatch(saveScrollActions.saveScroll({ path: pathname, scroll: e.scrollOffset || e.scrollTop }));
  };

  const trottleScroll = useTrottle(onScroll, 300);

  const cardView = view === IView.GRID ? EmployeesCardView.LARGE : EmployeesCardView.SMALL;
  const itemCount = peoples.length;

  const onRowsRendered = ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
    if (visibleStopIndex === itemCount - 1) {
      dispatch(fetchNextPeoplesPage());
    }
  };

  const onCellsRendered = ({ visibleRowStopIndex }: GridOnItemsRenderedProps) => {
    if (visibleRowStopIndex === itemCount / 3 - 1) {
      dispatch(fetchNextPeoplesPage());
    }
  };

  // eslint-disable-next-line
  const Row = memo(({ index, style, data }: ListChildComponentProps) => {
    return (
      <div
        style={{
          ...style,
          top: Number(style.top) + index * 10,
        }}
      >
        {isLoading ? (
          <Skeleton height="100%" className={cn(styles.card, styles.cardSkeleton)} />
        ) : (
          <Link to={`/profile/${data[index].id}`}>
            <EmployeesCard className={styles.card} data={data[index]} view={cardView} />
          </Link>
        )}
      </div>
    );
  }, areEqual);

  // eslint-disable-next-line
  const Cell = memo(({ rowIndex, columnIndex, style, data }: GridChildComponentProps) => {
    return (
      <div
        style={{
          ...style,
          top: Number(style.top) + rowIndex * 10,
          left: Number(style.left) + (columnIndex % 3) * 10,
        }}
      >
        {isLoading ? (
          <Skeleton height="100%" className={cn(styles.card, styles.cardSkeleton)} />
        ) : (
          rowIndex * 3 + columnIndex < data.length && (
            <Link to={`/profile/${data[rowIndex * 3 + columnIndex].id}`}>
              <EmployeesCard className={styles.card} data={data[columnIndex + rowIndex * 3]} view={cardView} />
            </Link>
          )
        )}
      </div>
    );
  }, areEqual);

  return (
    <DynamicModuleLoader removeAfterUnmount={false} reducers={reducers}>
      <AutoSizer>
        {({ height, width }) => {
          return view === IView.LIST ? (
            <FixedSizeList
              initialScrollOffset={scrollPosition}
              ref={wrapListRef}
              onScroll={trottleScroll}
              onItemsRendered={onRowsRendered}
              itemCount={itemCount}
              itemData={peoples}
              height={height}
              className={styles.list}
              itemSize={80}
              width={width}
            >
              {Row}
            </FixedSizeList>
          ) : (
            <FixedSizeGrid
              initialScrollTop={scrollPosition}
              ref={wrapGridRef}
              onScroll={trottleScroll}
              onItemsRendered={onCellsRendered}
              rowCount={itemCount / 3}
              rowHeight={270}
              columnCount={3}
              columnWidth={width / 3 - 10}
              itemData={peoples}
              height={height}
              className={styles.list}
              width={width}
            >
              {Cell}
            </FixedSizeGrid>
          );
        }}
      </AutoSizer>
    </DynamicModuleLoader>
  );
};

export default EmployeesList;
