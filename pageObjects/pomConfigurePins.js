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
            followUpPin: 'div[aria-label="578 E 2700  S , BOUNTIFUL, UT 84010"]',
            pinsList: 'div[id="expandPinsList"]',
            salePin: 'div[aria-label="209 W CENTER ST , CITY OF NORTH SALT LAKE, UT 84054"]',
            updatePins: 'a[id="loadPins"]',

            //xpath
                followUp: {
                    selector: '(//input[@type="checkbox"])[71]',
                    locateStrategy: 'xpath'
                },

                sale: {
                    selector: '(//input[@type="checkbox"])[53]',
                    locateStrategy: 'xpath'
                },

    }
}