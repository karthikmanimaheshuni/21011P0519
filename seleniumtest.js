const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser(Browser.CHROME).build();
  try {
    await driver.get('https://www.google.com');
    await driver.findElement(By.name('q')).sendKeys('driver', Key.RETURN);
    await driver.wait(until.titleIs("driver - Google Search"), 10000);
    let imagesLink = await driver.wait(until.elementLocated(By.linkText("Images")), 10000);
    // Click on the "Images" link
    await imagesLink.click();

    // Optionally, wait for the images page to load
    await driver.wait(until.titleIs('driver - Google Search'), 10000);
    
    // let firstVideo = await driver.findElement(By.id('video-title'));
    // await firstVideo.click();
    // await driver.wait(until.elementLocated(By.css('video')), 10000);
    // let videoTitle = await driver.getTitle();
    //console.log('Playing video:', videoTitle);
  } finally {
    // Optionally, wait a few seconds before quitting to let the video play
    //await new Promise(resolve => setTimeout(resolve, 10000));

    // Quit the browser
    await driver.quit();
  }
})();
