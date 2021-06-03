import Page from "./page";
import Page from "./page";

class InventoryPage extends Page {
  // get inputUsername () { return $('#user-name') }

  open() {
    return super.open("inventory.html");
  }

  get btnAddToCartList() {
    return $$('[id*="add-to-cart"]');
  }

  get itemDescriptionList() {
    return $$(".inventory_item_desc");
  }

  get itemPriceList() {
    return $$(".inventory_item_price");
  }

  get itemNameList() {
    return $$(".inventory_item_name");
  }

  get productPageItemName() {
    return $(".inventory_details_name.large_size");
  }

  get btnMenu() {
    return $("#react-burger-menu-btn");
  }

  get menuDrawer() {
    return $(".bm-menu-wrap");
  }

  //this method takes array of elements as a parameter and returns the array of texts that these
  //elements contain

  async getItemTexts(arrayElem) {
    const itemTexts = arrayElem.map(async (elem) => await elem.getText());
    return await Promise.all(itemTexts);
  }

  //this method returns the array of descriptions on the page
  async itemDescriptionListText() {
    return await this.getItemTexts(await this.itemDescriptionList);
  }

  //this method returns the array of Add To Cart button labels
  async btnAddToCartListText() {
    return await this.getItemTexts(await this.btnAddToCartList);
  }

  async itemPriceListText() {
    return await this.getItemTexts(await this.itemPriceList);
  }

  async itemNameListText() {
    return await this.getItemTexts(await this.itemNameList);
  }
}

export default new InventoryPage();