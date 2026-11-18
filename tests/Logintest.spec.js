import {test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginpage'
import logincredentials from '../Utils/testdata.json'

test('verify login with valid data',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.openApplication();
await loginpage.navigateToLogin();
await loginpage.login(logincredentials[0].username,logincredentials[0].password);
})


test('Verify login with invalid username and valid password',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.openApplication();
await loginpage.navigateToLogin();
 page.on('dialog',async dialog => {
 expect(dialog.message()).toBe('User does not exist.');
 console.log(dialog.message()); 
 await dialog.accept();
});
await loginpage.login(logincredentials[1].username,logincredentials[0].password);
})


test('Verify login with valid username and invalid password',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.openApplication();
await loginpage.navigateToLogin();
 page.on('dialog',async dialog => {
 expect(dialog.message()).toBe('Wrong password.');
 console.log(dialog.message()); 
 await dialog.accept();
});
await loginpage.login(logincredentials[0].username,logincredentials[1].password);
})


test.only('Verify login with invalid username and invalid password',async({page})=>{
const loginpage = new LoginPage(page);
await loginpage.openApplication();
await loginpage.navigateToLogin();
 page.on('dialog',async dialog => {
 expect(dialog.message()).toBe('User does not exist.');
 console.log(dialog.message()); 
 await dialog.accept();
});
await loginpage.login(logincredentials[1].username,logincredentials[1].password);
})