///<reference types = "cypress"/>


describe('visit google', () => {
    it('visit google', () => {
        
        cy.visit({
            url: 'https://www.google.com',
            method: 'GET',
          })

          cy.get('#APjFqb').type("automation step by step{Enter}")
          //cy.get('.aajZCb .lJ9FBc center .gNO89b').click()

          
    });
});