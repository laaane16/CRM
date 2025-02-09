import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';

import * as styles from './ProfilePage.module.scss';

import { getProfileData, getProfileIsLoading, profileReducer } from '../../../entities/Profile';
import { DynamicModuleLoader } from '../../../shared/lib';
import { Button, ButtonSizes, ButtonTheme, Checkbox, PageLoader } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { profileFetchData } from '../../../entities/Profile/model/services/profileFetchData';
import MainCard from './MainCard/MainCard';
import StatusCard from './StatusCard/StatusCard';
import TasksCard from './TasksCard/TasksCard';
import WorkCard from './WorkCard/WorkCard';
import DocsCard from './DocsCard/DocsCard';
import EventCard from './EventCard/EventCard';
import HistoryCard from './HistoryCard/HistoryCard';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

// const dataValue = [
//   { name: '1', value: 3 },
//   { name: '2', value: 48 },
//   { name: '3', value: 16 },
//   { name: '4', value: 16 },
//   { name: '5', value: 7 },
//   { name: '6', value: 9 },
//   { name: '7', value: 3 },
// ];

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

  const tasksData = new Array(15).fill({
    avatar:
      'https://s3-alpha-sig.figma.com/img/93e2/fb68/8d9c02096c95887f5dd199d9b5fe5d8f?Expires=1739145600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=U6Sn5Lse9m6zKApeAzPh-qhcICZMQ231njoxKR-ySm1KSO2gpSEZE9yRvcdG9e9x6XXh2ANHEX-RVu9fIpdwJaG-MyeQh4lYcypG0W7cnE73WUuYhAM-ite9liWwbktZxMo2VeVEzxomxpmp0aiM5-raYJWCCcubmdP4w0D816ual3RijN-UbWfpe4Zjydu5MAH7i2cNRZUqHiBZx6h2RL5IuRDunpS4b71sq5ZuKvRym~XUBTv~s6XUBmjtA6UiPUTe1gsOJ~g2Re3kr5S-aRY5DrpVp~gL3lHVg3AsK275d-wZs7tzrHIWxyssA2~U~VVAecEbhFBOi5QV1w8DJQ__',

    title: 'Подготовка презентации по мобильного приложения Sample App',
    importance: 'Срочно',
    deadline: '10:30, 15 марта, 2025',
  });

  useEffect(() => {
    dispatch(profileFetchData({ id: 1 }));
  }, []);

  const tgClasses = cn(styles.tg, 'primary bold');

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
          <MainCard data={data} />
          <StatusCard data={statusData} />
          <TasksCard data={tasksData} />
          <WorkCard data={workData} />
          <DocsCard />
          <EventCard />
          <HistoryCard />
        </main>
      )}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
