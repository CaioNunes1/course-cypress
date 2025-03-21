describe('Transações', () => {//describe servindo para falar quais funcion vamos testar
    it('Cadastrar uma entrada', () => {
        cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains("Nova Transação").click()
        cy.get('#description').type("Freela")
        cy.get('#amount').type(250)
        cy.get('#date').type("2025-03-21")//yyyy-mm-dd
        cy.contains('button',"Salvar").click()
    
    });
});;