import { FC, useState } from 'react';

import * as styles from './AuthPage.module.scss';

import { Button, Input } from '../../../shared/ui';
import { Theme } from '../../../shared/ui/Button/Button';

interface Props {
  className?: string;
}

const AuthPage: FC<Props> = (props) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <main className={styles.layout}>
      <div className={styles.content}>
        <h1 className={styles.title}>LOGOTYPE</h1>
        <h2 className={`alternative ${styles.subtitle}`}>Вход</h2>
        <form className={styles.form} action="get">
          <Input className={styles.login} title="Логин" value={login} onChange={setLogin} />
          <Input className={styles.password} title="Пароль" value={password} onChange={setPassword} />
          <label className={styles.checkboxWrap}>
            Запомнить меня
            <input type="checkbox" />
          </label>
          <Button className={styles.loginBtn} theme={Theme.PRIMARY}>
            Войти
          </Button>
          <Button theme={Theme.PRIMARY}>Запомнить меня</Button>
        </form>
      </div>
    </main>
  );
};

export default AuthPage;
