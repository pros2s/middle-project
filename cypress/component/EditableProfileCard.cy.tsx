import { EditableProfileCard } from '../../src/features/editableProfileCard';
import { TestComponentRender } from '../../src/shared/lib/testHelpers/renderComponent';

const USER_ID = '5';
const testOptions = {
  preloadedState: { user: { authData: { id: USER_ID } } },
};

describe('EditableProfileCard.cy.tsx', () => {
  beforeEach('playground', () => {
    cy.intercept('GET', '**/profile/*', { fixture: 'profile.json' });
    cy.mount(
      <TestComponentRender options={{ ...testOptions }}>
        <EditableProfileCard id={USER_ID} />
      </TestComponentRender>,
    );
  });
  it('Editing and then pressing cancel', () => {
    const newName = 'new name';
    const newUsername = 'new username';
    const newAge = '34';

    cy.getByTestid('EditableProfileCard.Header.Edit').click();
    cy.getByTestid('EditableProfileCard.Card.Name').clear().type(newName);
    cy.getByTestid('EditableProfileCard.Card.Username')
      .clear()
      .type(newUsername);
    cy.getByTestid('EditableProfileCard.Card.Age').clear().type(newAge);
    cy.getByTestid('EditableProfileCard.Header.Cancel').click();

    cy.getByTestid('EditableProfileCard.Card.Name').should(
      'not.have.value',
      newName,
    );
    cy.getByTestid('EditableProfileCard.Card.Username').should(
      'not.have.value',
      newUsername,
    );
    cy.getByTestid('EditableProfileCard.Card.Age').should(
      'not.have.value',
      newAge,
    );
  });
});
