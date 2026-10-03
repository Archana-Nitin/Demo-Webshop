import {test, expect} from '@playwright/test'
import Registration from "../../testdata/Registration.json"
import Product from '../../testdata/Product.json'

test("Product Search",async({page})=>
{
    await page.goto(Registration.url);
    //!login
    await page.getByRole('link',{name:'Log in'}).click();
    await page.locator("#Email").fill(Registration.email)
    await page.locator("#Password").fill(Registration.password)
    await page.getByRole("button",{name:'Log in'}).click();

    await page.locator("input#small-searchterms").fill(Product.Search)
    await page.locator("//input[@class='button-1 search-box-button']").click();
    await expect(page.locator(".product-item")).toHaveCount(1)
    let product=await page.locator(".product-title")
    let productname=await page.locator(".product-title a")
    await expect(product).toBeVisible();
    await expect(product).toContainText("14.1-inch Laptop");
    let price=page.locator("//span[@class='price actual-price']")
    await expect(price).toBeVisible();
    await expect(price).toHaveText("1590.00")
    await product.click();
    await expect(page.locator(".stock")).toContainText("stock");
    await page.getByRole("button",{name:'Add to compare list'}).click();
    //let name=await productname.textContent();
    await expect(page.locator('.compare-products-table')).toContainText("14.1-inch Laptop")
    await page.getByRole('link',{name:'Clear list'}).click();
    await expect(page.locator(".page-body")).toHaveText("You have no items to compare.");

    //!logout
    await page.getByRole("link",{name:'Log out'}).click();

})