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
import { PieChart, Pie, Cell, Label, LabelList, BarChart, Bar } from 'recharts';
import MainCard from './MainCard/MainCard';

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
          <MainCard data={data} />
          {/* <div className={styles.status}>
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
          </div> */}
          {/* <div className={styles.tasksContainer}>
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
          </div> */}
          {/* <div className={styles.workTime}>
            <h2>55:30:41</h2>
            <BarChart
              width={300}
              height={150}
              className={styles.workTimeChart}
              data={[
                {
                  day: '05-01',
                  temperature: [-1, 10],
                },
                {
                  day: '05-02',
                  temperature: [2, 15],
                },
                {
                  day: '05-03',
                  temperature: [3, 12],
                },
                {
                  day: '05-04',
                  temperature: [4, 12],
                },
                {
                  day: '05-05',
                  temperature: [12, 16],
                },
                {
                  day: '05-06',
                  temperature: [5, 16],
                },
                {
                  day: '05-07',
                  temperature: [3, 12],
                },
              ]}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
            >
              {/* <XAxis dataKey="day" /> */}
          {/* <YAxis /> */}
          <Bar dataKey="temperature" fill="#c4c4c4" />
          {/* </BarChart> */}
          {/* <span>Работал на этой неделе</span> */}
          {/* <span>5 опозданий</span> */}
          {/* <span>0 больничных</span> */}
          {/* </div> */}
          {/* <div className={styles.docs}>
            <div className={styles.doc}></div>
            <div className={styles.doc}></div>
            <div className={styles.doc}></div>
            <div className={styles.doc}></div>
            <div className={styles.doc}></div>
            <div className={styles.doc}></div>
          </div> */}
          {/* <div className={styles.event}>
            <h3>СОБЫТИЕ</h3>
            <span></span>
            <span></span>
            <span></span>
            <span>Обсуждение проекта</span>
            <span>Согласование технических функций с разработчиками</span>
            <ul className={styles.eventList}>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
              <li className={styles.eventItem}>
                <img className={styles.avatarEvent} src={data?.avatar} alt="" />
              </li>
            </ul>
            <span>Комната Совещания</span>
          </div> */}
          {/* <div className={styles.history}>
            <h3>АКТИВНОСТЬ</h3>
            <ul className={styles.historyList}>
              <li className={styles.historyItem}>
                <img className={styles.tasksAvatar} src={data?.avatar} alt="" />
                <span>Александр Соломонов</span>
                <span>добавил</span>
                <span>NDA.docx</span>
              </li>
              <li className={styles.historyItem}>
                <img className={styles.tasksAvatar} src={data?.avatar} alt="" />
                <span>Александр Соломонов</span>
                <span>добавил</span>
                <span>NDA.docx</span>
              </li>
              <li className={styles.historyItem}>
                <img className={styles.tasksAvatar} src={data?.avatar} alt="" />
                <span>Александр Соломонов</span>
                <span>добавил</span>
                <span>NDA.docx</span>
              </li>
              <li className={styles.historyItem}>
                <img className={styles.tasksAvatar} src={data?.avatar} alt="" />
                <span>Александр Соломонов</span>
                <span>добавил</span>
                <span>NDA.docx</span>
              </li>
            </ul>
          </div> */}
        </main>
      )}
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
