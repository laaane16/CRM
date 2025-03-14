import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './Header.module.scss';

import { Button } from '../../../shared/ui';
import { ButtonSizes } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { useTranslation } from 'react-i18next';
import { ThemeContext, Themes } from '../../../shared/theme';
import { THEME_LOCALSTORAGE_KEY } from '../../../shared/constants/localstorage';
import cn from 'classnames';

interface Props {
  className?: string;
}

const Header: FC<Props> = () => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { theme, setTheme } = useContext(ThemeContext);

  const onChangeTheme = () => {
    switch (theme) {
      case Themes.LIGHT:
        setTheme && setTheme(Themes.DARK);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, Themes.DARK);
        break;
      case Themes.DARK:
        setTheme && setTheme(Themes.PINK);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, Themes.PINK);
        break;
      default:
        setTheme && setTheme(Themes.LIGHT);
        localStorage.setItem(THEME_LOCALSTORAGE_KEY, Themes.LIGHT);
        break;
    }
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>{t('header.title')}</h1>
      <Button size={ButtonSizes.SMALL} onClick={onChangeTheme}>
        Сменить тему
      </Button>
      <Button size={ButtonSizes.SMALL}>{t('header.addEmployee')}</Button>
      <Button size={ButtonSizes.SMALL}>{t('header.getEmployee')}</Button>
      <span className={cn('icon-settings', styles.icon)}></span>
      <span className={cn('icon-info', styles.icon)}></span>
    </header>
  );
};

export default Header;
