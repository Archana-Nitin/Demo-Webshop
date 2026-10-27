import { test, expect } from '@playwright/test'
import Registration from '../../testdata/Registration.json'
import Books from '../../testdata/Books.json'
import { login } from '../../pageObjectModel/login'
import { OpenBookCat } from '../../pageObjectModel/OpenBook'

test("Open Books category", async ({ page }) => {
    //await page.goto(Registration.url)
//      //!login
//     await page.getByRole('link',{name:'Log in'}).click();
//     await page.locator("#Email").fill(Registration.email)
//     await page.locator("#Password").fill(Registration.password)
//     await page.getByRole("button",{name:'Log in'}).click();


//     await page.getByRole("link", { name: 'Books' }).first().click();
//     const products = await page.locator(".product-item");
//     const addToCartButtons = await products.locator("input.product-box-add-to-cart-button")
//     //const addToCartButtons = page.locator(".product-item input.product-box-add-to-cart-button");
//     for (let i = 0; i < Books.ProductCount; i++) {
//         await addToCartButtons.nth(i).click();
//     }
//     await page.locator("//span[text()='Shopping cart']").click();
    
//     const cartRow=await page.locator(".cart-item-row");
//     //! Product names
//     //const count=await cartRow.count()
//     const productname = await cartRow.locator(".product-name");
//     for (let i = 0; i < Books.ProductCount; i++) {
//         await expect(productname.nth(i)).toBeVisible();
//     }

//       //! Unit prices
//     const price = await cartRow.locator('span.product-unit-price');
//     for (let i = 0; i < Books.ProductCount; i++) {
//         await expect(price.nth(i)).toBeVisible();
//     }

//     //!Quantities
//     const quantity = await cartRow.locator('.qty-input');
//     for (let i = 0; i < Books.ProductCount; i++) {
//         await expect(quantity.nth(i)).toHaveCount(1)
//     }
//     //!Increase quantity
//     await cartRow.nth(0).locator('.qty-input').fill(Books.Quantity)

//     //!Click Update Cart
//     await page.locator('.update-cart-button').click();

//     //!Check the total price
//     let orderTotal=await page.locator("//span[@class='product-price order-total']").innerText();
//     console.log('Total before removal:',orderTotal);

//     //!Remove one product
//     await page.locator("//input[@name='removefromcart']").nth(2).check();

//     //!update the cart 
//     await page.getByRole('button', { name: 'Update shopping cart' }).click();
//     await page.locator("input#termsofservice").check();
//     await page.locator("button#checkout").click();
//     // await page.locator("#BillingNewAddress_City").fill(Books.City)
//     // await page.locator("#BillingNewAddress_Address1").fill(Books.Address1)
//     // await page.locator("#BillingNewAddress_Address2").fill(Books.Address2)
//     // await page.locator("#BillingNewAddress_ZipPostalCode").fill(Books.Zipcode)
//     // await page.locator("#BillingNewAddress_PhoneNumber").fill(Books.PhoneNumber)
//     // await page.locator('#BillingNewAddress_FaxNumber').fill(Books.FaxNumber)
//     await page.locator(".buttons .new-address-next-step-button").first().click({timeout:3000});
//     await page.locator("//input[@onClick='Shipping.save()']").click();
//     await page.locator('//input[@onclick="ShippingMethod.save()"]').click();
//     await page.locator('//input[@onclick="PaymentMethod.save()"]').click();
//     await page.locator('//input[@onclick="PaymentInfo.save()"]').click();


//     //! Verify price changed
//     const totalAfterRemove =Number( await page.locator('.order-total').innerText());
//     console.log('Total after removing product:', totalAfterRemove);

//     //await expect(totalAfterRemove).toBeLessThan(orderTotal)
//     await expect(totalAfterRemove).not.toBe(orderTotal);

//     //!logout
//     await page.getByRole("link",{name:'Log out'}).click();


//!Using Framework
    await page.goto(Registration.url)

    let login1=new login(page)
   await login1.login(Registration.email,Registration.password)
    
   let book=new OpenBookCat(page)
     await book.books(Books.ProductCount,Books.Quantity,Books.City,Books.Address1,Books.Address2,Books.Zipcode,Books.PhoneNumber,Books.FaxNumber)
})