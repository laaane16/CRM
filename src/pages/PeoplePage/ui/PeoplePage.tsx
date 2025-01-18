import { FC } from 'react';

import * as styles from './PeoplePage.module.scss';

import { Filters } from '../../../widgets/Filters';
import { Section } from '../../../widgets/Section';

interface Props {
  className?: string;
}

const PeoplePage: FC<Props> = (props) => {
  return (
    <main className={styles.container}>
      <Filters />
      <Section />
    </main>
  );
};

export default PeoplePage;
