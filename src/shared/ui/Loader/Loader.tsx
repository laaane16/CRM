import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Loader.module.scss';

interface Props {
  view?: LoaderView;
  size?: LoaderSize;
  className?: string;
  color?: string;
}

export enum LoaderView {
  SPIN = 'spin',
  BAR = 'bar',
}

export enum LoaderSize {
  LARGE = 'large',
  SMALL = 'small',
}

const Loader: FC<Props> = ({ className, view = LoaderView.SPIN, size = LoaderSize.LARGE, color = '' }) => {
  const loaderClasses = cn(className, styles[view], styles[`${view}_${size}`], styles[color]);

  return <span className={loaderClasses}></span>;
};

export default Loader;
