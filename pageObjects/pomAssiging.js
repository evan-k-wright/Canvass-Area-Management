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

        //remove rep
            area: 'span[class="area-name"]',
            areaMang: 'a[href="/canvass/area"]', 
            fourRep: 'tr[data-id="6270"]',
            removerep: 'a[class="remove-rep"]',

    }
}
