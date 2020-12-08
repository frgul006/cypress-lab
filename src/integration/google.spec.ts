describe('My First Test', () => {
  it('Does not do much!', () => {
    cy.visit('https://google.com');
    console.log('Hello');
    expect(true).to.equal(true);
  });
});
