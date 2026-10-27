import { expect } from '@playwright/test'
export class Products {
    constructor(page) {
        this.page = page
        this.productsearch = page.locator("input#small-searchterms")
        this.searchClick = page.locator("//input[@class='button-1 search-box-button']")

        this.product = page.locator(".product-title")
        this.productname = page.locator(".product-title a")

        this.price = page.locator("//span[@class='price actual-price']")

        this.addToCompareList = page.getByRole("button", { name: 'Add to compare list' })
        //let name=await productname.textContent();

        this.ClearList = page.getByRole('link', { name: 'Clear list' })

    }

    async PProduct(Search) {

        await this.productsearch.fill(Search)
        await this.searchClick.click();
        await expect(this.page.locator(".product-item")).toHaveCount(1)
        await expect(this.product).toBeVisible();
        await expect(this.product).toContainText("14.1-inch Laptop");
        await expect(this.price).toBeVisible();
        await expect(this.price).toHaveText("1590.00")
        await this.product.click();
        await expect(this.page.locator(".stock")).toContainText("stock");
        await this.addToCompareList.click();
        await expect(this.page.locator('.compare-products-table')).toContainText("14.1-inch Laptop")
        await this.ClearList.click();
        await expect(this.page.locator(".page-body")).toHaveText("You have no items to compare.");
    }
}