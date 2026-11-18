import {test,expect} from '@playwright/test'
import { SignupPage  } from '../Pages/Signuppage'
import logincredentials from '../Utils/testdata.json'

test.only('Verify Signup',async({page})=>{

const signuppage = new SignupPage(page);
await signuppage.openApplication();
await signuppage.navigateToSignup();
page.on('dialog',async dialog=>{
 expect(dialog.message()).toBe('Sign up successful.');
 console.log(dialog.message()); 
 await dialog.accept();})
await signuppage.enterUsernameAndPassword(logincredentials[0].username,logincredentials[0].password);
await signuppage.clickSignUp();


})

test('verify signup data entry and close',async({page})=>{
const signuppage = new SignupPage(page);
await signuppage.openApplication();
await signuppage.navigateToSignup();
await signuppage.enterUsernameAndPassword(logincredentials[0].username,logincredentials[0].password);
await signuppage.closeSignup();
})

