@crearEvento
Feature: Funcionalidad  de formulario de eventos
  Scenario: crear un evento valido
    Given pagina de usuarios para eventos
    When Clic en eventos
    And llenar datos del evento
    Then debería registrarse el evento