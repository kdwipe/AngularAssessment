import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Given("Open application homepage", () => {
    cy.visit("/");
    cy.get(".form-title").should('have.text',
        "Personal Details"
      );
  });
  
  Then("Verify form and inputs", () => {
    cy.get('#fullName').should('be.visible');
    cy.get('#cellphone').should('be.visible');
    cy.get('#email').should('be.visible');
    cy.get('#address').should('be.visible');
    cy.get('.btn-primary[disabled]').contains('Next').should('be.visible');    
  });

  When("Complete Full Name {string} inputs", (fullName:string) => {
    cy.get('#fullName').type(fullName);
  });

  Then("Verify Full Name", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Complete Cellphone {string} inputs", (cell:string) => {
    cy.get('#cellphone').type(cell);
  });

  Then("Verify Cellphone", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Complete Email {string} inputs", (email:string) => {
    cy.get('#email').type(email);
  });

  Then("Verify Email", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Complete Physical Address {string} inputs", (padress:string) => {
    cy.get('#address').type(padress);
  });

  Then("Verify Physical Address", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Verify Next button status", () => {
    cy.get('.btn-primary');
    cy.get('.error').should('be.hidden');
  });

  Then("Click Next button", () => {
    cy.get('.btn-primary').click();
  });

  When("Salary Information page open", () => {
    cy.get(".form-title").should('have.text',
        "Salary Information"
      );
  });
  
  Then("Verify SI form elements and inputs", () => {
    cy.get('#grossIncome').should('be.visible');
    cy.get('#netIncome').should('be.visible');
    cy.get('#expenses').should('be.visible');
    cy.get('.btn-primary[disabled]').contains('Next').should('be.visible');    
  });

  When("Complete Gross Income {string} inputs", (grossIncome:string) => {
    cy.get('#grossIncome').type(grossIncome);
  });

  Then("Verify Gross Income", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Complete Net Income {string} inputs", (netIncome:string) => {
    cy.get('#netIncome').type(netIncome);
  });

  Then("Verify Net Income", () => {
    cy.get('.error').should('be.hidden');
  });

  When("Complete Expenses Income {string} inputs", (expensesIncome:string) => {
    cy.get('#expenses').type(expensesIncome);
  });

  Then("Verify Expenses Income", () => {
    cy.get('.error').should('be.hidden');
  });

  Then("Verify Next button status is blue", () => {
    cy.get('.btn-primary');
    cy.get('.error').should('be.hidden');
  });

  When("Click on Next button", () => {
    cy.get('.btn-primary').click();
  });
  
  Then("Application status page open", () => {
    cy.get(".form-title").should('have.text',
        "Application status"
      );
  });

  Then("Result status {string}", (rezstatus:string) => {
    cy.get(".form-card h2").should('have.text',
        rezstatus
      );
  });