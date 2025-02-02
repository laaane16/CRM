import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as styles from './ProfilePage.module.scss';

import { getProfileData, getProfileIsLoading } from '../../../entities/Profile';
import { DynamicModuleLoader } from '../../../shared/lib';
import { profileReducer } from '../../../entities/Profile';
import { Button, ButtonSizes, ButtonTheme, PageLoader } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { profileFetchData } from '../../../entities/Profile/model/services/profileFetchData';
import cn from 'classnames';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getProfileIsLoading);
  const data = useSelector(getProfileData);

  console.log(isLoading);

  useEffect(() => {
    dispatch(profileFetchData({ id: 1 }));
  }, []);

  const tgClasses = cn(styles.tg, 'primary bold');
  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');

  return (
    <DynamicModuleLoader reducers={reducerList}>
      {isLoading ? (
        <PageLoader />
      ) : (
        <main className={styles.layout}>
          <div className={styles.header}>
            <div className={styles.headerBox}>
              <img className={styles.avatar} src={data?.avatar} alt="avatar" />
              {/* <div className={styles.avatar}>avatar</div> */}
              <div className={styles.name}>
                <h2 className="alternative">{data?.name}</h2>
                <p className={tgClasses}>{data?.telegram}</p>
              </div>
              <Button size={ButtonSizes.SMALL} theme={ButtonTheme.SECONDARY}>
                Написать
              </Button>
              <Button size={ButtonSizes.SMALL} theme={ButtonTheme.SECONDARY}>
                Позвонить
              </Button>
              <Button size={ButtonSizes.SMALL} theme={ButtonTheme.GHOST}>
                *
              </Button>
              <Button size={ButtonSizes.SMALL} theme={ButtonTheme.GHOST}>
                ...
              </Button>
            </div>
            <ul className={styles.views}>
              <li className={styles.view}>Общий</li>
              <li className={styles.view}>Проекты и задачи</li>
              <li className={styles.view}>Документы</li>
              <li className={styles.view}>Резюме</li>
              <li className={styles.view}>Заявки и жалобы</li>
            </ul>
          </div>
          <div className={styles.mainInfo}>
            <span className={styles.marker}>штатный</span>
            <span className={styles.extra}>...</span>
            <ul className={styles.mainInfoList}>
              <li className={mainInfoItemClasses}>{data?.number}</li>
              <li className={mainInfoItemClasses}>{data?.mail}</li>
              <li className={mainInfoItemClasses}>{data?.post.main}</li>
              <li className={mainInfoItemClasses}>{data?.post.extra}</li>
              <li className={mainInfoItemClasses}>{data?.post.extra}</li>
              <li className={mainInfoItemClasses}>{`Живет в ${data?.address}`}</li>
            </ul>
            <ul className={styles.socialsList}>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
              <li className={styles.socialItem}></li>
            </ul>
            <ul>
              <li className={dateItemClasses}>{data?.createdAt}</li>
              <li className={dateItemClasses}>{data?.updatedAt}</li>
            </ul>
          </div>
        </main>
      )}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
