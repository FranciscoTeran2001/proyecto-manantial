@registrarCobroIncorrecto
Feature: Funcionalidad  de formulario de cobros con validacion
  Scenario: cobro transferido
    Given Pagina de usuarios registrados para cobros validados
    When Clic en cobros de usuarios
    And llenar datos para los cobros incorrectamente
    Then debería  no registrarse