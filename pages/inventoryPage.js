const { expect } = require('@playwright/test');

class InventoryPage {
  constructor(page) {
    this.page = page;
    this.sortDropdown = '.product_sort_container';
    this.inventoryItemNames = '.inventory_item_name';
  }

  async sortByNameAsc() {
    await this.page.selectOption(this.sortDropdown, 'az');
  }

  async sortByNameDesc() {
    await this.page.selectOption(this.sortDropdown, 'za');
  }

  async getItemNames() {
    return await this.page.$$eval(this.inventoryItemNames, items => items.map(item => item.textContent));
  }

  async verifyItemsSortedByNameAsc() {
    const items = await this.getItemNames();
    const sortedItems = [...items].sort();
    expect(items).toEqual(sortedItems);
  }

  async verifyItemsSortedByNameDesc() {
    const items = await this.getItemNames();
    const sortedItems = [...items].sort().reverse();
    expect(items).toEqual(sortedItems);
  }
}

module.exports = InventoryPage;
