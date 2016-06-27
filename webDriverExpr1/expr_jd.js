/**
 * Created by 13945 on 2016/6/27.
 */
var webdriver = require('selenium-webdriver'),
    By = require('selenium-webdriver').By,
    until = require('selenium-webdriver').until;

var driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();

driver.get('http://item.jd.com/1514842.html');
//商品价格
var price = driver.findElement(By.id('jd-price'));
//商品主标题
var firstTitle = driver.findElement(By.xpath("//*[@id='itemInfo']/div[1]/h1"));
//商品副标题
var secondTitle = driver.findElement(By.xpath("//*[@id='itemInfo']/div[1]/div[@id='p-ad']"));
//促销信息
var favourInfo = driver.findElement(By.className("hl_red"));
//下单信息
var applyInfo = driver.findElement(By.xpath("//div[@id='summary-service']/div[2]"));
//购买方式
var chooseType = driver.findElement(By.id('choose-type')).findElement(By.className('dd'));
//店铺地址

var shopSite = driver.findElement(By.className("btn-shop-access"));
//商品图片
var productImage = driver.findElement(By.xpath("//div[@class='spec-items']/ul/li[1]/img"));

//商品信息
var productInfo =driver.findElement(By.id('product-detail-1'));

var result={}

price.getText().then(function(text){
    result.priceValue = text;
    //return result.priceValue;
});


secondTitle.getText().then(function(text){
    result.secTitle = text;

});


firstTitle.getText().then(function(text){
    result.firTitle = text;

});

favourInfo.getText().then(function(text){
    result.favInfo = text;

});

applyInfo.getText().then(function(text){
    result.favInfo = text;

});
chooseType.getText().then(function(text){
    text.replace("/\s/ig",",");
    result.chooseType = text;


});



shopSite.getAttribute("href").then(function(text){
    result.shopSite =text;
    //return result.shopSite;
});

productImage.getAttribute("src").then(function(text){
    result.productImage =text;
    //return result.productImage;
});



productInfo.getText().then(function(text){
    var aa=text.replace(/\n/g,"-");
    console.log(aa);
    result.productInfo = aa;
});

driver.get('http://item.jd.com/1514842.html').then(function(){
    console.log(result);
});

