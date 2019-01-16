const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
    },

    'Add Area by Zip Code': browser => { 
        let pomAddAreaZip = browser.page.pomAddAreaZip()
        pomAddAreaZip.navigate()
            //login
                .waitForElementVisible('@companyURL', 5000)
                .waitForElementVisible('@username', 5000)
                .waitForElementVisible('@password', 5000)
                .setValue('@companyURL', data.company)
                .setValue('@username', data.username)
                .setValue('@password', data.password)
                .waitForElementVisible('@loginButton', 5000)
                .click('@loginButton')
                .waitForElementVisible('@salesHub', 5000)
                .click('@salesHub')
                .waitForElementVisible('@canvassApp', 5000)
                .click('@canvassApp')
                .waitForElementVisible('@canvass', 5000) 

            //add area
                .waitForElementVisible('@areaMang', 5000)
                .click('@areaMang')
                .waitForElementVisible('@drawAreaZip', 5000)
                .api.pause(1000)
                pomAddAreaZip.click('@drawAreaZip')
                .api.keys(8, 4, 0, 4, 3)
    }
}