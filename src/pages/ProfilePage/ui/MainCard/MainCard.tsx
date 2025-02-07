import { FC } from 'react';
import cn from 'classnames';

import * as styles from './MainCard.module.scss';

import { IProfile } from '../../../../entities/Profile';
import { Ellipsis } from '../../../../shared/ui';

interface Props {
  className?: string;
  data?: IProfile;
}

const socialItems = [
  { icon: 'vk', link: '' },
  { icon: 'youtube', link: '' },
  { icon: 'tg', link: '' },
  { icon: 'Frame', link: '' },
  { icon: 'mail', link: '' },
  { icon: 'medium', link: '' },
  { icon: 'skype', link: '' },
  { icon: 'github', link: '' },
  { icon: 'gmail', link: '' },
  { icon: 'whatsapp', link: '' },
  { icon: 'pinterest', link: '' },
];

const MainCard: FC<Props> = ({ data }) => {
  const mainInfoListData = [
    { data: data?.number, icon: 'call' },
    { data: data?.mail, icon: 'alternate-mail' },
    { data: data?.post.main, icon: 'verify-bordered' },
    { data: data?.post?.extra, icon: 'verify-bordered' },
    { data: data?.address, icon: 'map' },
  ];

  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');
  // TODO: marker should return from profile data
  return (
    <>
      <div className={styles.mainInfo}>
        <span className={styles.marker}>штатный</span>
        <Ellipsis className={styles.extra} />
        <ul className={styles.mainInfoList}>
          {mainInfoListData.map((item, index) => (
            <li key={index} className={mainInfoItemClasses}>
              <span className={cn(`icon-${item.icon}`, styles.mainInfoItemIcon)} />
              {item.data}
            </li>
          ))}
        </ul>
        <ul className={styles.socialsList}>
          {socialItems.map((item, index) => (
            <li key={index}>
              <span className={cn(`icon-${item.icon}`, styles.socialIcon)}>
                <a href={item.link}></a>
              </span>
            </li>
          ))}
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
