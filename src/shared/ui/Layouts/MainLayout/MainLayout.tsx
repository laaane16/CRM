import { FC, ReactNode } from 'react';

import * as styles from './MainLayout.module.scss';

interface Props {
  className?: string;
  children: ReactNode;
}

const MainLayout: FC<Props> = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default MainLayout;
