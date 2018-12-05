module.exports = {
    url: 'https://admin.saleshub.io/users/login',
    elements: {
        //login
            canvassApp: 'a[class="enabled app-canvass"]',
            canvass: 'div[class="current-app"]',
            companyURL: 'input[placeHolder="Company URL"]',
            loginButton: 'button[type="submit"]', 
            password: 'input[placeHolder="Password"]',
            salesHub: 'div[class="current-app"]',
            username: 'input[placeHolder="Username"]',

        //pins
            canvassArea: 'a[href="/canvass/area"]',
            pinsList: 'div[id="expandPinsList"]',
            updatePins: 'a[id="loadPins"]',

            //xpath
                notHome: {
                    selector: '(//input[@type="checkbox"])[3]',
                    locateStrategy: 'xpath'
                },

                lgcy: {
                    selector: '(//input[@type="checkbox"])[7]',
                    locateStrategy: 'xpath'
                },
    }
}