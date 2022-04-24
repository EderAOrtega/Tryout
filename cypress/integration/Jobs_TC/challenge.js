import {tcJobs} from '../../support/Jobs_TC/jobs_tc'
import selectors from  '../../support/Jobs_TC/selectors'
import testData from '../../fixtures/tribalData.json'

describe("Tribal challenge",function(){
    it("Verify Senior QA Engineer is displayed", function(){
        tcJobs.navigateTo(testData.tribalPage)
        tcJobs.validatePageTitle(testData.pageTitle)

        tcJobs.clickOnElement(selectors.department_container)
        tcJobs.selectOptionFromDropdown(testData.engOpt)
        tcJobs.clickOnElement(selectors.office_container)
        tcJobs.selectOptionFromDropdown(testData.mxOpt)

        tcJobs.validateLinkDisplayed(testData.jposition)
    })

    const departments = testData.department_select
    const offices = testData.office_select

    departments.forEach(dept => {
        it("Validate all department and office options can be selected",function(){
            tcJobs.clickOnElement(selectors.department_container)
            tcJobs.selectOptionFromDropdown(dept)
            tcJobs.validateChosenOpt(dept)

            offices.forEach(offi => {
                tcJobs.clickOnElement(selectors.office_container)
                tcJobs.selectOptionFromDropdown(offi)
                tcJobs.validateChosenOpt(offi)
            })
        })
        
    });
})