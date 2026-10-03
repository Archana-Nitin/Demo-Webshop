import { test, expect } from '@playwright/test'
import Registration from '../../testdata/Registration.json'
import { selectDropDown } from '../../utilities.js/utilities';
import Navigate from "../../testdata/Navigate.json"
import { navigate_Page } from '../../pageObjectModel/NavigatePage';
import { register } from 'node:module';
import { login } from '../../pageObjectModel/login';
import { Logout } from '../../pageObjectModel/logout';

//!Using json

test("Navigate", async ({ page }) => {
    // await page.goto(Registration.url)
    //  //!login
    //  await page.getByRole('link',{name:'Log in'}).click();
    // await page.locator("#Email").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.getByRole("button",{name:'Log in'}).click();

    // await page.getByRole('link',{name:'Books'}).first().click();
    // await page.locator("#products-orderby").selectOption("Name: A to Z");
    // await page.locator("#products-pagesize").selectOption("4");
    // await expect(page.locator('.product-item')).toHaveCount(4);
    // await page.getByRole("link",{name:'Next'}).click();
    // await expect(page).toHaveURL(/pagenumber=2/);

    // await expect(page.locator(".product-item")).toHaveCount(2);
    // await page.locator('.product-item .product-title').nth(1).click();
    // await page.getByRole('link',{name:'Add your review'}).click();

    // await page.locator("#AddProductReview_Title").fill(Registration.Title);
    // await page.locator("#AddProductReview_ReviewText").fill(Registration.Review);
    // await page.locator("#addproductrating_4").check();
    // await page.getByRole("button",{name:'Submit review'}).click();
    // await expect(page.locator('div.result')).toContainText("successfully added.");

    // //!logout
    // await page.getByRole("link",{name:'Log out'}).click();


    //!Using Utilities

    // await page.goto(Registration.url)
    //  //!login
    //  await page.getByRole('link',{name:'Log in'}).click();
    // await page.locator("#Email").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.getByRole("button",{name:'Log in'}).click();

    // await page.getByRole('link',{name:'Books'}).first().click();

    // await page.selectDropDown(page,"#products-orderby","Name: A to Z")
    // //await page.locator("#products-orderby").selectOption("Name: A to Z");

    // await page.selectDropDown(page,"#products-pagesize","4")
    // //await page.locator("#products-pagesize").selectOption("4");

    // await expect(page.locator('.product-item')).toHaveCount(4);
    // await page.getByRole("link",{name:'Next'}).click();
    // await expect(page).toHaveURL(/pagenumber=2/);

    // await expect(page.locator(".product-item")).toHaveCount(2);
    // await page.locator('.product-item .product-title').nth(1).click();
    // await page.getByRole('link',{name:'Add your review'}).click();

    // await page.locator("#AddProductReview_Title").fill(Navigate.Title);
    // await page.locator("#AddProductReview_ReviewText").fill(Navigate.Review);
    // await page.locator("#addproductrating_4").check();
    // await page.getByRole("button",{name:'Submit review'}).click();
    // await expect(page.locator('div.result')).toContainText("successfully added.");

    // //!logout
    // await page.getByRole("link",{name:'Log out'}).click();

    //!POM 
    await page.goto(Registration.url)
    const logButton=new login(page)
    await logButton.login(Registration.email,Registration.password)
     
    let pageNavigate=new navigate_Page(page)
    await pageNavigate.navigateMethod(Navigate.Title,Navigate.Review)
   

    //!Logout
    let logoutButton=new Logout(page)
    await logoutButton.Logout();


})