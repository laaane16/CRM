import { FC, useState } from 'react';

import SectionBody from './SectionBody';
import SectionHeader from './SectionHeader';
import { EmployeesCardView } from '../../../entities/Employee/ui/EmployeesCard/EmployeesCard';

import * as styles from './Section.module.scss';

interface Props {
  className?: string;
}

const Section: FC<Props> = () => {
  const [listView, setListView] = useState(EmployeesCardView.LARGE);

  const onChangeListView = (type: EmployeesCardView): void => {
    setListView(type);
  };

  return (
    <section className={styles.section}>
      <SectionHeader currentView={listView} onChangeListView={onChangeListView} />
      <SectionBody currentView={listView} />
    </section>
  );
};

export default Section;
