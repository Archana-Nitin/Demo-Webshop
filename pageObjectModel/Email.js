import { selectDropDown } from "../utilities.js/utilities";
import { expect } from "@playwright/test";
export class Email{
    constructor(page)
    {
        this.page=page;
        this.search=page.locator("input#small-searchterms")
        this.submit=page.locator("//input[@type='submit']");
        this.detail=page.locator(".product-item .details")
        this.emailFriend=page.getByRole('button',{name:'Email a friend'})
        this.fillemail=page.locator('.friend-email')
        this.message=page.getByLabel("Personal message")
        this.sendemail=page.getByRole("button",{name:'Send email'})
        this.logout=page.getByRole("link",{name:'Log out'})
        this.search2= page.locator("#small-searchterms")
        this.searchButton=page.getByRole("button", { name: "Search" })
        this.openProduct=page.locator('.product-item .product-title')
        this.email=page.locator("#YourEmailAddress")


    }
    async emailFunction(Search,friend,Message,Search2,email)
    {
        await this.search.fill(Search)
        await this.submit.first().click();
        await this.detail.click()
        await this.emailFriend.click()
        await expect(this.page.locator(".page-title")).toBeVisible();
        await this.fillemail.fill(friend)
        await this.message.fill(Message)
        await this.sendemail.click()
        await expect(this.page.locator("div.result")).toContainText(' has been sent.');
        await this.logout.click();
        await this.search2.fill(Search2)
        await this.searchButton.click()
        await this.openProduct.first().click()
        await this.emailFriend.click();
        await this.fillemail.fill(friend)
        await this.email.fill(email)
        await this.sendemail.click()
        await expect(this.page.locator(".message-error")).toContainText('Only registered customers can use email a friend feature');


    }
}