import { FC } from 'react';

import * as styles from './SectionBody.module.scss';
import { EmployeesList } from '../../../entities/Employee';
import { EmployeesCardView } from '../../../entities/Employee/ui/EmployeesCard/EmployeesCard';

interface Props {
  className?: string;
  currentView: EmployeesCardView;
}

const data = {
  id: 1,
  userId: 1,
  name: 'Станислав Попов',
  post: {
    main: 'Системный администратор',
  },
  avatar: '',
  company: {
    id: 1,
    avatar: '',
    title: 'Bpium',
  },
  employment: 'совмещение',
  tg: '@sada12',
};

const SectionBody: FC<Props> = ({ className, currentView }) => {
  return (
    <div className={styles.container}>
      <div className={styles.sort}></div>
      <EmployeesList className={styles.list} view={currentView} items={new Array(10).fill(data)} />
    </div>
  );
};

export default SectionBody;
