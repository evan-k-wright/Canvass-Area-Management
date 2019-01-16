const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Edit Area': browser => {
        let pomEditArea = browser.page.pomEditArea
        pomEditArea.navigate()
            
    }
}