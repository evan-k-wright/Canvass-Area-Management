const data = require('../sources/data')

module.exports = {
    after: browser => {
        browser.end()
    },

    'Area Management': (browser) => {
        let areaManagement = browser.page.areaManagement()
        areaManagement.navigate()
            //login
                
    }
}