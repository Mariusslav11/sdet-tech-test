import { DemoSelectors } from '../selectors/demo.selectors';
import { PopupSelectors } from '../selectors/popup.selectors';

declare global {
  namespace Cypress {
    interface Chainable {
      verifyElementVisible(selector: string): Chainable<void>;
      handleInitialPopups(): Chainable<void>;
    }
  }
}

Cypress.Commands.add('verifyElementVisible', (selector: string) => {
  cy.get(selector).should('be.visible');
});

Cypress.Commands.add('handleInitialPopups', () => {
  cy.verifyElementVisible(PopupSelectors.locationPopup);
  cy.contains(PopupSelectors.ukIcon, 'United Kingdom').click({ force: true });
  cy.verifyElementVisible(PopupSelectors.acceptCookiesButton);
  cy.get(PopupSelectors.acceptCookiesButton).click({ force: true });
});

export {}; 