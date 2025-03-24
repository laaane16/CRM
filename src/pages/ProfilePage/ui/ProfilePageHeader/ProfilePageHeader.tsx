import { FC } from 'react';
import cn from 'classnames';
import { Button, ButtonSizes, ButtonTheme, Avatar, AvatarSizes, Skeleton } from '../../../../shared/ui';

import * as styles from './ProfilePageHeader.module.scss';
import { useSelector } from 'react-redux';
import { getProfileForm, getProfileIsLoading } from '../../../../entities/Profile';

interface Props {
  className?: string;
}

const ProfilePageHeader: FC<Props> = ({ className }) => {
  const form = useSelector(getProfileForm);
  const isLoading = useSelector(getProfileIsLoading);

  const tgClasses = cn(styles.tg, 'primary bold');

  return (
    <div className={className}>
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
            <Avatar size={AvatarSizes.LARGE} avatar={form?.avatar} />
            <div className={styles.name}>
              <h2 className="alternative">{form?.name}</h2>
              <p className={tgClasses}>{form?.telegram}</p>
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
  );
};

export default ProfilePageHeader;
