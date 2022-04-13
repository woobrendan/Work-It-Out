
describe("Navgiation", () => {
  beforeEach(() => {
    // cy.request("GET", "/api/debug/reset");
    cy.visit("/");
  })
  it("Should visit root", () => {
    cy.visit("/");
  });

  it("Should visit Muscle Groups Page", () => {
    cy.get("Muscle Groups")
      .click();
    cy.contains("Lower Body")
  })


})