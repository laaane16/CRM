import { FC, ReactNode } from 'react';

import * as styles from './Section.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
}

const Section: FC<Props> = ({ className, children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
