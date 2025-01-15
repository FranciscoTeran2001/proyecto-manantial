const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

let browser, page;

Given('estoy en la página de inicio de sesión', async function () {
  // Lanzamos el navegador y navegamos a la página de login
  browser = await puppeteer.launch({ headless: false }); // headless: false para ver el navegador
  page = await browser.newPage();
  await page.goto('http://192.168.178.1:3001/'); // URL de la página de inicio de sesión
});

When('ingreso credenciales válidas', async function () {
  // Ingresamos las credenciales en los campos correspondientes
  await page.type('input[name="username"]', 'michu');
  await page.type('input[name="password"]', '123');
});

When('hago clic en el botón de iniciar sesión', async function () {
  // Hacemos clic en el botón de login
  await page.click('button[type="submit"]');
});

When('cierro la ventana emergente si aparece', async function () {
  try {
    // Si aparece una ventana emergente, intentamos cerrarla
    const closeButton = await page.$('.popup-close');
    if (closeButton) {
      await closeButton.click();
    }
  } catch (error) {
    console.log('No se encontró la ventana emergente');
  }
});

Then('debería ver la página principal de la urbanización', async function () {
  // Verificamos que la URL de la página haya cambiado a la página principal
  const url = await page.url();
  if (url.includes('/home')) {
    console.log('Login exitoso');
  }
  // Cerramos el navegador después de la prueba
  await browser.close();
});
