context('Search', () => {
  it('should have a form', () => {
    cy.visit('https://horo.mail.ru/sonnik/');
  })
  it('should add a task',() => {
    cy.get('input').last().type('ffddewerСfdde');
    cy.contains('Подписаться').click();
    cy.get('input').last().clear();
    cy.get('input').last().type('Angel-green@mail.ru');
    cy.contains('Подписаться').click();
    cy.visit('https://horo.mail.ru/sonnik/');
    cy.get('input').last().type('ANGEL-GREEN@MAIL.RU');
    cy.contains('Подписаться').click();
    cy.visit('https://horo.mail.ru/sonnik/');
    cy.get('input').last().type('Зеленыйангел@mail.ru');
    cy.contains('Подписаться').click();
    cy.get('input').last().clear();
  })
  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })
})
