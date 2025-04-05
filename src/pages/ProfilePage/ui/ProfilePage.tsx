import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { useParams } from 'react-router-dom';

import {
  getProfileData,
  getProfileIsLoading,
  profileReducer,
  profileFetchData,
  getProfileError,
  getProfileForm,
} from '../../../entities/Profile';
import { DynamicModuleLoader, useAppDispatch } from '../../../shared/lib';
import MainCard from './MainCard/MainCard';
import StatusCard from './StatusCard/StatusCard';
import TasksCard from './TasksCard/TasksCard';
import WorkCard from './WorkCard/WorkCard';
import DocsCard from './DocsCard/DocsCard';
import EventCard from './EventCard/EventCard';
import HistoryCard from './HistoryCard/HistoryCard';
import { getUserId } from '../../../entities/User';

import * as styles from './ProfilePage.module.scss';
import ProfilePageHeader from './ProfilePageHeader/ProfilePageHeader';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getProfileIsLoading);
  const form = useSelector(getProfileForm);
  const error = useSelector(getProfileError);
  const userId = useSelector(getUserId);
  const { userId: profileId } = useSelector(getProfileData) || {};

  const { id } = useParams();

  const canEdit = userId === profileId;

  useEffect(() => {
    dispatch(profileFetchData({ id: Number(id) }));
  }, []);

  return (
    <DynamicModuleLoader reducers={reducerList}>
      <main data-testid="profile-page" className={styles.layout}>
        <ProfilePageHeader className={styles.header} />
        <MainCard
          canEdit={canEdit}
          className={styles.mainCard}
          isLoading={isLoading as boolean}
          data={form}
          error={error}
        />
        <StatusCard className={styles.statusCard} />
        <TasksCard className={styles.tasksCard} />
        <WorkCard className={styles.workCard} />
        <DocsCard className={styles.docsCard} />
        <EventCard className={styles.eventCard} />
        <HistoryCard className={styles.historyCard} />
      </main>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
