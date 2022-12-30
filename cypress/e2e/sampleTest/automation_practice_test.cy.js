describe('test to check reusable commands', ()=>{


    beforeEach(()=>{
        cy.visit('http://automationpractice.com/index.php')
        cy.login('harshitgaur.bhardwaj@gmail.com', 'Harshit@1234')

    })
    it('test commands', () => {
        cy.url().should('include', 'controller=my-account')
        cy.get('.myaccount-link-list li').should('have.length', 5)
    });


    


})