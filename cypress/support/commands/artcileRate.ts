export const rateArticle = (starCount = 5, fallback = 'fallback') => {
  cy.getByTestid(`StarRaiting.${starCount}`).click();
  cy.getByTestid(`RaitingCard.Modal.Input`).type(fallback);
  cy.getByTestid('RaitingCard.Button.Accept').click();
};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      rateArticle(starCount: number, fallback: string): Chainable<void>;
    }
  }
}
