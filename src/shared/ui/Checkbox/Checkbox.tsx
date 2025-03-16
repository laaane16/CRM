import { FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';

import * as styles from './Checkbox.module.scss';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

const Checkbox: FC<Props> = ({ className, label }) => {
  const containerClasses = cn(styles.container, className);

  return (
    <>
      <label data-parent className={containerClasses}>
        {label}
        <input className={styles.input} type="checkbox" name="" id="" />
        <span className={styles.checkmarkContainer}>
          <span className={cn('icon-check', styles.checkmark)} />
        </span>
      </label>
    </>
  );
};

export default Checkbox;
