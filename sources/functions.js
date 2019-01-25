//const data = require('./data')
const selectors = require('./selectors')

const addAreaZip = (browser, data) => {
    browser
         //login
         .waitForElementVisible(selectors.companyURL, 5000)
         .waitForElementVisible(selectors.username, 5000)
         .waitForElementVisible(selectors.password, 5000)
         .setValue(selectors.companyURL, data.company)
         .setValue(selectors.username, data.username)
         .setValue(selectors.password, data.password)
         .waitForElementVisible(selectors.loginButton, 5000)
         .click(selectors.loginButton)
         .waitForElementVisible(selectors.salesHub, 5000)
         .click(selectors.salesHub)
         .waitForElementVisible(selectors.canvassApp, 5000)
         .click(selectors.canvassApp)
         .waitForElementVisible(selectors.canvass, 5000) 

     //add area
         .waitForElementVisible(selectors.areaMang, 5000)
         .click(selectors.areaMang)
         .waitForElementPresent(selectors.a1Evan, 5000)
         .click(selectors.a1Evan)
         .waitForElementVisible(selectors.drawAreaZip, 5000)
         .click(selectors.drawAreaZip)
         .keys("8", "4", '0', "4", "3")
         .setAlertText()
}


module.exports ={
addAreaZip : addAreaZip
}