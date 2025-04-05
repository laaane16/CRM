import { FC } from 'react';
import cn from 'classnames';

import AppImage from '../AppImage/AppImage';

import * as styles from './Avatar.module.scss';
import Loader, { LoaderSize } from '../Loader/Loader';

export enum AvatarSizes {
  LARGE = 'large',
  MEDIUM = 'medium',
  SMALL = 'small',
}

interface Props {
  className?: string;
  avatar?: string;
  size?: AvatarSizes;
  withIcon?: boolean;
}

const Avatar: FC<Props> = ({ avatar, size = AvatarSizes.MEDIUM, className, withIcon = true }) => {
  const avatarStyles = cn(styles.avatar, className, {
    [styles.noAvatar]: !avatar,
    'icon-user': withIcon,
    [styles[size]]: true,
  });

  return (
    <AppImage
      fallbackLoading={<Loader size={LoaderSize.SMALL} />}
      fallbackError={<span className={avatarStyles}></span>}
      src={avatar}
      alt="avatar"
    />
  );
};

export default Avatar;
