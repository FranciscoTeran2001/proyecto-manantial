@CreaUsuarioNoValido
Feature: Funcionalidad de la creacion del usuario incorrecto
   validar que no se pueda crear un usuario datos correctos

  Scenario: creacion exitoso
    Given Pagina de usuarios registrados de usuarios
    When Clic en agregar usuario para registrar
    And llenar datos del usuaio
    Then debería verse que no se registro
