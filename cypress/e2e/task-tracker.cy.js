describe("Cadastro",()=>{
    beforeEach(()=>{
        cy.visit("https://task-tracker-project-1.netlify.app/")
    })
    


    it('Cadastrar entrada', () => {
        createTask()
    });
    it('Cadastrar entrada com set reminder', () => {
        createTaskWithReminder()
    });
    it('Cadastrar e deletar task', () => {
        deleteTask()
    });
})

function createTask(){
    cy.contains("Add").click()
    cy.get("input[placeholder='Add Task']").type('ir para a academia')
    cy.get("input[placeholder='Add a Day and Time']").type('22/05/2025')
    cy.get("input[value='Save Task']").click();

}

function createTaskWithReminder(){
    cy.contains("Add").click()
    cy.get("input[placeholder='Add Task']").type('fazer compras')
    cy.get("input[placeholder='Add a Day and Time']").type('23/05/2025')
    cy.get("input[type=checkbox]").click()
    cy.get("input[value='Save Task']").click()
}

function deleteTask(){
    cy.contains("Add").click()
    cy.get("input[placeholder='Add Task']").type('ir para a faculdade')
    cy.get("input[placeholder='Add a Day and Time']").type('23/05/2025')
    cy.get("input[type=checkbox]").click()
    cy.get("input[value='Save Task']").click()
    cy.get("svg[stroke='currentColor']").click()

    cy.contains("Close").click()
}