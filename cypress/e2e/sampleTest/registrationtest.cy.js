describe('free crm app', ()=>{
    it('registration test', () => {
        cy.visit('https://classic.freecrm.com/register/')
        cy.get('title:nth-of-type(1)').should('have.text', '\n\t\t\tFree CRM - CRM Pro for customer relationship management, sales, and support\n\t\t')
        cy.get('select#payment_plan_id')
        .select('Free Edition')
        .should('have.value', '1')

        cy.get('input[name="first_name"]').type('Harshit')
        cy.get('input[name="surname"]').type('Bhardwaj')
        cy.get('input[name="email"]').type('harshitgaur.bhardwaj@gmail.com')
        cy.get('input[name="email_confirm"]').type('harshitgaur.bhardwaj@gmail.com')
        cy.get('input[name="username"]').type('HarshAutomation')
        cy.get('input[name="password"]').type('Harsh@123')
        cy.get('input[name="passwordconfirm"]').type('Harsh@123')
        cy.get('input[name="agreeTerms"]').check()
        cy.get("button#submitButton").click()

    });
    


})