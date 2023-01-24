import { LOCALE_STORAGE_USER_KEY } from '../../../src/shared/consts/localeStorage';
import { User } from '../../../src/entities/user';
import { selectByTestid } from '../../helpers/selectByTestid';

export const login = (username = 'testuser', password = '123') =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/login`,
      body: {
        username,
        password,
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(
        LOCALE_STORAGE_USER_KEY,
        JSON.stringify(body),
      );
      return body;
    });

export const getByTestid = (testId: string) => cy.get(selectByTestid(testId));

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(username?: string, password?: string): Chainable<User>;
      getByTestid(testId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
