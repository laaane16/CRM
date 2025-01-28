import { FC } from 'react';

import * as styles from './ProfilePage.module.scss';
import { DynamicModuleLoader } from '../../../shared/lib';
import { profileReducer } from '../../../entities/Profile';
import { Button, ButtonSizes, ButtonTheme } from '../../../shared/ui';

interface Props {
  className?: string;
}

const reducerList = {
  profile: profileReducer,
};

const ProfilePage: FC<Props> = () => {
  return (
    <DynamicModuleLoader reducers={reducerList}>
      <main className={styles.layout}>
        <div className={styles.header}>
          <div className={styles.avatar}>avatar</div>
          <div className={styles.name}>
            <h2>Александр Соломонов Алексеевич</h2>
            <h3>@alex_solo</h3>
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
      </main>
    </DynamicModuleLoader>
  );
};

export default ProfilePage;
