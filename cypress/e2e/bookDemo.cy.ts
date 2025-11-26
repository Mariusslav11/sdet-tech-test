import { DemoSelectors } from '../selectors/demo.selectors';

describe('Bright SG Website Book a Demo - Form Validation', () => {
   beforeEach(() => {
    cy.visit('/');
    cy.handleInitialPopups();
    cy.get(DemoSelectors.demoButton).contains('Book a Demo').click({force: true});
    cy.url().should('eq', 'https://brightsg.com/product-demo/');
  });

  //For actual production level code, dont hardcode in data but use JSON for data-driven testing
  it('should navigate to Book a Demo page and fill in the form with VALID inputs', () => {

    //Excessive scroll into view to avoid issues with finding element
    cy.verifyElementVisible(DemoSelectors.firstNameInput);
    cy.get(DemoSelectors.firstNameInput).scrollIntoView().type('John');
    cy.verifyElementVisible(DemoSelectors.lastNameInput);
    cy.get(DemoSelectors.lastNameInput).scrollIntoView().type('Deery');
    cy.verifyElementVisible(DemoSelectors.phoneInput);
    cy.get(DemoSelectors.phoneInput).scrollIntoView().type('+1234567890');
    cy.verifyElementVisible(DemoSelectors.emailInput);
    cy.get(DemoSelectors.emailInput).scrollIntoView().type('asd123@gmail.com');
    cy.verifyElementVisible(DemoSelectors.companyInput);
    cy.get(DemoSelectors.companyInput).scrollIntoView().type('Company');
    cy.verifyElementVisible(DemoSelectors.brightManagerCheckbox);
    cy.get(DemoSelectors.brightManagerCheckbox).click();
    //CAPTCHA
    cy.get(DemoSelectors.submitButton).scrollIntoView({ offset: { top: -100, left: 0 } });
    cy.verifyElementVisible(DemoSelectors.submitButton);
  });

  // Invalid input tests for validation
  // For better test isolation, can seperate each field into its own it block
  it('should navigate to Book a Demo page and fill in the form with INVALID inputs with appropriate error messages', () => {
    cy.get(DemoSelectors.firstNameInput).scrollIntoView().type(' ')
    cy.get(DemoSelectors.firstNameError)
        .verifyElementVisible(DemoSelectors.firstNameError)
        .and('contain', 'Please complete this required field.');

    cy.get(DemoSelectors.lastNameInput).scrollIntoView().type(' ');
    cy.get(DemoSelectors.lastNameError)
        .verifyElementVisible(DemoSelectors.lastNameError)
        .and('contain', 'Please complete this required field.');

    cy.get(DemoSelectors.phoneInput).scrollIntoView().type('+1');
    cy.get(DemoSelectors.phoneRangeError)
        .verifyElementVisible(DemoSelectors.phoneRangeError)
        .and('contain', 'The number you entered is not in range.');

    cy.get(DemoSelectors.emailInput).scrollIntoView().type('ssm@qcom');
    cy.get(DemoSelectors.emailFormatError)
        .verifyElementVisible(DemoSelectors.emailFormatError)
        .and('contain', 'Email must be formatted correctly.');

    cy.get(DemoSelectors.companyInput).scrollIntoView().type(' ');
    cy.get(DemoSelectors.companyError)
        .verifyElementVisible(DemoSelectors.companyError)
        .and('contain', 'Please complete this required field.');

    cy.get(DemoSelectors.brightManagerCheckbox).dblclick();
    cy.get(DemoSelectors.brightManagerError)
        .verifyElementVisible(DemoSelectors.brightManagerError)
        .and('contain', 'Please complete this required field.');
  });
});
