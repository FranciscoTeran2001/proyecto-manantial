@registrarCobro
Feature: Funcionalidad  de formulario de cobros
  Scenario: cobro transferido
    Given Pagina de usuarios registrados para cobros
    When Clic en cobros
    And llenar datos para los cobros
    Then debería registrarse el cobro