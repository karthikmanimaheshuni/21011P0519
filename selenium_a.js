
const { Builder, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('http://www.google.com');

    const searchBox = await driver.findElement(By.id('id="identifierId"'));
    await searchBox.sendKeys('karthikmanimaheshuni@gmail.com', Key.RETURN);
    
    await driver.wait(until.titleIs("gmail"), 5000);
  } finally {
    //await driver.quit();
  }
})();


//Make sure you have installed the necessary dependencies for Selenium WebDriver in your project using npm or yarn. You can run this script using Node.js.