describe('hub spot page feature', ()=>{
    it('handle hub spot login test', () => {
        cy.visit('https://app.hubspot.com/login')
        cy.get('#username').type('naveenanimation30@gmail.com')
        cy.get('#password').type('naveen@g1234')
        cy.get('#loginBtn').click()
    });




}) 