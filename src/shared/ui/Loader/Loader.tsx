import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Loader.module.scss';

interface Props {
  view?: LoaderView;
  size?: LoaderSize;
  className?: string;
}

export enum LoaderView {
  SPIN = 'spin',
  BAR = 'bar',
}

enum LoaderSize {
  LARGE = 'large',
  SMALL = 'small',
}

const Loader: FC<Props> = ({ className, view = LoaderView.SPIN, size = LoaderSize.LARGE }) => {
  const loaderClasses = cn(className, styles[view], styles[`${view}_${size}`]);

  return <span className={loaderClasses}></span>;
};

export default Loader;
