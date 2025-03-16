import { FC } from 'react';
import cn from 'classnames';

import { BarChart, Bar } from 'recharts';
import { Ellipsis } from '../../../../shared/ui';

import * as styles from './WorkCard.module.scss';

interface IData {
  day: string;
  workTime: number[];
}

interface Props {
  className?: string;
}

const workData: IData[] = [
  {
    day: '01',
    workTime: [0, 100],
  },
  {
    day: '02',
    workTime: [0, 80],
  },
  {
    day: '03',
    workTime: [0, 50],
  },
  {
    day: '04',
    workTime: [0, 60],
  },
  {
    day: '05',
    workTime: [0, 100],
  },
  {
    day: '06',
    workTime: [0, 40],
  },
  {
    day: '07',
    workTime: [0, 90],
  },
];

const WorkCard: FC<Props> = ({ className }) => {
  const titleClasses = cn(styles.title, 'alternative');
  const chartLabelClasses = cn(styles.chartLabel, 'primary medium');
  const extraInfoClasses = cn(styles.extraInfo, 'secondary medium');

  return (
    <div className={styles.workTime}>
      <Ellipsis className={styles.extra} />
      <h2 className={titleClasses}>55:30:41</h2>
      <BarChart width={188} height={72} className={styles.workTimeChart} data={workData}>
        <Bar dataKey="workTime" fill="#c4c4c4" />
      </BarChart>
      <span className={chartLabelClasses}>Работал на этой неделе</span>
      <p className={extraInfoClasses}>5 опозданий</p>
      <p className={extraInfoClasses}>0 больничных</p>
    </div>
  );
};

export default WorkCard;
