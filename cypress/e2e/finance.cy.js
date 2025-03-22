describe('Transações', () => {//describe servindo para falar quais funcion vamos testar

    beforeEach(()=>{//antes de executar cada / todos os testes ele acessa a página da aplicação
        cy.visit("https://devfinance-agilizei.netlify.app/#")
    })
    it('Cadastrar uma entrada', () => {
        criarTransacao("Freela",250)
        //criarTransacao("Freela do fim de semana",100)

        cy.get("tbody tr td.description").should('have.text', "Freela")
        //cy.get("tbody tr td.description").should('have.text', "Freela do fim de semana")
    });

    it('Cadastrar uma saída', () => {
        
        criarTransacao("Cinema",-20)
        cy.get("tbody tr td.description").should('have.text', "Cinema")
    });
});;

function criarTransacao(descricao,valor){
    // cy.visit("https://devfinance-agilizei.netlify.app/#")

        cy.contains("Nova Transação").click()
        cy.get('#description').type(descricao)
        cy.get('#amount').type(valor)
        cy.get('#date').type("2025-03-21")//yyyy-mm-dd
        cy.contains('button',"Salvar").click()
    
        
}