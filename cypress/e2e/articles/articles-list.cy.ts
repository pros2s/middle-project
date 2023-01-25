describe('Articles loading', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit(`articles`);
    });
  });
  it('Articles list should exist', () => {
    cy.getByTestid('ArticleList').should('exist');
  });
  it('Counter of article items depends of view selector', () => {
    cy.getByTestid('ArticleViewSelector.big').click();
    cy.getByTestid('ArticleItem').should('have.length.greaterThan', 2);
    cy.getByTestid('ArticleViewSelector.small').click();
    cy.getByTestid('ArticleItem').should('have.length.greaterThan', 5);
  });
  it('Search articles', () => {
    const searchText = 'Python';

    cy.getByTestid('SearchArticles').type(searchText);
    cy.getByTestid('ArticleItem.Text.Paragraph').should(
      'contain.text',
      searchText,
    );
  });
  it('Filter articles by tabs', () => {
    const firstFilter = 'IT';
    const secondFilter = 'ECONOMICS';

    cy.getByTestid(`ArticleTabs.${firstFilter}`).click();
    cy.getByTestid('ArticleItem.Types.Paragraph').should(
      'contain.text',
      firstFilter,
    );
    cy.getByTestid(`ArticleTabs.${secondFilter}`).click();
    cy.getByTestid('ArticleItem.Types.Paragraph').should(
      'contain.text',
      secondFilter,
    );
  });
});
