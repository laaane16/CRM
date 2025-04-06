import { FC, useEffect, useMemo } from 'react';

import * as styles from './PeoplePage.module.scss';

import { Filters } from '../../../widgets/Filters';
import { Section } from '../../../widgets/Section';
import SectionBody from '../../../widgets/Section/ui/SectionBody';
import SectionHeader from '../../../widgets/Section/ui/SectionHeader';
import EmployeesList from './EmployeesList/EmployeesList';
import SortPanel, { ISort } from '../../../features/sortByField/ui/SortPanel/SortPanel';
import { useAppDispatch } from '../../../shared/lib';
import { peoplesActions } from '../model/slice/peoplePageSlice';
import { useSelector } from 'react-redux';
import { StateSchema } from '../../../app/providers';
import { fetchPeoplesList } from '../model/services/fetchPeoplesList/fetchPeoplesList';
import { initPeoplePage } from '../model/services/initPeoplePage/initPeoplePage';

interface Props {
  className?: string;
}

const PeoplePage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const orderType = useSelector((state: StateSchema) => state.peoples?.order);
  const sortField = useSelector((state: StateSchema) => state.peoples?.sortField);

  useEffect(() => {
    dispatch(initPeoplePage());
  }, []);

  const fields: ISort[] = useMemo(() => {
    const initFields: ISort[] = [
      { title: 'Имя', field: 'name', order: '' },
      { title: 'Компания', field: 'company.title', order: '' },
    ];

    const updatedFieldIndex = initFields.findIndex((i) => i.field === sortField);

    if (updatedFieldIndex !== -1) {
      initFields[updatedFieldIndex].order = orderType || '';
    }

    return initFields;
  }, [orderType, sortField]);

  const onChangeSort = (sort: ISort) => {
    if (sort.order === 'asc') {
      dispatch(peoplesActions.setSort({ ...sort, order: 'desc' }));
    } else {
      dispatch(peoplesActions.setSort({ ...sort, order: 'asc' }));
    }
    dispatch(fetchPeoplesList({ replace: true }));
  };

  return (
    <main data-testid="main-page" className={styles.container}>
      <Filters />
      <Section>
        <SectionHeader />
        <SortPanel onChangeSort={onChangeSort} fields={fields} />
        <SectionBody>
          <EmployeesList className={styles.list} />
        </SectionBody>
      </Section>
    </main>
  );
};

export default PeoplePage;
