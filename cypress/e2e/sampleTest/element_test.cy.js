describe('launch my app', ()=>{
    it('app testing', () => {
        cy.visit('https://www.amazon.in/ref=nav_logo')
        cy.contains('Best Sellers').click()
        cy.url().should('include', 'gp/bestsellers/?ref_=nav_cs_bestsellers')

    });

})