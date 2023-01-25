describe('Routing', () => {
  describe('For not auth users', () => {
    it('Just a main page', () => {
      cy.visit('/');
      cy.getByTestid('mainPage').should('exist');
    });
    it('Redirect from profile to main page', () => {
      cy.visit('/profile/1');
      cy.getByTestid('mainPage').should('exist');
    });
    it('Not found page', () => {
      cy.visit('/prodsf');
      cy.getByTestid('notFoundPage').should('exist');
    });
  });

  describe('For authed users', () => {
    beforeEach(() => {
      cy.login();
    });

    it('Profile page', () => {
      cy.visit('/profile/5');
      cy.getByTestid('profilePage').should('exist');
    });
    it('Articles page', () => {
      cy.visit('/articles');
      cy.getByTestid('articlesPage').should('exist');
    });
  });
});
