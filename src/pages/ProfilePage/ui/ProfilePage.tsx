import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useParams } from 'react-router-dom';

import * as styles from './ProfilePage.module.scss';

import {
  getProfileData,
  getProfileIsLoading,
  profileReducer,
  profileFetchData,
  getProfileError,
} from '../../../entities/Profile';
import { DynamicModuleLoader } from '../../../shared/lib';
import { Button, ButtonSizes, ButtonTheme } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import MainCard from './MainCard/MainCard';
import StatusCard from './StatusCard/StatusCard';
import TasksCard from './TasksCard/TasksCard';
import WorkCard from './WorkCard/WorkCard';
import DocsCard from './DocsCard/DocsCard';
import EventCard from './EventCard/EventCard';
import HistoryCard from './HistoryCard/HistoryCard';
import { getUserAvatar, getUserId } from '../../../entities/User';
import Avatar, { AvatarSizes } from '../../../shared/ui/Avatar/Avatar';
import Skeleton from '../../../shared/ui/Skeleton/Skeleton';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

const statusData = [
  { name: 'A', value: 48, color: '#16212B' },
  { name: 'B', value: 16, color: '#2C3E50' },
  { name: 'C', value: 16, color: '#5C7080' },
  { name: 'D', value: 7, color: '#8A9BA8' },
  { name: 'E', value: 9, color: '#B0BEC5' },
  { name: 'F', value: 3, color: '#CFD8DC' },
];

const workData = [
  {
    day: '01',
    workTime: [0, 100],
  },
  {
    day: '02',
    workTime: [0, 80],
  },
  {
    day: '03',
    workTime: [0, 50],
  },
  {
    day: '04',
    workTime: [0, 60],
  },
  {
    day: '05',
    workTime: [0, 100],
  },
  {
    day: '06',
    workTime: [0, 40],
  },
  {
    day: '07',
    workTime: [0, 90],
  },
];

const ProfilePage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getProfileIsLoading);
  const data = useSelector(getProfileData);
  const error = useSelector(getProfileError);
  const userId = useSelector(getUserId);
  const { userId: profileId } = useSelector(getProfileData) || {};

  const { id } = useParams();

  const canEdit = userId === profileId;

  useEffect(() => {
    dispatch(profileFetchData({ id: Number(id) }));
  }, []);

  const tgClasses = cn(styles.tg, 'primary bold');

  return (
    <DynamicModuleLoader reducers={reducerList}>
      <main className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.headerBox}>
            {isLoading ? (
              <>
                <Skeleton className={styles.skeleton} borderRadius="50%" width="64px" height="64px" />
                <span className={styles.skeletonWrap}>
                  <Skeleton className={styles.skeleton} width="300px" height="28px" />
                  <Skeleton className={styles.skeleton} width="200px" height="20px" />
                </span>
              </>
            ) : (
              <>
                <Avatar size={AvatarSizes.LARGE} avatar={data?.avatar} />
                <div className={styles.name}>
                  <h2 className="alternative">{data?.name}</h2>
                  <p className={tgClasses}>{data?.telegram}</p>
                </div>
              </>
            )}
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
        <MainCard
          canEdit={canEdit}
          className={styles.mainCard}
          isLoading={isLoading as boolean}
          data={data}
          error={error}
        />
        <StatusCard data={statusData} />
        <TasksCard className={styles.tasksCard} />
        <WorkCard data={workData} />
        <DocsCard />
        <EventCard />
        <HistoryCard />
      </main>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
