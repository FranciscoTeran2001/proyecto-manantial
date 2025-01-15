const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

let browser, page;

Given('iniciando pagina', async function () {
  // Lanzamos el navegador y navegamos a la página de login
  browser = await puppeteer.launch({ headless: false });
  page = await browser.newPage();
  await page.goto('http://192.168.178.1:3001/');
});

When('ingreso credenciales no registradas', async function () {
  // Ingresamos las credenciales de un usuario no registrado
  await page.type('input[name="username"]', 'usuario_no_registrado');
  await page.type('input[name="password"]', 'contraseña_incorrecta');
});

When('clic en el botón de iniciar sesión', async function () {
  // Hacemos clic en el botón de login
  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(5000); 
});

Then('debería ver un mensaje de error indicando "Wrong username"', async function () {
    // Espera a que el mensaje de error sea visible en el DOM
    const errorMessage = await page.$('body'); // Comienza buscando en el cuerpo de la página
  
    // Verifica si el mensaje "Wrong username" está presente
    const text = await errorMessage.evaluate(el => el.textContent.trim());
  
    if (text.includes('Wrong username')) {
      console.log('Mensaje de error mostrado correctamente');
    } else {
      throw new Error('El mensaje de error es incorrecto o no aparece');
    }
  
    await browser.close();
  });
  