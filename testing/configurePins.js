const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Configure Pins': browser => {
        let pomConfigurePins = browser.page.pomConfigurePins()
        pomConfigurePins.navigate()
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

            //pins
                .waitForElementVisible('@canvassArea', 5000)
                .click('@canvassArea')
                .waitForElementVisible('@pinsList', 5000)
                .click('@pinsList')
                .waitForElementVisible('@sale', 5000)
                .waitForElementVisible('@followUp', 5000)
                .click('@sale')
                .click('@followUp')
                .waitForElementVisible('@updatePins', 5000)
                .click('@updatePins')
                .waitForElementVisible('@salePin', 5000)
                .waitForElementVisible('@followUpPin', 5000)
                .click('@sale')
                .click('@followUp')
                .click('@updatePins')
                .api.pause(500)
                .acceptAlert()
    }
}