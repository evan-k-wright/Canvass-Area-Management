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

        //assign rep
            autoTestArea: 'tr[data-name="auto test area"]',
            areaMang: 'a[href="/canvass/area"]', 
            assign: 'a[id="addRep"]',
            back: 'a[class="back"]',
            //fourRep: 'tr[data-id="6088"]',
            repAssigned: 'tr[data-id="6088"]',
            autoTest: 'option[value="6088"]',
            evansGroup: 'option[value="209"]',
            removeRep: 'a[class="remove-rep"]',

            //xpath
                // assignedRep: {
                //     selector: '(//td[.="4 Rep Test Testing"])[2]',
                //     locateStrategy: 'xpath'
                // },

                remove: {
                    selector: '//a[@class="remove-rep"]',
                    locateStrategy: 'xpath'
                },

                unassigned: {
                    selector: '//a[.="Unassigned Areas"]',
                    locateStrategy: 'xpath'
                },
    }
}
