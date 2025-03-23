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


    it('Excluir  Transação', () => {
        criarTransacao("Freela",100)
        criarTransacao("Mesada",10)

        // cy.contains(".description","Freela")//no html encontre uma classe chamada description
        //   .parent()//a partir do elemento pai dela
        //   .find("img")//encontre a imagem, que no qual é imagem de excluir
        //   .click() // clicar na imagem de excluir transação
        //    OU 
        cy.contains(".description","Freela")
            .siblings()
            .children()
        cy.get("tbody tr").should("have.length",1)//navega pela linha de tbody que é o tr e verifica que só deve haver uma linha
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