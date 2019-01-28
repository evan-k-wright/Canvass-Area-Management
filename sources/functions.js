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

         //this is a pause to be able to type in the zipcode: 84043
         .pause(5000)
         .acceptAlert()
         .useXpath()
         .click(selectors.navyBlue)

}


module.exports = {
addAreaZip : addAreaZip
}