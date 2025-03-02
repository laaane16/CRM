import { FC } from 'react';
import cn from 'classnames';

import * as styles from './EmployeesCard.module.scss';

import Avatar, { AvatarSizes } from '../../../../shared/ui/Avatar/Avatar';

export enum EmployeesCardView {
  LARGE = 'large',
  SMALL = 'small',
}

interface IPost {
  main: string;
  extra?: string;
}

interface ICompany {
  id: number;
  title: string;
  avatar: string;
}

export interface IEmployee {
  id: number;
  userId: number;
  name: string;
  post: IPost;
  company: ICompany;
  employment: string;
  avatar: string;
  tg: string;
}

interface Props {
  className?: string;
  view: EmployeesCardView;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: IEmployee;
}

const EmployeesCard: FC<Props> = ({ view, data, className }) => {
  const wrapClasses = cn(className, styles.wrap, styles[view]);

  return view === EmployeesCardView.SMALL ? (
    <div className={wrapClasses}>
      <Avatar size={AvatarSizes.MEDIUM} className={styles.avatar} avatar={data.avatar} />
      <div className={styles.infoBox}>
        <span className={cn(styles.name, 'primary bold')}>{data.name}</span>
        <span className={styles.post}>
          <span className="icon-verify-bordered"></span>
          {data.post.main}
        </span>
      </div>
      <div className={styles.extraBox}>
        <Avatar
          size={AvatarSizes.SMALL}
          className={styles.companyAvatar}
          avatar={data.company.avatar}
          withIcon={false}
        />
        <div className={styles.companyInfoBox}>
          <span className={cn(styles.companyTitle, 'primary medium')}>{data.company.title}</span>
          <span className={cn(styles.employment, 'tiny medium')}>{data.employment}</span>
        </div>
      </div>
    </div>
  ) : (
    <div className={wrapClasses}>
      <Avatar size={AvatarSizes.LARGE} className={styles.avatar} avatar={data.avatar} />
      <h2 className={cn(styles.name, 'alternative')}>{data.name}</h2>
      <span className={cn(styles.tg, 'primary bold')}>{data.tg}</span>
      <span className={cn(styles.post, 'primary medium')}>
        <span className="icon-verify-bordered"></span>
        {data.post.main}
      </span>
      <span className={cn(styles.companyTitle, 'secondary medium')}>{data.company.title}</span>
      <span className={cn(styles.employment, 'tiny medium')}>{data.employment}</span>
    </div>
  );
};

export default EmployeesCard;
