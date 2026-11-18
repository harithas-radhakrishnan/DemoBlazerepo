import{test,expect} from '@playwright/test'
import { LoginPage } from '../Pages/loginpage'
import { Products } from '../Pages/productspage'
import { Cart } from '../Pages/Cartpage'
import logincredentials from '../Utils/testdata.json'
import testdata from '../Utils/Orderdata.json'

test('Verify Phone purchase',async({page})=>{
   const loginpage = new LoginPage(page);
   await loginpage.openApplication();
   await loginpage.navigateToLogin();
   await loginpage.login(logincredentials[0].username,logincredentials[0].password);  

   const product = new Products(page);
  await product.selectMonitor();
  await product.selectApple();

      page.on('dialog',async dialog => {
   expect(dialog.message()).toBe('Product added.');
   console.log(dialog.message()); 
    await dialog.accept();
   })

   await product.addToCart();
   
   const cart = new Cart(page);
   await cart.clickCart();
   await cart.placeOrder();
   await cart.enterDetails(testdata);

   page.on('dialog',async dialog => {
   expect(dialog.message()).toBe('Thank you for your purchase!');
   console.log(dialog.message()); 
    await dialog.accept();
   })
   await cart.purchase();
})