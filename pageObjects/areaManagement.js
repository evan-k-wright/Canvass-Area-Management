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

        //select area
            canvassArea: 'a[href="/canvass/area"]',
            provo: 'option[value="137"]',

            //xpath
                areas: {
                    selector: '(//h1)[1]',
                    locateStrategy: 'xpath'
                },

    }
}