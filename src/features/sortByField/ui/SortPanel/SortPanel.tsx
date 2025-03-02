import { FC } from 'react';

import * as styles from './SortPanel.module.scss';

import SortField from '../SortField/SortField';
import { OrderType } from '../../../../shared/types/OrderType';

interface ISort {
  title: string;
  value: OrderType;
}

interface Props {
  className?: string;
  fields: ISort[];
  onChangeSort: (sort: ISort) => void;
}

const SortPanel: FC<Props> = ({ fields, onChangeSort }) => {
  const handleChangeSort = (sort: ISort) => {
    if (sort.value === 'asc') {
      onChangeSort({ ...sort, value: 'desc' });
    } else {
      onChangeSort({ ...sort, value: 'asc' });
    }
  };

  return (
    <ul className={styles.sortPanelList}>
      {fields.map((field) => (
        <li onClick={() => handleChangeSort(field)} key={field.title}>
          <SortField title={field.title} value={field.value} />
        </li>
      ))}
    </ul>
  );
};

export default SortPanel;
