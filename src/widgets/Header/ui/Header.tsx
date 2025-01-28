import { FC } from 'react';

import { Button, Tooltip } from '../../../shared/ui';

import * as styles from './Header.module.scss';
import { Sizes, Theme } from '../../../shared/ui/Button/Button';
import { useAppDispatch } from '../../../shared/lib/hooks/useAppDispatch';
import { userActions } from '../../../entities/User';
import { useNavigate } from 'react-router-dom';
import { AppPaths, AppRoutes } from '../../../shared/lib/router/routes';

interface Props {
  className?: string;
}

const Header: FC<Props> = (props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(userActions.logout());
    console.log(123);
    navigate(AppPaths[AppRoutes.LOGIN]);
    console.log(456);
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Люди</h1>
      <Button size={Sizes.SMALL}>Добавить</Button>
      <Button size={Sizes.SMALL}>Запросить сотрудника</Button>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
      <span
        style={{ border: '1px solid black', borderRadius: '50%', width: '15px', height: '15px', display: 'block' }}
      ></span>
      <Button onClick={onLogoutClick} size={Sizes.SMALL}>
        Выйти
      </Button>
    </header>
  );
};

export default Header;
