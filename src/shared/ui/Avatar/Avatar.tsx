import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Avatar.module.scss';

export enum AvatarSizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface Props {
  className?: string;
  avatar?: string;
  size?: AvatarSizes;
}

const Avatar: FC<Props> = ({ avatar, size = AvatarSizes.MEDIUM, className }) => {
  const avatarStyles = cn(styles.avatar, className, {
    [`${styles.noAvatar} icon-user`]: !avatar,
    [styles[size]]: true,
  });

  return avatar ? <img className={avatarStyles} src={avatar} alt="avatar" /> : <span className={avatarStyles}></span>;
};

export default Avatar;
