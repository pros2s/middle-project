import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'app/App';
import { ErrorBoundary } from 'app/providers/ErrorBoundary';
import { ThemesProvider } from 'app/providers/ThemesProvider';

import 'shared/config/i18n/i18n';

render(
  <BrowserRouter>
    <ErrorBoundary>
      <ThemesProvider>
        <App />
      </ThemesProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  document.getElementById('root'),
);
