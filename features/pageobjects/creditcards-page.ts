/*
    Class: CreditCardsPage
    Description: Page class for Credit Cards Page
*/
class CreditCardsPage {

    /*
        Getter method of 'Credit Cards Bread Crubs'
    */
    private get creditCardsBreadCrubs() {
        return $('.breadcrumbs-breadcrumbItem=Credit cards');
    }

    /*
        Getter method of 'Apply Now Bendigo Bright Credit Card' Button
    */
    private get applyNowBendigoBrightCreditCardButton() {
        return $('#Button-232952');
    }

    /*
        Function: validateCreditCardPageAndNavigateAndClickApply
        Description: Validate the 'Credit Cards Bread Crubs' and 
        click 'Apply Now Bendigo Bright Credit Card' Button
    */
    public async validateCreditCardPageAndNavigateAndClickApply() {
        await browser.pause(2000)
        await this.creditCardsBreadCrubs.waitForExist();
        console.log('****************** Credit Cards Page is launched')
    
        await browser.pause(2000)
        await this.applyNowBendigoBrightCreditCardButton.waitForExist();
        await this.applyNowBendigoBrightCreditCardButton.scrollIntoView();
        await this.applyNowBendigoBrightCreditCardButton.click();
        console.log('****************** Clicked - Apply now for a bendigo bright credit card');
    }
}

export default new CreditCardsPage();