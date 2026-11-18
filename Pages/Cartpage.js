export class Cart{
    constructor(page){
        this.page= page;
        this.cartmenu = page.locator("//a[text()='Cart']");
        this.placeorderbtn = page.locator("//button[text()='Place Order']");
        this.name= page.locator('#name');
        this.country = page.locator('#country');
        this.city = page.locator('#city');
        this.creditCard = page.locator('#card');
        this.month = page.locator('#month');
        this.year = page.locator('#year');
        this.purchasebtn = page.locator("//button[text()='Purchase']");
    }

    async clickCart(){
        await this.cartmenu.click();
    }

    async placeOrder(){
        await this.placeorderbtn.click();
    }
    async enterDetails(orderDetails){
        await this.name.fill(orderDetails.name);
        await this.country.fill(orderDetails.country);
        await this.city.fill(orderDetails.city);
        await this.creditCard.fill(orderDetails.creditCard);
        await this.month.fill(orderDetails.month);
        await this.year.fill(orderDetails.year);
    }
    async purchase(){
        await this.purchasebtn.click();
    }
}