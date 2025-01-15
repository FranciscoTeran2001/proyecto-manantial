@loginNoValido
Feature: Funcionalidad de Login
  Como usuario sin cuenta
  Quiero iniciar sesión en la aplicación
  y que no pueda ingresar

  Scenario: Inicio de sesión fallida
    Given iniciando pagina
    When ingreso credenciales no registradas
    And  clic en el botón de iniciar sesión
    And cierro la ventana emergente si aparece
    Then debería ver la página principal de la urbanización