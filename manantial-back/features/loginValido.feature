@loginValido
Feature: Funcionalidad de Login
  Como usuario
  Quiero iniciar sesión en la aplicación
  Para acceder a funciones de la urbanización

  Scenario: Inicio de sesión exitoso
    Given estoy en la página de inicio de sesión
    When ingreso credenciales válidas
    And hago clic en el botón de iniciar sesión
    And cierro la ventana emergente si aparece
    Then debería ver la página principal de la urbanización

