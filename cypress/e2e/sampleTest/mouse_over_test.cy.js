describe('mouse over feature', ()=>{
    it('add to cart', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('.cross:nth-of-type(1)').click()
        cy.wait(3000);
        cy.get('.cart_block.block').should('be.hidden').invoke('show')
        cy.get('#button_order_cart').click()
        cy.url().should('include','controller=order')

    });

})