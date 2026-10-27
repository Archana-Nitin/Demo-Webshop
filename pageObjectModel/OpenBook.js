import {expect} from '@playwright/test'
import { count } from 'node:console';
export class OpenBookCat {
    constructor(page) {
        this.page = page;
        this.bookLink =page. getByRole("link", { name: 'Books'}).first()
       
        this.addToCartButtons = page.locator(".product-item input.product-box-add-to-cart-button")
        this.cartLink = page.locator("//span[text()='Shopping cart']")
        this.cartRow = page.locator(".cart-item-row")
        //this.productName=page.locator(".cart-item-row .product-name");
        this.quantity = page.locator('.cart-item-row .qty-input').first()
        this.updateQuantity = page.locator('.update-cart-button')
        this.OrderTotal = page.locator("//span[@class='product-price order-total']")
        this.RemoveProduct = page.locator("//input[@name='removefromcart']").nth(2)

        this.updateCart = page.getByRole('button', { name: 'Update shopping cart' })
        this.terms = page.locator("input#termsofservice")
        this.checkout = page.locator("button#checkout")
        // this.city = page.locator("#BillingNewAddress_City")
        // this.Address1 = page.locator("#BillingNewAddress_Address1")
        // this.Address2 = page.locator("#BillingNewAddress_Address2")
        // this.postalCode = page.locator("#BillingNewAddress_ZipPostalCode")
        // this.PhoneNumber = page.locator("#BillingNewAddress_PhoneNumber")
        // this.faxNumber = page.locator('#BillingNewAddress_FaxNumber')

        this.AddressUpdateContinue = page.locator(".buttons .new-address-next-step-button").first()
        this.shippingSave = page.locator("//input[@onClick='Shipping.save()']")
        this.shippingMethod = page.locator('//input[@onclick="ShippingMethod.save()"]')
        this.payment = page.locator('//input[@onclick="PaymentMethod.save()"]')
        this.paymentInfo = page.locator('//input[@onclick="PaymentInfo.save()"]')
    }

    async books(ProductCount, Quantity,city,address1,address2,zipcode,phonenumber,faxnumber) {
        await this.bookLink.click();
        //await this.addToCart.click();
        for (let i = 0; i < ProductCount; i++) {
            await this.addToCartButtons.nth(i).click();
        }
        await this.cartLink.click();
        const productname =  this.cartRow.locator(".product-name");
        for (let i = 0; i < ProductCount; i++) {
            await expect(productname.nth(i)).toBeVisible();
        }

        const price =  this.cartRow.locator('span.product-unit-price');
        for (let i = 0; i < ProductCount; i++) {
            await expect(price.nth(i)).toBeVisible();
        }
        const quantity = await this.cartRow.locator('.qty-input');
        for (let i = 0; i < ProductCount; i++) {
            await expect(quantity.nth(i)).toHaveCount(1);
        }
        await this.quantity.fill(Quantity)
        await this.updateQuantity.click();
        const orderTotalText = await this.OrderTotal.innerText();
    console.log("Order total:", orderTotalText);
        await this.RemoveProduct.check();
        await this.updateCart.click()
        await this.terms.check()
        await this.checkout.click()
        // await this.city.fill(city)
        // await this.Address1.fill(address1)
        // await this.Address2.fill(address2)
        // await this.postalCode.fill(zipcode)
        // await this.PhoneNumber.fill(phonenumber)
        // await this.faxNumber.fill(faxnumber)

        await this.AddressUpdateContinue.click()
        await this.shippingSave.click()
        await this.shippingMethod.click()
        await this.payment.click()
        await this.paymentInfo.click()

    }
}