import { test, expect } from '@playwright/test'
import Registration from "../../testdata/Registration.json"
import { login } from '../../pageObjectModel/login';
import { Logout } from '../../pageObjectModel/logout';
import { Child } from '../../pageObjectModel/Child';


test("Navigate", async ({ page }) => {

    // const context=await  browser.newContext();
    // const page=await context.newPage();
    // await page.goto(Registration.url)
    // //!login
    //  await page.getByRole('link',{name:'Log in'}).click();
    // await page.locator("#Email").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.getByRole("button",{name:'Log in'}).click();
    
    // await page.locator(".footer").scrollIntoViewIfNeeded();
    // const [page1]=await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.getByRole('link',{name:'Facebook'}).click()
    // ]);
    // await page1.waitForLoadState();
    // await expect(page1).toBeTruthy();
    // await expect(page1).toHaveURL(/nopCommerce/);
    // let title=await page1.title()
    // console.log(title)
    // await expect(page1).toHaveTitle(/Facebook/);
    // await page1.close()
    // await page.bringToFront();
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
       

    // //!logout
    // await page.getByRole("link",{name:'Log out'}).click();


    // const context=await  browser.newContext();
    // const page=await context.newPage();
    // await page.goto(Registration.url)
    // //!login
    //  await page.getByRole('link',{name:'Log in'}).click();
    // await page.locator("#Email").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.getByRole("button",{name:'Log in'}).click();
    
    // await page.locator(".footer").scrollIntoViewIfNeeded();
    // const [page1]=await Promise.all([
    //     page.waitForEvent('popup'),
    //     page.getByRole('link',{name:'Facebook'}).click()
    // ]);
    // await page1.waitForLoadState();
    // await expect(page1).toBeTruthy();
    // await expect(page1).toHaveURL(/nopCommerce/);
    // let title=await page1.title()
    // console.log(title)
    // await expect(page1).toHaveTitle(/Facebook/);
    // await page1.close()
    // await page.bringToFront();
    // await expect(page).toHaveURL("https://demowebshop.tricentis.com/")
       

    // //!logout
    // await page.getByRole("link",{name:'Log out'}).click();

    //!POM
    await page.goto(Registration.url);
    const login1=new login(page)
    await login1.login(Registration.email,Registration.password);

    let child1=new Child(page)
    await child1.child()

    let logout=new Logout(page)
    await logout.Logout();


})