import cn from 'classnames';
import { FC, InputHTMLAttributes } from 'react';

import * as styles from './Input.module.scss';

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
  className?: string;
  type?: string;
  value: string;
  title?: string;
  onChange: (value: string) => void;
}

const Input: FC<Props> = ({ type = 'text', onChange, value, title, className, ...otherProps }) => {
  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
    return e.target.value;
  };

  const inputClasses = cn(className, styles.input, 'secondary medium');

  return title ? (
    <div>
      <span className={styles.title}>{title}</span>
      <input className={inputClasses} value={value} onChange={onHandleChange} type={type} {...otherProps} />
    </div>
  ) : (
    <input className={inputClasses} value={value} onChange={onHandleChange} type={type} {...otherProps} />
  );
};

export default Input;
