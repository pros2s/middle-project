export const addComment = (text: string) => {
  cy.getByTestid('AddComment.input').type(text);
  cy.getByTestid('AddComment.button').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      addComment(text: string): Chainable<void>;
    }
  }
}
