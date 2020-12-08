describe('snackamat', () => {
  it('renders a search button', () => {
    cy.visit('https://snackamat.se');
    const searchBtn = cy.get('.snackamat-search__bar-btn');
    expect(searchBtn).to.exist;
    searchBtn.click();

    // searchInput.click();
  });

  it('should be clickable', () => {
    const searchInput = cy.get('#input-65');
    expect(searchInput).to.exist;
    searchInput.type('Jasminris').should('have.value', 'Jasminris');
    cy.wait(500);
    cy.get('.snackamat-search__bar-btn').click();
  });

  it('should list some results', () => {
    cy.wait(500);
    const $searchResultTitles = cy.get('.snackamat-search-result__title');
    $searchResultTitles.should(($titles) => {
      expect($titles).to.have.length(2);
    });
  });

  it('should go to details page when clicked', () => {
    const result = cy.get('.snackamat-search-result__link').first();
    result.click();
  });
});
