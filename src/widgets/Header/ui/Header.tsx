import { FC, useContext } from 'react';
import cn from 'classnames';
import { useTranslation } from 'react-i18next';

import { Button, ButtonSizes, ButtonTheme } from '../../../shared/ui';
import { ThemeContext, Themes } from '../../../shared/theme';
import { THEME_LOCALSTORAGE_KEY } from '../../../shared/constants';
import i18n from '../../../shared/configs/i18n/i18n';

import * as styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAvailableByRole } from '../../../entities/User/model/selectors/getUserRoles/getUserRoles';
import { StateSchema } from '../../../app/providers';
interface Props {
  className?: string;
}

const Header: FC<Props> = () => {
  const { t } = useTranslation('translation');

  const { theme, setTheme } = useContext(ThemeContext);
  const isUserAvailable = useSelector((state: StateSchema) => getAvailableByRole(state, ['admin']));

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
      <Button size={ButtonSizes.SMALL}>{t('header.addEmployee')}</Button>
      <Button size={ButtonSizes.SMALL}>{t('header.getEmployee')}</Button>
      <Button size={ButtonSizes.SMALL} onClick={onChangeTheme}>
        {t('header.changeTheme')}
      </Button>

      <Button
        className={styles.languageBtn}
        theme={ButtonTheme.GHOST}
        onClick={() => (i18n.language === 'ru' ? i18n.changeLanguage('en') : i18n.changeLanguage('ru'))}
        size={ButtonSizes.SMALL}
      >
        {i18n.language}
      </Button>

      {isUserAvailable && (
        <Link to="/admin">
          <Button className={styles.languageBtn} theme={ButtonTheme.GHOST} size={ButtonSizes.SMALL}>
            {t('header.admin')}
          </Button>
        </Link>
      )}
      <span className={cn('icon-settings', styles.icon)}></span>
      <span className={cn('icon-info', styles.icon)}></span>
    </header>
  );
};

export default Header;
