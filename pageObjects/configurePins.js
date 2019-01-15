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
            pinsList: 'div[id="expandPinsList"]',
            updatePins: 'a[id="loadPins"]',

            //xpath
                followUp: {
                    selector: '(//input[@type="checkbox"])[12]',
                    locateStrategy: 'xpath'
                },

                followUpPin: {
                    selector: '(//div[@class="circle-annotation interaction-follow_up"])[18]',
                    locateStrategy: 'xPath'
                },

                sale: {
                    selector: '(//input[@type="checkbox"])[11]',
                    locateStrategy: 'xpath'
                },

                salePin: {
                    selector: '(//div[@class="circle-annotation interaction-solar_sale"])[14]',
                    locateStrategy: 'xPath'
                },
    }
}