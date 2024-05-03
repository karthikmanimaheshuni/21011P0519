package edureka;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
public class SeleniumScript{
    public static void main(String[] args){
        System.setProperty("webdriver.chrome.driver","C:\\Selenium web driver\\chromedriver-win64\\chromedriver.exe");
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.edureka.co");
        System.out.println(driver.getTitle());
        driver.quit();
  }
}