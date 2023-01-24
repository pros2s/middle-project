import { LOCALE_STORAGE_USER_KEY } from '../../../src/shared/consts/localeStorage';

export const updateProfile = (
  newUsername: string,
  newName: string,
  age: string,
) => {
  cy.getByTestid('EditableProfileCard.Header.Edit').click();
  cy.getByTestid('EditableProfileCard.Card.Name').clear().type(newName);
  cy.getByTestid('EditableProfileCard.Card.Username').clear().type(newUsername);
  cy.getByTestid('EditableProfileCard.Card.Age').clear().type(age);
  cy.getByTestid('EditableProfileCard.Header.Save').click();
};

export const resetProfile = (profileId: string) =>
  cy
    .request({
      method: 'PUT',
      url: `http://localhost:8000/profile/${profileId}`,
      headers: { Authorization: 'authorization' },
      body: {
        id: '5',
        name: 'test',
        username: 'testuser',
        city: 'Amsterdam',
        currency: 'EUR',
        country: 'ARMENIA',
        age: 32,
        avatar:
          'data:image/png;base64,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',
      },
    })
    .then(({ body }) => {
      window.localStorage.setItem(
        LOCALE_STORAGE_USER_KEY,
        JSON.stringify(body),
      );
      return body;
    });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      updateProfile(
        newUsername: string,
        newName: string,
        age: string,
      ): Chainable<JQuery<HTMLElement>>;
      resetProfile(profileId: string): Chainable<JQuery<HTMLElement>>;
    }
  }
}
