@crearEventoIncorrecto
Feature: Funcionalidad  de formulario de eventos
  Scenario: crear un evento incorrecto
    Given pagina de usuarios para eventos para validar
    When Clic boton eventos
    And no llenar
    Then no debería registrarse el evento