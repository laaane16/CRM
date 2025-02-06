import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Ellipsis.module.scss';

interface Props {
  className?: string;
}

const Ellipsis: FC<Props> = ({ className }) => {
  const classes = cn(styles.ellipsis, className);

  return <span className={classes}></span>;
};

export default Ellipsis;
