const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

let browser;
let page;

Given('pagina de usuarios para eventos para validar', async function () {
    browser = await puppeteer.launch({
        headless: false, // Para ver el navegador
        defaultViewport: null, // Permite que la ventana sea de tamaño máximo
        args: ['--start-maximized'], // Inicia el navegador en pantalla completa
      });
      
      page = await browser.newPage();
      
      // Acceder a la URL de la página
      await page.goto('http://localhost:3001/');
     
    // Ingresar credenciales y navegar
    await page.type('input[name="username"]', 'michu');
    await page.type('input[name="password"]', '123');  
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.waitForNavigation();
});

When('Clic boton eventos', async function () {
    // Hacer clic en el botón para abrir el formulario
    await page.waitForNavigation();
    await page.click('a[href="/EventsAdminRest"]');
    href="/AddEvents"
    await page.click('a[href="/AddEvents"]');

});

When('no llenar', async function () {
    // Asegúrate de que los campos estén disponibles antes de interactuar
    
    await page.waitForSelector('#eventId');
  await page.type('#eventId', '12345'); // Event Id


});

When('no debería registrarse el evento', async function () {
    await page.click('button[type="button"]');
});
