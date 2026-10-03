import { selectDropDown } from "../utilities.js/utilities";
import {expect} from '@playwright/test'
export class login{
    constructor(page){
        this.page=page;
        this.loginLink=page.getByRole('link',{name:'Log in'});
        this.email=page.locator("#Email")
        this.password=page.locator("#Password")
        this.button=page.getByRole("button",{name:'Log in'})

    }
    async login(email,password)
    {
        await this.loginLink.click();
        await this.email.fill(email);
        await this.password.fill(password);
        await this.button.click()
    }
}
