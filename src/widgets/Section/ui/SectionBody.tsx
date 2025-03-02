import { FC, ReactNode } from 'react';

import * as styles from './SectionBody.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
}

const SectionBody: FC<Props> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default SectionBody;
