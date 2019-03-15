const data = require('../sources/data')
const selectors = require('../sources/selectors')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Area Management': (browser) => {
        let pomAssignRep = browser.page.pomAssignRep();
        pomAssignRep.navigate()
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

            //assign rep
                .waitForElementVisible('@areaMang', 5000)
                .click('@areaMang')
                .waitForElementPresent('@evansGroup', 5000)
                .click('@evansGroup')
                .waitForElementVisible('@unassigned', 5000)
                .click('@unassigned')
                .waitForElementVisible('@autoTestArea', 5000)
                .click('@autoTestArea')
                 .waitForElementVisible('@autoTest', 5000)
                 .click('@autoTest')
                 .waitForElementVisible('@assign', 5000)
                 .click('@assign')
                 .waitForElementPresent('@repAssigned', 5000)
                 .click('@back')
                 .api.refresh()
                 pomAssignRep.waitForElementPresent('@evansGroup', 5000)
                 .click('@evansGroup')
                 .waitForElementVisible('@autoTestArea', 5000)

            // //unassign rep
            //     .click('@area4')
            //     .waitForElementVisible('@remove', 5000)
            //     .api.useCss()
            //     .moveToElement(selectors.remove, 0, 0)
            //     .mouseButtonClick(selectors.remove)
            //     .acceptAlert()
            //     pomAssignRep.click('@back')
            //     .api.refresh()
            //     pomAssignRep.waitForElementNotPresent('@fourRep', 5000)
     }
}