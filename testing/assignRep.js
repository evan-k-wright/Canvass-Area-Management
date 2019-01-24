const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
    },

    'Area Management': (browser) => {
        let pomAssignRep = browser.page.pomAssignRep()
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
                .waitForElementVisible('@unassigned', 5000)
                .click('@unassigned')
                .waitForElementVisible('@area', 5000)
                .click('@area')
                .click('@rep')
                .waitForElementVisible('@assign', 5000)
                .click('@assign')
                .waitForElementVisible('@assignedRep', 5000)
                .click('@back')
                .api.refresh()
                pomAssignRep.waitForElementVisible('@area', 5000)

                //unassign rep
                
                // .waitForElementVisible('@removeRep', 5000)
                // .click('@removeRep')
                // .api.pause(500)
                // .acceptAlert()
                // pomAssignRep.waitForElementNotPresent('@fourRep', 5000)
    }
}