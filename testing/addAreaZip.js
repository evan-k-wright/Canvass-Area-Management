const data = require('../sources/data')
const selectors = require('../sources/selectors')

module.exports = {
    beforeEach: browser => {
        browser.url('http://admin.salesos.info/users/login')
    },
    after: browser => {
        browser
    },

    'Add Area by Zip Code': browser => { 
        let pomAddAreaZip = browser.page.pomAddAreaZip()
        pomAddAreaZip.navigate()
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
                // .waitForElementVisible('@areaMang', 5000)
                // .click('@areaMang')
                // .waitForElementVisible('@drawAreaZip', 5000)
                // .api.pause(1000)
                // pomAddAreaZip.click('@drawAreaZip')
                
    }
}