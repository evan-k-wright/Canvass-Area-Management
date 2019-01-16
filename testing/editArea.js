const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser
    },

    'Edit Area': browser => {
        let pomEditArea = browser.page.pomEditArea()
        pomEditArea.navigate()
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

            //edit area
                .waitForElementVisible('@canvassArea', 5000)
                .click('@canvassArea')
                // .waitForElementVisible('@area', 5000)
                // .click('@area')
                // .waitForElementVisible('@edit', 5000)
                // .click('@edit')
                // .api.setAlertText(data.newName)

    }
}