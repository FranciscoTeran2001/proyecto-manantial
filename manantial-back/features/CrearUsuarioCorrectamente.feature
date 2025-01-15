@CreaUsuarioValido
Feature: Funcionalidad de la creacion del usuario 
   validad que se pueda crear un usuario datos correctos

  Scenario: creacion exitoso
    Given Pagina de usuarios registrados
    When Clic en agregar usuario
    And llenar datos
    Then debería verse Owner created successfully