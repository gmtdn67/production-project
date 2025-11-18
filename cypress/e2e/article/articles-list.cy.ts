describe('Пользователь заходит на страницу со списком статей', () => {
    beforeEach( () => {
    cy.visit('');
    cy.login().then( (data) => {
      cy.visit(`articles`)
    })
  })
  it('Список статей загрузился', () => {
    cy.getByTestId("ArticleList").should('exist')
    cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 3)
  })

  it('Пользователь выполнил поисковый запрос', () => {

    const query = 'Python'

    cy.getByTestId("SearchInput").type(query)
    cy.getByTestId("ArticleList").should('exist')
    cy.getByTestId('ArticleListItem.title.Paragraph').should('contain.text', query)
  })
})