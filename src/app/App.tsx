import { FC } from 'react';

import { Header } from '../widgets/Header';
import { Sidebar } from '../widgets/Sidebar';
import { Loader, MainLayout } from '../shared/ui';
import { useTranslation } from 'react-i18next';
import { LoaderView } from '../shared/ui/Loader/Loader';

interface Props {
  className?: string;
}

const App: FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <div className="app-default-theme">
      <MainLayout>
        <Header />
        <Sidebar />

        <main>
          {t('title')}
          <Loader className="asd" />
        </main>
      </MainLayout>
    </div>
  );
};

export default App;
