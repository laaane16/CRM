import { FC } from 'react';

import * as styles from './Section.module.scss';
import SectionBody from './SectionBody';
import SectionHeader from './SectionHeader';

interface Props {
  className?: string;
}

const Section: FC<Props> = () => {
  return (
    <section className={styles.section}>
      <SectionHeader />
      <SectionBody />
    </section>
  );
};

export default Section;
