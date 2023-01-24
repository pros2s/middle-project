let profileId = '';

describe('User is visiting his profile', () => {
  beforeEach(() => {
    cy.visit('');
    cy.login().then((data) => {
      cy.visit(`profile/${data.id}`);
      profileId = data.id;
    });
  });
  afterEach(() => {
    cy.resetProfile(profileId);
  });

  it('Profile succesfully loaded', () => {
    cy.getByTestid('EditableProfileCard.Card.Name').should(
      'have.value',
      'test',
    );
  });
  it('He is editing it', () => {
    const newName = 'new name';
    const newUsername = 'new username';
    const newAge = '34';

    cy.updateProfile(newUsername, newName, newAge);
    cy.getByTestid('EditableProfileCard.Card.Name').should(
      'have.value',
      newName,
    );
    cy.getByTestid('EditableProfileCard.Card.Username').should(
      'have.value',
      newUsername,
    );
    cy.getByTestid('EditableProfileCard.Card.Age').should('have.value', newAge);
  });
});
