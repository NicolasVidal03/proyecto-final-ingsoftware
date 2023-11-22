describe("Sumador", () => {

    it("Mostrar una kata", () => {
      cy.visit("/");
      cy.get("#resultado-div").should("contain", "kata 1");
    });

    it("Crear una kata", () => {
      cy.visit("/");
      cy.get("#usuario-button").invoke('text').then((texto) => {
        if (texto == "Cambiar a Usuario") {
          cy.get("#boton-aniadir").find("input").click();
          cy.get("#nombre-kata").type("prueba kata");
          cy.get("#nombre-autor").type("autor");
          cy.get("#desc-kata").type("Descripcion de prueba");
          cy.get("#dificultad-kata").type("Basico");
          cy.get("#aniadir-kata").find("input:eq(3)").click();
          cy.get("#resultado-div").should("contain", "prueba kata");
        }
        else {
          cy.log("Estudiante no tiene permisos");
        }
      });
    });

    it("Editar una kata", () => {
      cy.visit("/");
      cy.get("#usuario-button").invoke('text').then((texto) => {
        if (texto == "Cambiar a Usuario") {
          cy.get("#contenedor-kata").find("button:eq(0)").click();
          cy.get("#editar-nombre-kata").type("editar kata");
          cy.get("#editar-nombre-autor").type("autor");
          cy.get("#editar-desc-kata").type("Descripcion de kata editada");
          cy.get("#editar-dificultad-kata").type("Avanzado");
          cy.get("#editar-kata").find("input:eq(3)").click();
          cy.get("#resultado-div").should("contain", "editar kata");
        }
        else {
          cy.log("Estudiante no tiene permisos");
        }
      });
    });

    it("Eliminar una kata", () => {
      cy.visit("/");
      cy.get("#usuario-button").invoke('text').then((texto) => {
        if (texto == "Cambiar a Usuario") {
          cy.get("#contenedor-kata").find("button:eq(1)").click();
        }
        else {
          cy.log("Estudiante no tiene permisos");
        }
      });
    });

    it("Buscar kata por nombre", () => {
      cy.visit("/");
      cy.get("#buscador").type("kata 1");
      cy.get("#buscar-por-nombre").find("input:eq(1)").click();
      cy.get("#resultado-div").should("contain", "kata 1");
    });

    it("Buscar kata por autor", () => {
      cy.visit("/");
      cy.get("#buscadorAutor").type("Cris");
      cy.get("#buscar-por-autor").find("input:eq(1)").click();
      cy.get("#resultado-div").should("contain", "Cris");
    });

    it("Buscar kata por descripcion", () => {
      cy.visit("/");
      cy.get("#buscadorDesc").type("Descripcion Cris");
      cy.get("#buscar-por-desc").find("input:eq(1)").click();
      cy.get("#resultado-div").should("contain", "Descripcion Cris");
    });

    it("Buscar kata por dificultad", () => {
      cy.visit("/");
      cy.get("#busq").select("Avanzado");
      cy.get("#resultado-div").should("contain", "Avanzado");
    });

    it("Ver detalle de la kata", () => {
      cy.visit("/");
      cy.get("#contenedor-kata").find(".detalle-button").click();
      cy.get("#caja-detalle").should("contain", "kata 1");
    });
    
    it("Estudiante no tiene permisos de añadir nueva kata", () => {
      cy.visit("/");
      cy.get("#usuario-button").invoke('text').then((texto) => {
        if (texto == "Cambiar a Docente") {
          cy.get("#boton-aniadir.hide");        
        }
        else {
          cy.log("Docente si puede añadir");
        }
      });
    });

    it("Estudiante no tiene permisos de editar una kata", () => {
      cy.visit("/");
      cy.get("#usuario-button").invoke('text').then((texto) => {
        if (texto == "Cambiar a Docente") {
          cy.get("#contenedor-kata").find(".editar-button.hide");   
        }
        else {
          cy.log("Docente si puede editar");
        }
      });
    });

      //cy.get("#contenedor-kata").find(".editar-button.hide");

});
