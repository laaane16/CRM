describe('non auth', () => {
  // if no auth, it should redirect to login page
  it('main page without auth', () => {
    cy.visit('/');
    // if no auth, it should redirect to login page
    cy.get('[data-testid="auth-page"]').should('exist');
  });

  it('profile page without auth', () => {
    cy.visit('/profile/1');
    // if no auth, it should redirect to login page
    cy.get('[data-testid="auth-page"]').should('exist');
  });

  it('admin page without auth', () => {
    cy.visit('/admin');
    // if no auth, it should redirect to login page
    cy.get('[data-testid="auth-page"]').should('exist');
  });
});

describe('with auth, role = user', () => {
  beforeEach(() => {
    cy.login('user', 'password');
  });
  it('main page with auth', () => {
    // login before visiting the main page

    cy.visit('/');
    // should not redirect to login page
    cy.get('[data-testid="main-page"]').should('exist');
  });

  it('profile page with auth', () => {
    it('profile page without auth', () => {
      cy.visit('/profile/1');
      // if no auth, it should redirect to login page
      cy.get('[data-testid="profile-page"]').should('exist');
    });
  });

  it('admin page without auth', () => {
    cy.visit('/admin');
    // if no auth, it should redirect to login page
    cy.get('[data-testid="forbidden-page"]').should('exist');
  });
});

describe('with auth, role = admin', () => {
  beforeEach(() => {
    cy.login('admin', 'admin');
  });
  it('main page with auth', () => {
    // login before visiting the main page

    cy.visit('/');
    // should not redirect to login page
    cy.get('[data-testid="main-page"]').should('exist');
  });

  it('profile page with auth', () => {
    it('profile page without auth', () => {
      cy.visit('/profile/1');
      // if no auth, it should redirect to login page
      cy.get('[data-testid="profile-page"]').should('exist');
    });
  });

  it('admin page without auth', () => {
    cy.visit('/admin');
    // if no auth, it should redirect to login page
    cy.get('[data-testid="admin-page"]').should('exist');
  });
});
