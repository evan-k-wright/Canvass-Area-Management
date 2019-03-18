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

        //edit area
        area: 'tr[data-name="4 rep test"]',
        areaMang: 'a[href="/canvass/area"]',
        back: 'a[class="back"]',
        edit: 'a[class="edit"]',
        newAreaName: 'tr[data-name="auto test area"]',
        
        //xpath
        unassigned: { 
            selector: '//a[.="Unassigned Areas"]',
            locateStrategy: 'xpath'
        }, 
    }
}