import { LOCALE_STORAGE_USER_KEY } from '../../../src/shared/consts/localeStorage';

export const login = (username = 'testuser', password = '123') => {
  cy.request({
    method: 'POST',
    url: `http://localhost:8000/login`,
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(LOCALE_STORAGE_USER_KEY, JSON.stringify(body));
  });
};
