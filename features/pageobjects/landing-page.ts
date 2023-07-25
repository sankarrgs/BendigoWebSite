/*
    Class: LandingPage
    Description: Page class for Landing/ Home Page
*/
class LandingPage {
    public get bankingButton() {
        return $('button=Banking');
    }

    private get bankAccountsButton() {
        return $('*=Bank accounts');
    }

    private get creditCardsButton() {
        return $('*=Credit cards');
    }

    private get personalLoansButton() {
        return $('*=Personal loans');
    }

    private get travelPlansButton() {
        return $('*=Travel and international payments');
    }

    /*
        Function: validateLandingPage
        Description: Validate the Landing Page
    */
    public async validateLandingPage() {
        await this.bankingButton.waitForExist();
        await this.bankingButton.click();
        // await browser.pause(2000);
        console.log('****************** Clicked Banking Button')
    
        await this.bankAccountsButton.waitForExist()
        console.log('****************** Bank accounts button is visible')
    
        await this.creditCardsButton.waitForExist()
        console.log('****************** Credit cards button is visible')
    
        await this.personalLoansButton.waitForExist()
        console.log('****************** Personal loans button is visible')
    
        await this.travelPlansButton.waitForExist()
        console.log('****************** Travel and international payments button is visible')
    }

    /*
        Function: clickCreditCardsButton
        Description: Validate the Landing Page
    */
    public async clickCreditCardsButton() {
        await this.creditCardsButton.waitForExist();
        await this.creditCardsButton.click();
        console.log('****************** Clicked Credit Cards Button')
    }

}

export default new LandingPage();