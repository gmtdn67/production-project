export const setRate = (stars: number = 5, feedback: string = 'feedback') => {
    cy.getByTestId("StarRating." + stars).click();
    cy.getByTestId("RatingCard.Input").type(feedback);
    cy.getByTestId("RatingCard.Send").click();
}

declare global {
   namespace Cypress {
     interface Chainable {
       setRate(stars: number, feedback: string): Chainable<void>
     }
   }
 }
