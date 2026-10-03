import { selectDropDown } from "../utilities.js/utilities";
import { expect } from '@playwright/test'
export class Address {

    constructor(page) {

        this.page = page;
        this.addresslink = page.locator("//a[text()='Addresses']")
        this.addbutton = page.locator("//input[@class='button-1 add-address-button']")
        this.firstname = page.locator("#Address_FirstName")
        this.lastname = page.locator("#Address_LastName")
        this.addEmail = page.locator("#Address_Email")
        this.addcomp = page.locator("#Address_Company")
        //this.country = selectDropDown(page, "select#Address_CountryId", "41")
        this.city = page.locator("#Address_City")
        this.address1 = page.locator("#Address_Address1")
        this.addresss2 =page.locator("#Address_Address2")
        this.Zipcode = page.locator("#Address_ZipPostalCode")
        this.phonenumber = page.locator("#Address_PhoneNumber")
        this.faxnumber = page.locator("#Address_FaxNumber")
        this.save = page.locator("//input[@value='Save']")

    }
    async Address(firstname,lastname,addEmail,addcomp,city,address1,addresss2,Zipcode,phonenumber,faxnumber)
    {
        await this.addresslink.click()
        await this.addbutton.click()
       await this.firstname.fill(firstname)
        await this.lastname .fill(lastname)
        await this.addEmail .fill(addEmail)
        await this.addcomp .fill(addcomp)
       //await  this.country.selectDropDown()
       await selectDropDown(this.page,'//select[@name="Address.CountryId"]',"India")
       //await selectDropDown(this.page,this.country,41)
        await this.city.fill(city)
        await this.address1.fill(address1);
        await this.addresss2.fill(addresss2);
        await this.Zipcode.fill(Zipcode);
        await this.phonenumber.fill(phonenumber);
        await this.faxnumber.fill(faxnumber);
        await this.save.click();
    }
}

