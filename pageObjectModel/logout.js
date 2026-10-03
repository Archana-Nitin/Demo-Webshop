export class Logout{
    constructor(page){
        this.page=page
        this.logout=page.getByRole("link",{name:'Log out'})
    }
    async Logout()
    {
        await this.logout.click();
    }
}