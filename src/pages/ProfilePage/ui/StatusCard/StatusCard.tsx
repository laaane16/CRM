import { FC, useMemo } from 'react';
import { PieChart, Pie, Cell, LabelList, Label } from 'recharts';

import { Ellipsis } from '../../../../shared/ui';

import * as styles from './StatusCard.module.scss';
import { useTranslation } from 'react-i18next';

interface IData {
  value: number;
  name: string;
  color: string;
}

interface Props {
  className?: string;
}

const statusData: IData[] = [
  { name: 'A', value: 48, color: '#16212B' },
  { name: 'B', value: 16, color: '#2C3E50' },
  { name: 'C', value: 16, color: '#5C7080' },
  { name: 'D', value: 7, color: '#8A9BA8' },
  { name: 'E', value: 9, color: '#B0BEC5' },
  { name: 'F', value: 3, color: '#CFD8DC' },
];

const listData = [
  { value: 'Завершенные' },
  { value: 'В процессе' },
  { value: 'На рассмотрении' },
  { value: 'Без срока' },
  { value: 'Просрочены' },
  { value: 'Планируемы' },
];

const StatusCard: FC<Props> = ({ className }) => {
  const total = useMemo(() => statusData.reduce((sum, entry) => sum + entry.value, 0), [statusData]);

  const { t } = useTranslation();

  return (
    <div className={styles.status}>
      <h3 className={styles.statusTitle}>dasdasd</h3>
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
        <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={100} fill="#8884d8" dataKey="value">
          {statusData.map((entry, index) => (
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
