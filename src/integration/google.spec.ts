describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://google.com');
    expect(true).to.equal(true);
  });
});
