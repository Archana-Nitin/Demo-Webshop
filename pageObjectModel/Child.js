import { selectDropDown } from "../utilities.js/utilities";
import {expect} from '@playwright/test'
export class Child{
    constructor(page)
    {
        this.page=page;
        this.footer=page.locator(".footer");
        this.facebook= page.getByRole('link',{name:'Facebook'})
    
    }
    async child()
    {
        await this.footer.scrollIntoViewIfNeeded();
        const [page1]=await Promise.all([
        this.page.waitForEvent('popup'),
        this.facebook.click()
    ]);
        await page1.waitForLoadState();
        //await expect(page1).toBeTruthy();
        await expect(page1).toHaveURL(/nopCommerce/);
        let title=await page1.title()
        console.log(title)
        await expect(page1).toHaveTitle(/Facebook/);
            await page1.close()
            await this.page.bringToFront();
            await expect(this.page).toHaveURL("https://demowebshop.tricentis.com/")

    }
}