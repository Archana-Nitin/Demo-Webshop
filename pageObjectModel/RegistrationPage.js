import { selectDropDown } from "../utilities.js/utilities";
import {expect} from '@playwright/test'
export class RegisterPage{
    constructor(page){
        this.page=page;
        this.register=page.locator(".ico-register");
        this.gender=page.locator("#gender-female")
        this.firstName=page.getByLabel("First name:")
        this.lastName=page.getByLabel("Last name:")
        this.email=page.getByLabel("Email:");
        this.password=page.locator("#Password")
        this.confirmpassword=page.locator("#ConfirmPassword")
        this.registerbutton=page.locator("#register-button")
        this.newsletter=page.locator("#newsletter-email")
        this.subscribe=page.locator("input#newsletter-subscribe-button")
        this.assertion=expect(page.locator("#newsletter-result-block"))
    }
    async Register(fn,lastName,email,password,confirmpassword,newsletter,assertion){
    await this.register.click();
    await this.gender.click();
    await this.firstName.fill(fn);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.password.fill(password);
    await this.confirmpassword.fill(confirmpassword)
    await this.registerbutton.click()
    await this.newsletter.fill(newsletter);
    await this.subscribe.click()
    await this.assertion.toContainText(assertion)
    }
}