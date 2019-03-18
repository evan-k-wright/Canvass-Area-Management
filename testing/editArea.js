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
                .waitForElementVisible('@areaMang', 5000)
                .click('@areaMang')
                .waitForElementPresent('@unassigned', 5000)
                .click('@unassigned')
                //.waitForElementVisible('@area', 5000)
                //.click('@area')
                // .waitForElementPresent('@edit', 5000)
                // .api.pause(500)
                // pomEditArea.click('@edit')
                // .api.setAlertText("Test Area 4")
                // .acceptAlert()
                // pomEditArea.waitForElementVisible('@back', 5000)
                // .click('@back')
                // .api.refresh()
                // pomEditArea.waitForElementVisible('@newAreaName', 5000)
    }
}