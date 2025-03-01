import { FC, useContext } from 'react';
import cn from 'classnames';

import * as styles from './Header.module.scss';

import { Button, Tooltip } from '../../../shared/ui';
import { ButtonSizes } from '../../../shared/ui';
import { useTranslation } from 'react-i18next';
import { ThemeContext, Themes } from '../../../shared/theme';
import { THEME_LOCALSTORAGE_KEY } from '../../../shared/constants/localstorage';
import { ArrowPosition } from '../../../shared/ui/Tooltip/Tooltip';

interface Props {
  className?: string;
}

const Header: FC<Props> = () => {
  const { t } = useTranslation();

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
      <span className={cn(styles.icon, 'icon-settings')}></span>
      <Tooltip className={styles.tooltip} arrowPosition={ArrowPosition.BOTTOM}>
        <span className={cn(styles.icon, 'icon-info')}></span>
      </Tooltip>
    </header>
  );
};

export default Header;
