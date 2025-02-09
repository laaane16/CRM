import { FC, useMemo } from 'react';
import { PieChart, Pie, Cell, LabelList, Label } from 'recharts';

import { Ellipsis } from '../../../../shared/ui';

import * as styles from './StatusCard.module.scss';

interface IData {
  value: number;
  name: string;
  color: string;
}

interface Props {
  className?: string;
  data: IData[];
}

const listData = [
  { value: 'Завершенные' },
  { value: 'В процессе' },
  { value: 'На рассмотрении' },
  { value: 'Без срока' },
  { value: 'Просрочены' },
  { value: 'Планируемы' },
];

const StatusCard: FC<Props> = ({ className, data }) => {
  const total = useMemo(() => data.reduce((sum, entry) => sum + entry.value, 0), [data]);

  return (
    <div className={styles.status}>
      <h3 className={styles.statusTitle}>СТАТУС ПРОЕКТОВ</h3>
      <Ellipsis className={styles.extra} />
      <ul className={styles.statusList}>
        {listData.map((item, index) => (
          <li key={item.value} className={'primary medium'}>
            <span className={styles[`itemIcon${index + 1}`]}></span>
            {item.value}
          </li>
        ))}
      </ul>
      <PieChart className={styles.chart} width={200} height={200}>
        <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
          <LabelList dataKey="value" position="inside" fill="#fff" />
          <Label dy={-12} fill="1F2D3D" fontSize={24} fontWeight={800} position="center" value={total} />
          <Label dy={12} position="center" value="Все" />
        </Pie>
      </PieChart>
    </div>
  );
};

export default StatusCard;
