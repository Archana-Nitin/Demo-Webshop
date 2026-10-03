export async function selectDropDown(page,locator,value)
{
    await page.locator(locator).selectOption(value)
}
export function getFirstName(firstName)
{
    return firstName+Date.now()
}

