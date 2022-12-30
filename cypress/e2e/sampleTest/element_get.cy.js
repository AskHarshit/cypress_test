describe('check element get concept', ()=>{
    it.only('element get testing', () => {
        cy.visit('https://www.freshworks.com/')
        cy.contains('Platform').click()
        cy.url().should('include', '#')

        cy.get('.h0-80').should('be.visible').and('contain', 'software').and('have.length', 1)
    });


})