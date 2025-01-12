import { FC } from 'react';
import cn from 'classnames';

import * as styles from './Sidebar.module.scss';

interface Props {
  className?: string;
}

const Sidebar: FC<Props> = () => {
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
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
        <div className={styles.navItem}>
          <span className={styles.itemIcon}></span>
          <div className={styles.container}>
            <span className={styles.itemTitle}>Title</span>
            <span className={styles.circle}></span>
          </div>
        </div>
      </nav>
      <div className={styles.navItem}>
        <span className={styles.itemIcon}></span>
        <div className={styles.container}>
          <span className={styles.itemTitle}>Title</span>
          <span className={styles.circle}></span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
