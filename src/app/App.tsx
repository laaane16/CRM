import { FC, lazy, useState } from 'react';

import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';
import { MainLayout } from '../shared/ui';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

const App: FC<Props> = (props) => {
  const { t, i18n } = useTranslation();

  return (
    <div className="app-default-theme">
      <MainLayout>
        <Header />
        <Sidebar />
        <main>{t('title')}</main>
      </MainLayout>
    </div>
  );
};

export default App;
