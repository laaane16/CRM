import { FC } from 'react';
import cn from 'classnames';

import * as styles from './MainCard.module.scss';
import { IProfile } from '../../../../entities/Profile';
import { Ellipsis } from '../../../../shared/ui';

interface Props {
  className?: string;
  data?: IProfile;
}

const MainCard: FC<Props> = ({ data }) => {
  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');
  return (
    <>
      <span className="icon-pinterest"></span>
      <div className={styles.mainInfo}>
        <span className={styles.marker}>штатный</span>
        <Ellipsis className={styles.extra} />
        <ul className={styles.mainInfoList}>
          <li className={mainInfoItemClasses}>{data?.number}</li>
          <li className={mainInfoItemClasses}>{data?.mail}</li>
          <li className={mainInfoItemClasses}>{data?.post.main}</li>
          <li className={mainInfoItemClasses}>{data?.post.extra}</li>
          <li className={mainInfoItemClasses}>{data?.post.extra}</li>
          <li className={mainInfoItemClasses}>{`Живет в ${data?.address}`}</li>
        </ul>
        <ul className={styles.socialsList}>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
          <li className={styles.socialItem}></li>
        </ul>
        <ul>
          <li className={dateItemClasses}>{data?.createdAt}</li>
          <li className={dateItemClasses}>{data?.updatedAt}</li>
        </ul>
      </div>
    </>
  );
};

export default MainCard;
