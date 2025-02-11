import { Container, createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { ErrorBoundary, StoreProvider } from './providers';

import '../shared/configs/i18n/i18n';
import './styles/index.scss';

createRoot(document.getElementById('root') as Container).render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <App />
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
);
