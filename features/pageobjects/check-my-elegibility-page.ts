/*
    Class: CheckMyElegibilityPage
    Description: Page class for Check MY Credit Card Elegibility
*/
class CheckMyElegibilityPage {

    /*
        Getter method of 'Page Title of Check MY Credit Card Elegibility'
    */
    // private get title() {
    //     return $('title=Check my credit card eligibility | Bendigo Bank')
    // }

    /*
        Getter method of 'Continue To Apply Button' Button
    */
    private get continueToApplyButton() {
        return $('#Button-237631')
    }

    /*
        Function: checkMyElegibilityAndContinue
        Description: Validate the page Check My Elegibility and 
        navigate to Online Application Page
    */
    public async checkMyElegibilityAndContinue() {
        await expect(browser).toHaveTitle('Check my credit card eligibility | Bendigo Bank');
        await this.continueToApplyButton.click();
        console.log('****************** Clicked Continue to Apply Button');
    }
}

export default new CheckMyElegibilityPage();