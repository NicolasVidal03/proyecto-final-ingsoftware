describe("Sumador", () => {

    it("Mostrar una kata", () => {
      cy.visit("/");
      cy.get("#resultado-div").should("contain", "kata 1");
    });

    it("Crear una kata", () => {
      cy.visit("/");
      cy.get("#boton-aniadir").find("input").click();
      cy.get("#nombre-kata").type("prueba kata");
      cy.get("#nombre-autor").type("eliano");
      cy.get("#desc-kata").type("Descripcion de prueba");
      cy.get("#dificultad-kata").type("Basico");
      cy.get("#aniadir-kata").find("input:eq(3)").click();
      cy.get("#resultado-div").should("contain", "prueba kata");
    });

});
