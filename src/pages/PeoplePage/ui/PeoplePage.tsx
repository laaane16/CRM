import { FC } from 'react';

import * as styles from './PeoplePage.module.scss';

import { Filters } from '../../../widgets/Filters';
import { Section } from '../../../widgets/Section';
import SectionBody from '../../../widgets/Section/ui/SectionBody';
import SectionHeader from '../../../widgets/Section/ui/SectionHeader';
import EmployeesList from './EmployeesList/EmployeesList';

interface Props {
  className?: string;
}

const PeoplePage: FC<Props> = () => {
  return (
    <main className={styles.container}>
      <Filters />
      <Section>
        <SectionHeader />
        <SectionBody>
          <EmployeesList className={styles.list} />
        </SectionBody>
      </Section>
    </main>
  );
};

export default PeoplePage;
