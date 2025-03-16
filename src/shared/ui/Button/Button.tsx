import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import cn from 'classnames';

import * as styles from './Button.module.scss';
import Loader, { LoaderSize } from '../Loader/Loader';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  size?: Sizes;
  theme?: Theme;
  isLoading?: boolean;
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

const Button: FC<Props> = ({
  className,
  children,
  size = Sizes.LARGE,
  theme = Theme.PRIMARY,
  isLoading = false,
  ...otherProps
}) => {
  const mods = {
    [styles[size]]: true,
    [styles[theme]]: true,
  };

  const btnClasses = cn(styles.btn, mods, [className]);

  const getInvertedColor = (theme: Theme) => {
    switch (theme) {
      case Theme.PRIMARY:
        return Theme.GHOST;
      case Theme.SECONDARY:
        return Theme.GHOST;
      default:
        Theme.PRIMARY;
    }
  };

  const invertedColor = getInvertedColor(theme);

  return (
    <button type="button" className={btnClasses} {...otherProps}>
      {isLoading && <Loader color={invertedColor} className={styles.loader} size={LoaderSize.SMALL} />}
      {children}
    </button>
  );
};

export default Button;
