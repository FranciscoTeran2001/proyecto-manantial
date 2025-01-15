const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

let browser;
let page;

Given('Pagina de usuarios registrados', async function () {
    browser = await puppeteer.launch({ headless: false }); // headless: false para ver el navegador
    page = await browser.newPage();
    
    await page.goto('http://localhost:3001/'); // URL de la página de inicio de sesión
    
    // Ingresar las credenciales
    await page.type('input[name="username"]', 'michu');
 
    await page.type('input[name="password"]', '123');  
    // Realizar múltiples clics en el botón de submit
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
    await page.click('button[type="submit"]');
  
    await page.waitForNavigation();
    // Esperar a que la página se navegue después del primer clic (si es necesario)

});
  
When('Clic en agregar usuario', async function () {
   
    await page.waitForNavigation();
    await page.click('#addOwnerButton');
});

When('llenar datos', async function () {
// Asegúrate de que los campos estén disponibles y sean interactuables antes de escribir en ellos
await page.waitForSelector('#ownerName');
await page.type('#ownerName', 'John');
await page.type('#ownerLastName', 'Doe');
await page.type('#ownerCard', '1729033605');
await page.type('#ownerEmail', 'jhon@hotmail.com');  // Corrección
await page.type('#ownerTelephone', '0984470587');
await page.type('#ownerUserName', 'jhon1');
await page.type('#ownerPassword', '12345');
await page.type('#ownerNumberHouse', '101');



});

When('debería verse Owner created successfully', async function () {
    const currentUrl = await page.url();
    if (currentUrl === 'http://localhost:3001/') {
      console.log('Estamos en la página correcta');
    } else {
      console.log('No estamos en la página correcta');
    }
});
