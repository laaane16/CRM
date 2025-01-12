import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import '../shared/configs/i18n/i18n';
import App from './App';
import './styles/index.scss';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
