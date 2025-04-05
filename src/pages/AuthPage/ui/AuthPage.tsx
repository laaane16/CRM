import { FC } from 'react';

import AuthForm from '../../../features/AuthByUsername/ui/AuthForm';

import * as styles from './AuthPage.module.scss';
interface Props {
  className?: string;
}

const AuthPage: FC<Props> = () => {
  return (
    <main data-testid="auth-page" className={styles.layout}>
      <AuthForm />
    </main>
  );
};

export default AuthPage;
