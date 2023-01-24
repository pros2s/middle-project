import { getByTestid } from '../../helpers/getByTestid';

describe('Routing', () => {
  describe('For not auth users', () => {
    it('Just a main page', () => {
      cy.visit('/');
      cy.get(getByTestid('mainPage')).should('exist');
    });
    it('Redirect from profile to main page', () => {
      cy.visit('/profile/1');
      cy.get(getByTestid('mainPage')).should('exist');
    });
    it('Not found page', () => {
      cy.visit('/prodsf');
      cy.get(getByTestid('notFoundPage')).should('exist');
    });
  });

  describe('For authed users', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Profile page', () => {
      cy.visit('/profile/5');
      cy.get(getByTestid('profilePage')).should('exist');
    });
    it('Articles page', () => {
      cy.visit('/articles');
      cy.get(getByTestid('articlesPage')).should('exist');
    });
  });
});
