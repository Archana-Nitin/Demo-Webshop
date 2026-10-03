import { test, expect } from '@playwright/test'
import Registration from '../../testdata/Registration.json'
import email from '../../testdata/email.json'
import { login } from '../../pageObjectModel/login'
import { Email } from '../../pageObjectModel/Email'
import { Logout } from '../../pageObjectModel/logout'
//!Json
test("Email", async ({ page }) => {
    // await page.goto(Registration.url)
    // //  //!login
    //  await page.getByRole('link',{name:'Log in'}).click();
    // await page.locator("#Email").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.getByRole("button",{name:'Log in'}).click();

    // await page.locator("input#small-searchterms").fill(Registration.Search);
    // await page.locator("//input[@type='submit']").first().click();
    // await page.locator(".product-item .details").click();
    // await page.getByRole('button',{name:'Email a friend'}).click();

    // await expect(page.locator(".page-title")).toBeVisible();
    // await page.locator('.friend-email').fill(email.friend);
    // await page.getByLabel("Personal message").fill(email.Message);
    // await page.getByRole("button",{name:'Send email'}).click();
    // await expect(page.locator("div.result")).toContainText(' has been sent.');
    // await page.getByRole("link",{name:'Log out'}).click()

    //  await page.locator("#small-searchterms").fill(email.Search2);
    // await page.getByRole("button", { name: "Search" }).click();
    // await page.locator('.product-item .product-title').first().click();

    // await page.getByRole('button',{name:'Email a friend'}).click();
    // await page.locator('.friend-email').fill(email.friend);
    // await page.locator("#YourEmailAddress").fill(Registration.email)
    // await page.getByRole("button",{name:'Send email'}).click();
    // await expect(page.locator(".message-error")).toContainText('Only registered customers can use email a friend feature');

    // !logout
    // await page.getByRole("link",{name:'Log out'}).click();

    //!Using POM
    await page.goto(Registration.url)

     //!login
    let loginPage=new login(page)
    await loginPage.login(Registration.email,Registration.password)
    
    let email1=new Email(page)
    await email1.emailFunction(Registration.Search,email.friend,email.Message,email.Search2,Registration.email,)

    //!Logout

    let logout1=new Logout(page)
        await logout1.Logout();
})