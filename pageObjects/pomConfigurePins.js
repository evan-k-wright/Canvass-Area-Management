module.exports = {
    url: 'http://admin.salesos.info/users/login',
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
            notHomePin: 'div[aria-label="2376 W 1540 ST N , LEHI, UT 84043"]',
            pinsList: 'div[id="expandPinsList"]',
            salePin: 'div[aria-label="1640 N 2400 ST W , LEHI, UT 84043"]',
            updatePins: 'a[id="loadPins"]',

            //xpath
                followUp: {
                    selector: '(//input[@type="checkbox"])[2]',
                    locateStrategy: 'xpath'
                },

                sale: {
                    selector: '(//input[@type="checkbox"])[52]',
                    locateStrategy: 'xpath'
                },

    }
}