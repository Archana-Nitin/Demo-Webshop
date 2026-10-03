import { test, expect } from '@playwright/test'
import Registration from '../../testdata/Registration.json'
import { selectDropDown } from '../../utilities.js/utilities';
import { getFirstName } from '../../utilities.js/utilities';
import { RegisterPage } from '../../pageObjectModel/RegistrationPage';
import { Address } from '../../pageObjectModel/Address';

test("Registration", async ({ page }) => {
    // await page.goto("https://demowebshop.tricentis.com/");
    // await page.locator(".ico-register").click();
    // await page.locator("#gender-female").click()
    // await page.getByLabel("First name:").fill("Archana");
    // await page.getByLabel("Last name:").fill("Achar");
    // const email = `john.doe.${Date.now()}@gmail.com`;
    // await page.getByLabel('Email:').fill(email);
    // //await page.getByLabel("Email:").fill("archana12@gmail.com")
    // await page.locator("#Password").fill("archana@123")
    // await page.locator("#ConfirmPassword").fill("archana@123")
    // await page.locator("#register-button").click()
    // await page.locator("#newsletter-email").first().fill("archana@gmail.com")
    // await page.locator("input#newsletter-subscribe-button").click();
    // await expect(page.locator("#newsletter-result-block")).toContainText("Thank you for signing up!");
    // await page.locator("//a[text()='Addresses']").click();
    // await page.locator("//input[@class='button-1 add-address-button']").click();
    // await page.locator("select#Address_CountryId").selectOption({ value: '41' })
    // await page.locator("//input[@value='Save']").click();



    //!reading data from json
    // await page.goto(Registration.url);
    // await page.locator(".ico-register").click();
    // await page.locator("#gender-female").click()
    // await page.getByLabel("First name:").fill(Registration.firstName);
    // await page.getByLabel("Last name:").fill(Registration.lastName);
    // // const email = `john.doe.${Date.now()}@gmail.com`;
    // // await page.getByLabel('Email:').fill(email);
    // await page.getByLabel("Email:").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.locator("#ConfirmPassword").fill(Registration.password)
    // await page.locator("#register-button").click()
    // await page.locator("#newsletter-email").first().fill(Registration.newsletter)
    // await page.locator("input#newsletter-subscribe-button").click();
    // await expect(page.locator("#newsletter-result-block")).toContainText("Thank you for signing up!");
    // await page.locator("//a[text()='Addresses']").click();
    // await page.locator("//input[@class='button-1 add-address-button']").click();
    // await page.locator("#Address_FirstName").fill("Archana")
    // await page.locator("#Address_LastName").fill("Achar")
    // await page.locator("#Address_Email").fill("archana3@gmail.com")
    // await page.locator("#Address_Company").fill("Company")
    // await page.locator("select#Address_CountryId").selectOption({ value: '41' })
    // await page.locator("#Address_City").fill("Udupi")
    // await page.locator("#Address_Address1").fill("address1");
    // await page.locator("#Address_Address2").fill("address2");
    // await page.locator("#Address_ZipPostalCode").fill("1234");
    // await page.locator("#Address_PhoneNumber").fill("9876543210");
    // await page.locator("#Address_FaxNumber").fill("234567890");
    // await page.locator("//input[@value='Save']").click();

    //!Reading from utility file 
    // await page.goto(Registration.url);
    // await page.locator(".ico-register").click();
    // await page.locator("#gender-female").click()
    // await page.getByLabel("First name:").fill(Registration.firstName);
    // // const fn=getFirstName(Registration.firstName)
    // // await page.getByLabel("First name:").fill(fn);
    // await page.getByLabel("Last name:").fill(Registration.lastName);
    // // const email = `john.doe.${Date.now()}@gmail.com`;
    // // await page.getByLabel('Email:').fill(email);
    
    // // const fn=getFirstName(Registration.firstName)
    // // await page.getByLabel("First name:").fill(fn);
    
    // await page.getByLabel("Email:").fill(Registration.email)
    // await page.locator("#Password").fill(Registration.password)
    // await page.locator("#ConfirmPassword").fill(Registration.password)
    // await page.locator("#register-button").click()

    // await page.locator("#newsletter-email").first().fill(Registration.newsletter)
    // await page.locator("input#newsletter-subscribe-button").click();
    // await expect(page.locator("#newsletter-result-block")).toContainText("Thank you for signing up!");
    // await page.locator("//a[text()='Addresses']").click();
    // await page.locator("//input[@class='button-1 add-address-button']").click();
    // await page.locator("#Address_FirstName").fill(Registration.firstName)
    // await page.locator("#Address_LastName").fill(Registration.lastName)
    // await page.locator("#Address_Email").fill(Registration.email)
    // await page.locator("#Address_Company").fill(Registration.Company)

    // await selectDropDown(page,"select#Address_CountryId","41")
    
    // await page.locator("#Address_City").fill(Registration.City)
    // await page.locator("#Address_Address1").fill(Registration.Address1);
    // await page.locator("#Address_Address2").fill(Registration.Address2);
    // await page.locator("#Address_ZipPostalCode").fill(Registration.Zipcode);
    // await page.locator("#Address_PhoneNumber").fill(Registration.PhoneNumber);
    // await page.locator("#Address_FaxNumber").fill(Registration.FaxNumber);
    // await page.locator("//input[@value='Save']").click();
    
    // //!logout
    // await page.getByRole("link",{name:'Log out'}).click();
    

    //!reading from pom
    await page.goto(Registration.url)
    let registrationPage=new RegisterPage(page)
    const fn=getFirstName(Registration.firstName)
    const email = `john.doe.${Date.now()}@gmail.com`;
    //await page.getByLabel('Email:').fill(email);
    await registrationPage.Register(fn,Registration.lastName,email,Registration.password,Registration.password,Registration.newsletter,Registration.assetion)

    let address=new Address(page)
    await address.Address(fn,Registration.lastName,Registration.email,Registration.Company,Registration.City,Registration.Address1,Registration.Address2,Registration.Zipcode,Registration.PhoneNumber,Registration.FaxNumber)
})