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
                .waitForElementPresent('@a1Evan', 5000)
                .click('@a1Evan')
                .waitForElementVisible('@unassigned', 5000)
                .click('@unassigned')
                .waitForElementVisible('@area4', 5000)
                .click('@area4')
                .waitForElementVisible('@rep4', 5000)
                .click('@rep4')
                .waitForElementVisible('@assign', 5000)
                .click('@assign')
                .waitForElementPresent('@repAssigned', 5000)
                .click('@back')
                .api.refresh()
                pomAssignRep.waitForElementPresent('@a1Evan', 5000)
                .click('@a1Evan')
                .waitForElementVisible('@area4', 5000)

            //unassign rep
                .click('@area4')
                .waitForElementVisible('@remove', 5000)
                .api.useCss()
                .moveToElement(selectors.remove, 0, 0)
                .mouseButtonClick(selectors.remove)
                .acceptAlert()
                pomAssignRep.click('@back')
                .api.refresh()
                pomAssignRep.waitForElementNotPresent('@fourRep', 5000)
     }
}