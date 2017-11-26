const {Builder, By, Key, until} = require('selenium-webdriver');
const fs = require('fs');




function auto_sign(driver, user){
    driver.get('http://183.131.126.57:9001/hyhbju/master/login.aspx');
    driver.findElement(By.id('uidTextBox')).sendKeys(user.name);
    driver.findElement(By.id('pwdTextBox')).sendKeys(user.password);
    driver.findElement(By.id('Button2')).click();

    driver.get('http://183.131.126.57:9001/hyhbju/WorkDay/DayEdit.aspx?isnew=1');
    driver.findElement(By.id('ctl00_ContentPlaceHolder1_saveButton')).click();

    driver.get('http://183.131.126.57:9001/hyhbju/master/login.aspx?logout=1');
}


let driver = new Builder()
    .forBrowser('firefox')
    .build();

fs.readFile('users.json',
(err,data)=>{
   let users=JSON.parse(data);
   users.forEach((user)=>{
    auto_sign(driver, user);
   });
});

driver.close();
