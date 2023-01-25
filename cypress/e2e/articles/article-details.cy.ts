let articleId = '';
describe('Article details', () => {
  beforeEach(() => {
    cy.login();
    cy.createArticle().then((article) => {
      cy.visit(`articles/${article.id}`);
      articleId = article.id;
    });
  });
  afterEach(() => {
    cy.removeArticle(articleId);
  });
  it('Article details loaded', () => {
    const articleTitle = 'Test article';
    const articleSubtitle = 'Cypress is very heavy to test everything';

    cy.getByTestid('ArticleDetails').should('exist');
    cy.getByTestid('ArticleDetails.title').should('have.text', articleTitle);
    cy.getByTestid('ArticleDetails.Paragraph').should(
      'have.text',
      articleSubtitle,
    );
  });
  it('Add article comment', () => {
    const newComment = 'New comment';
    cy.getByTestid('ArticleDetails.Avatar');

    cy.addComment(newComment);
    cy.getByTestid('CommentCard.text.Paragraph').should(
      'have.text',
      newComment,
    );
    cy.getByTestid('AddComment').scrollIntoView();
  });
  it('Rate article', () => {
    const starCount = 4;

    cy.getByTestid('ArticleRaiting').scrollIntoView();
    cy.rateArticle(starCount, 'fallback');
    cy.get('[data-starselected=true]').should('have.length', starCount);
  });
});
