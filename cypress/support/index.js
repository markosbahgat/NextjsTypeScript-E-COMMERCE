afterEach(() =>
{
    //Code to Handle the Sesssions in cypress.
    //Keep the Session alive when you jump to another test
    let str = [];
    cy.getCookies().then((cook) =>
    {
        cy.log(cook);
        for (let l = 0; l < cook.length; l++)
        {
            if (cook.length > 0 && l == 0)
            {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            } else if (cook.length > 1 && l > 1)
            {
                str[l] = cook[l].name;
                Cypress.Cookies.preserveOnce(str[l]);
            }
        }
    })
})