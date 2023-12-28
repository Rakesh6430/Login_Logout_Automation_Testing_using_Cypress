/// <reference types = "cypress"/>


it('google.test',function(){

    cy.visit('https://www.google.com/')
    //cy.get('#APjFqb').type('Automation Step by step{enter}')
    //cy.get('#APjFqb').type('www.shikho.com{enter}')
    //cy.get(':nth-child(2) > .cIkxbf > .usJj9c > :nth-child(1) > .VttTV > :nth-child(1) > h3 > .l').click()
    //cy.get('gly',{timeout:6000}).type('Automation Step by step{enter}')
    cy.get('#APjFqb').type('Automation Step by step{enter}')
    //cy.contains('Videos').click()
    cy.wait(5000)
    cy.get('.MUFPAc > :nth-child(2) > a').click()
    cy.viewport(1000, 660)


})

it.only('login.test',function(){

    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
    cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
    cy.get('.oxd-button').click()
    cy.wait(5000)
    //cy.get(':nth-child(1) > .oxd-main-menu-item').click()
    cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
    cy.wait(6000)
    cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
    //cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
})
