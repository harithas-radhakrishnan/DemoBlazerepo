export class LoginPage{
    constructor(page){
        this.page= page;
        this.loginmenu = page.locator("//a[text()='Log in']");
        this.username = page.locator('#loginusername');
        this.password = page.locator('#loginpassword');
        this.loginbtn = page.locator("//button[text()='Log in']");
    }

        async openApplication(){
        await this.page.goto(' https://www.demoblaze.com');
}
async navigateToLogin(){

    await this.loginmenu.click();
}

async login(username,password){
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginbtn.click();
}
}