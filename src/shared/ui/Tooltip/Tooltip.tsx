import { FC, ReactNode, useState } from 'react';
import cn from 'classnames';

import * as styles from './Tooltip.module.scss';

export enum ArrowPosition {
  TOP = 'top',
  RIGHT = 'right',
  BOTTOM = 'bottom',
  LEFT = 'left',
}

type Trigger = 'click' | 'hover' | 'focus';
interface Props {
  style?: object;
  className?: string;
  children: ReactNode;
  title?: string;
  trigger?: Trigger[];
  content: ReactNode;
  arrowPosition?: ArrowPosition;
}

const Tooltip: FC<Props> = ({
  style,
  className,
  children,
  trigger,
  content,
  title,
  arrowPosition = ArrowPosition.TOP,
}) => {
  const [visible, setVisible] = useState(false);

  const tooltipClasses = cn(className, styles.tooltip, [styles[arrowPosition]]);

  const Controller: Record<string, () => void> = {
    onClick: () => {
      setVisible(!visible);
    },
  };

  const triggerProps = (() => {
    const res: Record<string, () => void> = {};

    if (!trigger) {
      return {};
    }

    trigger.forEach((i: string) => {
      const key = `on${i[0].toLocaleUpperCase() + i.slice(1)}`;
      res[key] = Controller[key];
    });

    return res;
  })();

  return (
    <div {...triggerProps} style={style} className={cn(styles.container, className)}>
      {visible &&
        (content ? <div className={tooltipClasses}>{content}</div> : <p className={tooltipClasses}>{title}</p>)}
      {children}
    </div>
  );
};

export default Tooltip;
