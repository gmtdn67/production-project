let currentArticleId: string;

describe('Пользователь заходит на страницу статьи', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit(`articles/${article.id}`);
        });
    });
    // Создали статью ---> прогнали тесты ---> удалили статью
    afterEach(() => {
        cy.removeArticle(currentArticleId);
    });
    it('Содержимое статьи загрузилось', () => {
        cy.getByTestId('ArticleDetails.Info').should('exist');
    });

    it.skip('Список рекоммендаций загрузился', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });

    it.skip('Отправка комментария', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('AddCommentForm').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1);
    });

    it('Пользователь ставит оценку статьи', () => {
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });

    it('Пользователь ставит оценку статьи (на стабах)', () => {
        cy.intercept('GET', '**/articles/*', {
            fixture: 'article-details.json',
        });
        cy.getByTestId('ArticleDetails.Info');
        cy.getByTestId('RatingCard').scrollIntoView();
        cy.setRate(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});
