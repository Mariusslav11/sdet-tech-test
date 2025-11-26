export const DemoSelectors = {
  demoButton: 'a:contains("Book a Demo")',
  firstNameInput: 'input[name="firstname"]:visible',
  lastNameInput: 'input[name="lastname"]:visible',
  phoneInput: 'input[name="phone"]:visible',
  emailInput: 'input[name="email"]:visible',
  companyInput: 'input[name="company"]',
  brightManagerCheckbox: 'label:has(span:contains("BrightManager"))',
  submitButton: 'input[type="submit"][value="Book a demo"]',
  firstNameError: '.hs_firstname .hs-error-msg',
  lastNameError: '.hs_lastname .hs-error-msg',
  phoneRangeError: '.hs_phone .hs-error-msg',
  emailFormatError: '.hs_email .hs-error-msg',
  companyError: '.hs_company .hs-error-msg',
  brightManagerError: '.hs_product_demo_type .hs-error-msg'
};
