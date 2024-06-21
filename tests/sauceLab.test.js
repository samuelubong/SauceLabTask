const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/loginPage');
const InventoryPage = require('../pages/inventoryPage');
const credentials = require('../fixtures/credentials.json');

test.describe('Inventory Sorting', () => {
  let page;
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ browser }) => {
    page = await browser.newPage();
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    
    await loginPage.launchURL();
    await loginPage.login(credentials.login.validdataset.username, credentials.login.validdataset.password);
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });



  test('should sort items by name (A -> Z)', async () => {
    await inventoryPage.sortByNameAsc();
    await inventoryPage.verifyItemsSortedByNameAsc();
  });

  test('should sort items by name (Z -> A)', async () => {
    await inventoryPage.sortByNameDesc();
    await inventoryPage.verifyItemsSortedByNameDesc();
  });
});
