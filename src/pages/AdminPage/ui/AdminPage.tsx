import { FC } from 'react';

import * as styles from './AdminPage.module.scss';

interface Props {
  className?: string;
}

const AdminPanel: FC<Props> = (props) => {
  return (
    <main style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>ADMIN PANEL</main>
  );
};

export default AdminPanel;
