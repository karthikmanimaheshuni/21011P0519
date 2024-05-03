const {Builder,By,Key} = require("selenium-webdriver");
require("chromedriver");
async function example1(){
    let driver=await new Builder().forBrowser("chrome").build();
    await driver.get("http://google.com");
    await driver.findelement(By.name("q")).sendKeys("Selenium",Key.RETURN);

}
example1();
