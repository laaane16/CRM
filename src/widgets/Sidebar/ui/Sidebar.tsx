import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import { isMobile } from 'react-device-detect';

import { getUserId, getUsername, getUserAvatar, userActions } from '../../../entities/User';
import { AppPaths, AppRoutes, useAppDispatch } from '../../../shared/lib';
import Avatar, { AvatarSizes } from '../../../shared/ui/Avatar/Avatar';
import { Tooltip } from '../../../shared/ui';
import { ArrowPosition } from '../../../shared/ui/Tooltip/Tooltip';
import Modal from '../../../shared/ui/Modal/Modal';
import Drawer from '../../../shared/ui/Drawer/Drawer';
import NotificationList from '../../../entities/Notification/ui/NotificationList/NotificationList';
import { useGetNotificationsQuery } from '../../../entities/Notification/api/notificationApi';

import * as styles from './Sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = () => {
  const [visible, setVisible] = useState(false);
  const username = useSelector(getUsername);
  const dispatch = useAppDispatch();

  const userId = useSelector(getUserId);
  const avatar = useSelector(getUserAvatar);

  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(userActions.logout());
    navigate(AppPaths[AppRoutes.LOGIN]);
  };

  const { data, isLoading } = useGetNotificationsQuery(null, {
    pollingInterval: 3000,
  });

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
          <Link className={styles.navLink} to={`${AppPaths[AppRoutes.PROFILE]}/${userId}`}>
            <Avatar size={AvatarSizes.SMALL} avatar={avatar} />
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
            <span data-icon="true" className={`${styles.itemIcon} icon-user `} />
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
            <span data-icon="true" className={`${styles.itemIcon} icon-bookmark`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Закладки</span>
              <span className={styles.circle}></span>
            </div>
          </Link>
        </div>

        <div
          className={styles.navItem}
          onClick={() => {
            setVisible(true);
          }}
        >
          <div className={cn(styles.navLink)}>
            <span data-icon="true" className={`${styles.itemIcon} icon-notifications`} />
            <div className={styles.container}>
              <span className={styles.itemTitle}>Уведомления</span>
            </div>
            {isMobile ? (
              <Drawer
                className={styles.drawer}
                isOpen={visible}
                content={<NotificationList data={isLoading ? [] : data || []} className={styles.notificationList} />}
                onClose={() => setVisible(false)}
              />
            ) : (
              <Modal
                className={styles.modal}
                isOpen={visible}
                content={<NotificationList data={isLoading ? [] : data || []} className={styles.notificationList} />}
                onClose={() => setVisible(false)}
              />
            )}

            {/* <Tooltip
              arrowPosition={ArrowPosition.RIGHT}
              className={styles.navLink}
              trigger={['click']}
              content={
                <div className={styles.notificationWrap}>
                  <NotificationList data={isLoading ? [] : data || []} className={styles.notificationList} />
                </div>
              }
            >
              <span data-icon="true" className={`${styles.itemIcon} icon-notifications`} />
              <div className={styles.container}>
                <span className={styles.itemTitle}>Уведомления</span>
              </div>
            </Tooltip> */}
          </div>
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
