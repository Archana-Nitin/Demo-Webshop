import { selectDropDown } from "../utilities.js/utilities";
import {expect} from '@playwright/test'
export class navigate_Page{
    constructor(page)
    {
        this.page=page;
        this.book=page.getByRole('link',{name:'Books'});
        this.next=page.getByRole("link",{name:'Next'})
        this.openproduct=page.locator('.product-item .product-title')
        this.AddReviewbutton=page.getByRole('link',{name:'Add your review'})
        this.ReviewTitle=page.locator("#AddProductReview_Title")
        this.ReviewText=page.locator("#AddProductReview_ReviewText")
        this.rating=page.locator("#addproductrating_4")
        this.submitReview=page.getByRole("button",{name:'Submit review'})

    }
    async navigateMethod(Title,Review)
    {
        await this.book.first().click()
        await selectDropDown(this.page,"#products-orderby","Name: A to Z")
        await selectDropDown(this.page,"#products-pagesize","4")
        await expect(this.page.locator('.product-item')).toHaveCount(4);
        await this.next.click()
        await expect(this.page).toHaveURL(/pagenumber=2/);
        await expect(this.page.locator(".product-item")).toHaveCount(2);
        await this.openproduct.nth(1).click()
        await this.AddReviewbutton.click();
        await this.ReviewTitle.fill(Title)
        await this.ReviewText.fill(Review)
        await this.rating.check();
        await this.submitReview.click()
        await expect(this.page.locator('div.result')).toContainText("successfully added.");

    }
}