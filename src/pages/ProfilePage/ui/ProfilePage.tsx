import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

import * as styles from './ProfilePage.module.scss';

import { getProfileData, getProfileIsLoading } from '../../../entities/Profile';
import { DynamicModuleLoader } from '../../../shared/lib';
import { profileReducer } from '../../../entities/Profile';
import { Button, ButtonSizes, ButtonTheme, Checkbox, PageLoader } from '../../../shared/ui';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { profileFetchData } from '../../../entities/Profile/model/services/profileFetchData';
import cn from 'classnames';
import { PieChart, Pie, Cell, Label, LabelList } from 'recharts';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

const dataValue = [
  { name: '1', value: 3 },
  { name: '2', value: 48 },
  { name: '3', value: 16 },
  { name: '4', value: 16 },
  { name: '5', value: 7 },
  { name: '6', value: 9 },
  { name: '7', value: 3 },
];

const ProfilePage: FC<Props> = () => {
  const dispatch = useAppDispatch();
  const isLoading = useSelector(getProfileIsLoading);
  const data = useSelector(getProfileData);

  useEffect(() => {
    dispatch(profileFetchData({ id: 1 }));
  }, []);

  const tgClasses = cn(styles.tg, 'primary bold');
  const mainInfoItemClasses = cn(styles.mainInfoItem, 'primary medium');
  const dateItemClasses = cn(styles.dateItem, 'tiny medium');

  const chartData = [
    { name: 'A', value: 48, color: '#16212B' },
    { name: 'B', value: 16, color: '#2C3E50' },
    { name: 'C', value: 16, color: '#5C7080' },
    { name: 'D', value: 7, color: '#8A9BA8' },
    { name: 'E', value: 9, color: '#B0BEC5' },
    { name: 'F', value: 3, color: '#CFD8DC' },
  ];

  const total = chartData.reduce((sum, entry) => sum + entry.value, 0);

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
          <div className={styles.status}>
            <h4 className={styles.statusTitle}>СТАТУС ПРОЕКТОВ</h4>
            <ul className={styles.statusList}>
              <li>Завершенные</li>
              <li>В процессе</li>
              <li>На рассмотрении</li>
              <li>Без срока</li>
              <li>Просрочены</li>
              <li>Планируемые</li>
            </ul>
            <PieChart className={styles.chart} width={200} height={200}>
              <Pie data={chartData} cx="50%" cy="50%" innerRadius={50} outerRadius={70} fill="#8884d8" dataKey="value">
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <LabelList dataKey="value" position="inside" fill="#fff" />
                <Label position="center" value={`${total} Все`} />
              </Pie>
            </PieChart>
          </div>
          <div className={styles.tasksContainer}>
            <div className={styles.tasks}>
              <h4 className={styles.tasksTitle}>задачи</h4>
              <ul>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
                <li>
                  <Checkbox label="Подготовка какой-то презентации" />
                  <span className="tiny medium">Срочно</span>
                  <img className={styles.tasksAvatar} src={data?.avatar} alt="avatar" />
                  <p>До - 10:00, 15 марта 2020</p>
                </li>
              </ul>
            </div>
          </div>
        </main>
      )}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
