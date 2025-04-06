import { resetProfile, updateProfile } from '../../support/commands/profile/profile';

let profileId: number = -1;

describe('', () => {
  beforeEach(() => {
    cy.visit('');
    const loginRes = cy.login('user', 'password');
    loginRes.then((res) => (profileId = res.id as number));
    cy.visit(`/profile/${profileId}`);
  });

  afterEach(() => {
    resetProfile(profileId);
  });

  it('update profile number', () => {
    updateProfile('+79998887766');
    cy.get('[data-testid="MainCard.NumberValue"]').contains('+79998887766').should('exist');
  });
});
