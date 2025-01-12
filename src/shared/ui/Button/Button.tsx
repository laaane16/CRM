import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

import * as styles from './Button.module.scss';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: Sizes;
  theme?: Theme;
}

export enum Theme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
  GHOST = 'ghost',
}

export enum Sizes {
  LARGE = 'large',
  SMALL = 'small',
}

const Button: FC<Props> = ({ className, children, size = Sizes.LARGE, theme = Theme.PRIMARY, ...otherProps }) => {
  const mods = {
    [styles[size]]: true,
    [styles[theme]]: true,
  };

  const btnClasses = cn(styles.btn, mods, [className]);

  return (
    <button type="button" className={btnClasses} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
