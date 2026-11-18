import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginpage'
import logincredentials from '../Utils/testdata.json'

test('Verify Logout functionality',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.openApplication();
await loginpage.navigateToLogin();
await loginpage.login(logincredentials[0].username,logincredentials[0].password);

const logoutbtn = await page.locator("//a[text()='Log out']").click();

})