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
                emptyLotPin:{
                    selector: '(//div[@class="circle-annotation interaction-notHome"])[1]',
                    locateStrategy: 'xpath'
                },

                lgcy: {
                    selector: '(//input[@type="checkbox"])[7]',
                    locateStrategy: 'xpath'
                },

                lgcyPowerPin: {
                    selector: '(//div[@class="circle-annotation interaction-lgcy"])[2]',
                    locateStrategy: 'xpath'
                },

                notHome: {
                    selector: '(//input[@type="checkbox"])[3]',
                    locateStrategy: 'xpath'
                },
    }
}