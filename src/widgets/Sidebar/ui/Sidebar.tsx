import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';

import * as styles from './Sidebar.module.scss';
import { getUsername, getAvatar, userActions } from '../../../entities/User';
import { AppPaths, AppRoutes, useAppDispatch } from '../../../shared/lib';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = () => {
  const username = useSelector(getUsername);
  const avatar = useSelector(getAvatar);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(userActions.logout());
    navigate(AppPaths[AppRoutes.LOGIN]);
  };

  return (
    <aside className={cn(styles.sidebar)}>
      <h1 className={styles.logo}>
        LO
        <br />
        GO
      </h1>
      <h1 className={styles.title}>
        Company
        <br />
        Name
      </h1>
      <nav className={styles.nav}>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.PROFILE]}>
            <img className={styles.avatar} src={avatar} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>{username}</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-search`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Поиск</span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-grid`} />

            <div className={styles.container}>
              <span className={styles.itemTitle}>Проекты</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-user`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Люди</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-verify`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Компании</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span className={styles.itemIcon}></span>
            <div className={styles.container}>
              <span className={styles.itemTitle}>Товары</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-chat`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Чат</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} bookmark`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Закладки</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
        <div className={styles.navItem}>
          <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
            <span data-icon="true" className={`${styles.itemIcon} icon-notifications`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Уведомления</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>
      </nav>
      <div onClick={onLogoutClick} className={styles.navItem}>
        <Link className={styles.navLink} to={AppPaths[AppRoutes.MAIN]}>
          <span data-icon="true" className={`${styles.itemIcon} icon-next`} />
          <div className={styles.container}>
            <span className={styles.itemTitle}>Выйти</span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
