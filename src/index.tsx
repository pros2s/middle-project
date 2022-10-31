import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemesProvider } from 'app/providers/ThemesProvider';
import './app/styles/index.scss';

import 'shared/config/i18n/i18n';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <ThemesProvider>
          <App />
        </ThemesProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>,
  document.getElementById('root'),
);
