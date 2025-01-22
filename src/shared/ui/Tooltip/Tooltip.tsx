import { FC, ReactNode } from 'react';
import cn from 'classnames';

import * as styles from './Tooltip.module.scss';

enum ArrowPosition {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

interface Props {
  className?: string;
  children: ReactNode;
  title: string;
  arrowPosition?: ArrowPosition;
}

const Tooltip: FC<Props> = ({ className, children, title, arrowPosition = ArrowPosition.TOP }) => {
  const tooltipClasses = cn(className, styles.tooltip, [styles[arrowPosition]]);

  return (
    <div className={styles.container}>
      <p className={tooltipClasses}>{title}</p>
      {children}
    </div>
  );
};

export default Tooltip;
