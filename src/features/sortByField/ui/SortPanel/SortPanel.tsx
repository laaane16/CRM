import { FC } from 'react';

import * as styles from './SortPanel.module.scss';

import SortField from '../SortField/SortField';
import { OrderType } from '../../../../shared/types/Order';

export interface ISort {
  title: string;
  field: string;
  order: OrderType | '';
}

interface Props {
  className?: string;
  fields: ISort[];
  onChangeSort: (sort: ISort) => void;
}

const SortPanel: FC<Props> = ({ fields, onChangeSort }) => {
  return (
    <ul className={styles.sortPanelList}>
      {fields.map((field) => (
        <li onClick={() => onChangeSort(field)} key={field.title}>
          <SortField title={field.title} order={field.order} />
        </li>
      ))}
    </ul>
  );
};

export default SortPanel;
