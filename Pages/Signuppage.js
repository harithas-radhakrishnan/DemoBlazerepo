export class SignupPage{
    constructor(page){
        this.page=page;
        this.username = page.locator('#sign-username');
        this.password = page.locator('#sign-password');
        this.signupbtn =page.locator("//button[text()='Sign up']");
        this.closebtn= page.locator('#signInModal button.btn-secondary');
        this.signupmenu=page.locator('#signin2');
    }
    async openApplication(){
        await this.page.goto(' https://www.demoblaze.com');
    }
    async navigateToSignup(){
        await this.signupmenu.click();
    }

    async enterUsernameAndPassword(username,password){

        await this.username.fill(username);
        await this.password.fill(password); 
    }
    async clickSignUp(){
         await this.signupbtn.click();
    }

    async closeSignup(){
        await this.closebtn.click();
    }
}