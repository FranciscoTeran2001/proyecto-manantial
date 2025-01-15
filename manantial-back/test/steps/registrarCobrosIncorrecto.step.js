const { Given, When, Then } = require('@cucumber/cucumber');
const puppeteer = require('puppeteer');

let browser;
let page;

Given('Pagina de usuarios registrados para cobros validados', async function () {
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

When('Clic en cobros de usuarios', async function () {
    // Hacer clic en el botón para abrir el formulario
    await page.waitForNavigation();
    await page.click('a[href="/PaymentControllerAdmin"]');
    await page.click('#addPayment');

});

When('llenar datos para los cobros incorrectamente', async function () {
    // Asegúrate de que los campos estén disponibles antes de interactuar
    
    await page.waitForSelector('#paymentPayCode');
    await page.type('#paymentPayCode', '12345');
    await page.type('#mui-24', '2025-03-12');
    await page.type('#paymentValue', '500'); // Monto del pago
});

When('debería  no registrarse', async function () {
    await page.click('#registrarPago');
});
