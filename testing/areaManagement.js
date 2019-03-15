const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Area Management': (browser) => {
        let pomAreaManagement = browser.page.pomAreaManagement()
        pomAreaManagement.navigate()
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

            //select area
                .waitForElementVisible('@canvassArea', 5000)
                .click('@canvassArea')
                .waitForElementVisible('@areas', 5000)
                .click('@evansGroup')
                .waitForElementVisible('@evansArea', 5000)
                .click('@evansArea')
                .waitForElementPresent('@areaTitle', 5000)
    }
}