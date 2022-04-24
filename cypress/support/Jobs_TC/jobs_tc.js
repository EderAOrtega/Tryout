import selectors from "./selectors"

class TribalCreditJobs {

    navigateTo(page){
        cy.visit(page)
    }

    validatePageTitle(title){
        cy.title().should('eq',title)
    }
    
    clickOnElement(selector){
        cy.get(selector).click()
    }

    selectOptionFromDropdown(optionTxt){
        cy.get(selectors.generic_dropdown_opt).contains(optionTxt).click()
    }

    validateLinkDisplayed(linkTxt){
        cy.get(selectors.engSection_link).contains(linkTxt).should('be.visible')
    }

    validateChosenOpt(optionTxt){
        cy.get(selectors.generic_selected_opt).contains(optionTxt).should('be.visible')
    }
}

export const tcJobs = new TribalCreditJobs()