import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginpage'
import { Products } from '../Pages/productspage'
import logincredentials from '../Utils/testdata.json'

test('Verify Add to cart functionality',async({page})=>{
    const loginpage = new LoginPage(page);
    await loginpage.openApplication();
    await loginpage.navigateToLogin();
    await loginpage.login(logincredentials[0].username,logincredentials[0].password);
    const product = page.locator("//a[text()='Samsung galaxy s6']");
    await product.click();
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=1');
   
   page.on('dialog',async dialog => {
   expect(dialog.message()).toBe('Product added.');
   console.log(dialog.message()); 
    await dialog.accept();
})
   const products= new Products(page);
   await products.addToCart();
})