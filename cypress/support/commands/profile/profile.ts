export const updateProfile = (newNumberValue: string) => {
  cy.get('[data-testid="main-card"]').should('exist');
  cy.get('[data-testid="MainCard.EditorModeDropdown"]').click();
  cy.get('[data-testid="MainCard.onEditorMode"]').click();
  cy.get('[data-testid="MainCard.InputNumber"]').clear().type(newNumberValue);
  cy.get('[data-testid="MainCard.SaveButton"]').click();
};

export const resetProfile = (profileId: number) => {
  cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profiles/${profileId}`,
    headers: {
      Authorization: `token`,
    },
    body: {
      id: -1,
      userId: -1,
      name: 'Станислав Попов',
      telegram: '@stanislav_popov',
      age: 34,
      number: '+79876543210',
      mail: 'stanislav.popov@mail.com',
      post: {
        main: 'Системный администратор',
        extra: '',
      },
      address: 'Москва, ул. Ленина, д. 5',
      avatar: '',
      createdAt: '10.05.2019',
      updatedAt: '12.01.2024',
    },
  });
};
