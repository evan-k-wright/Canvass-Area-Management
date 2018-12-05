const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
    },

    'Area Management': (browser) => {
        let areaManagement = browser.page.areaManagement()
        areaManagement.navigate()
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

            //adding area by zip
                // .waitForElementVisible('@canvassArea', 5000)
                // .click('@canvassArea')
                // .waitForElementVisible('@areas', 5000)
                // .click('@provo')
                // .waitForElementVisible('@newAreaZip', 5000)
                // .click('@newAreaZip')
                // .api.keys(["8", "4", "1", "0", "4"])

            //select area
                .waitForElementVisible('@canvassArea', 5000)
                .click('@canvassArea')
                .waitForElementVisible('@areas', 5000)
                .api.pause(5000)
                areaManagement.click('@provo')
                .waitForElementVisible('@testArea2', 10000)
                .click('@testArea2')
    }
}