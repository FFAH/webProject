/**
 * Created by K68 on 2016/6/27.
 */

var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

var result = null;

driver.get('http://www.baidu.com/');
driver.findElement(By.id('kw')).sendKeys('镇海大厦');
driver.findElement(By.id('su')).click();
driver.wait(until.titleIs('镇海大厦_百度搜索'), 1000);
driver.findElement(By.id('su')).getAttribute('value').then(function(text) {
    result = text;
});
driver.findElement(By.className('nums')).getText().then(function(text) {
    result += text;
});
driver.get('http://www.baidu.com/').then(function() {
    console.log(result);
});
driver.quit();