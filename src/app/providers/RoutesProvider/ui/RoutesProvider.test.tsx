import { screen } from '@testing-library/react';
import {
  getAboutRoute,
  getArticlesRoute,
  getAdminRoute,
} from '@/shared/lib/routes/routes';
import { renderComponent } from '@/shared/lib/testHelpers/renderComponent';
import RoutesProvider from './RoutesProvider';
import { UserRoles } from '@/entities/user';

describe('RoutesProvider.test', () => {
  beforeEach(() => {
    const mockIntersectionObserver = jest.fn();
    mockIntersectionObserver.mockReturnValue({
      observe: () => null,
      unobserve: () => null,
      disconnect: () => null,
    });
    window.IntersectionObserver = mockIntersectionObserver;
  });

  test('just render a page', async () => {
    renderComponent(<RoutesProvider />, { route: getAboutRoute() });

    const aboutPage = await screen.findByTestId('AboutPage');
    expect(aboutPage).toBeInTheDocument();
  });

  test('redirect from private routes to main page', async () => {
    renderComponent(<RoutesProvider />, { route: getArticlesRoute() });

    const mainPage = await screen.findByTestId('mainPage');
    expect(mainPage).toBeInTheDocument();
  });

  test('open private page to auth users', async () => {
    renderComponent(<RoutesProvider />, {
      route: getArticlesRoute(),
      preloadedState: { user: { authData: { id: '1' } } },
    });

    const articlesPage = await screen.findByTestId('articlesPage');
    expect(articlesPage).toBeInTheDocument();
  });

  test('forbidden page for users without specified roles', async () => {
    renderComponent(<RoutesProvider />, {
      route: getAdminRoute(),
      preloadedState: { user: { authData: { id: '1' } } },
    });

    const forbiddenPage = await screen.findByTestId('forbiddenPage');
    expect(forbiddenPage).toBeInTheDocument();
  });

  test('open specified pages for users with specified roles', async () => {
    renderComponent(<RoutesProvider />, {
      route: getAdminRoute(),
      preloadedState: {
        user: { authData: { id: '1', roles: [UserRoles.ADMIN] } },
      },
    });

    const adminPanelPage = await screen.findByTestId('adminPanelPage');
    expect(adminPanelPage).toBeInTheDocument();
  });

  test('not found page', async () => {
    renderComponent(<RoutesProvider />, {
      route: '/lsdkfj',
      preloadedState: {
        user: { authData: { id: '1', roles: [UserRoles.ADMIN] } },
      },
    });

    const notFoundPage = await screen.findByTestId('notFoundPage');
    expect(notFoundPage).toBeInTheDocument();
  });
});
