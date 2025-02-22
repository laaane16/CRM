import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Skeleton.module.scss';

interface Props {
  className?: string;
  width?: string;
  height?: string;
  borderRadius?: string;
}

const Skeleton: FC<Props> = ({ width, height, className, borderRadius = '8px' }) => {
  const skeletonClasses = cn(className, styles.skeleton);

  return <div style={{ width, height }} className={skeletonClasses}></div>;
};

export default Skeleton;
