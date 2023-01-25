import { Article } from '../../../src/entities/article';

const defaultArticle = {
  blocks: [],
  userId: '5',
  title: 'Test article',
  subtitle: 'Cypress is very heavy to test everything',
  imgBig: 'https://cdn.geekboots.com/geek/javascript-meta-1652702081069.jpg',
  imgSmall:
    'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  views: 1022,
  createdAt: '26.02.2022',
  type: ['SCIENCE'],
};

export const createArticle = (article?: Article) =>
  cy
    .request({
      method: 'POST',
      url: `http://localhost:8000/articles`,
      headers: { Authorization: 'authorization' },
      body: article ?? defaultArticle,
    })
    .then((responce) => responce.body);

export const removeArticle = (artilcleId: string) =>
  cy.request({
    method: 'DELETE',
    url: `http://localhost:8000/articles/${artilcleId}`,
    headers: { Authorization: 'authorization' },
  });

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      createArticle(article?: Article): Chainable<Article>;
      removeArticle(artilcleId: string): Chainable<void>;
    }
  }
}
