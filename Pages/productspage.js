export class Products{
    constructor(page){
        this.page= page;
        this.phone = page.locator("//a[text()='Phones']");
        this.monitor = page.locator("//a[text()='Monitors']");
        this.laptop= page.locator("//a[text()='Laptops']")
        this.lumiaphone=page.locator("//a[text()='Nokia lumia 1520']");
        this.applemonitor = page.locator("//a[text()='Apple monitor 24']");
        this.addcartbtn = page.locator("//a[text()='Add to cart']");
    }

    async selectPhone(){
        await this.phone.click();
    }
    async selectMonitor(){
        await this.monitor.click();
    }
    async selectLaptop(){
        await this.laptop.click();
    }
    async selectLumia(){
   await this.lumiaphone.click();
    }

    async selectApple(){
  await this.applemonitor.click();
    }

    async addToCart(){
    await this.addcartbtn.click();  
    }
}
