/*
    Class: ApplyOnlinePage
    Description: Page class for Apply Online Page
*/
class ApplyOnlinePage {

    /*
        Getter method of 'Getting Started' Text field
    */
    private get gettingStartedText() {
        return $('*=Getting Started');
    }

    /*
        Getter method of 'Preferred credit limit' Text field
    */
    private get creditLimitTextField() {
        return $('#creditLimitAmountInput');
    }

    /*
        Getter method of 'General purpose use' Button
    */
    private get generalPurposeButton() {
        // return $('*=General purpose use');
        return $('button=General purpose use');
    }

    /*
        Getter method of 'Continue' Button
    */
    private get continueButton() {
        return $('button[name="contBtn"]');
    }

    /*
        Getter method of 'Marital Status' Drop Down
    */
    private get relationShipStatus() {
        return $('[name="maritalStatus"]');
    }

    /*
        Getter method of 'Existing Customet - No' Button
    */
    private get existingCustomerNo() {
        return $$('button[name="isPrimaryApplicantExistingCustomer"]')[1];
    }

    /*
        Getter method of 'Promo Code - No' Button
    */
    private get promoCodeNo() {
        return $('//*[@name="hasPromoCode"][@ng-model="model.hasPromoCode"][2]');
    }

    /*
        Getter method of 'Elegibility Criteria - Yes' Button
    */
    private get elegibilityCriteriaYes() {
        return $('//*[@name="hasApplicantConformToEligibilityCriteria"][contains(text(),"Yes")]');
    }

    /*
        Getter method of 'Enter Location' Text Field
    */
    private get enterLocationText() {
        return $('//*[@placeholder="Enter a location"]');
    }
    
    /*
        Getter method of 'Find' Button
    */
    private get findButton() {
        return $("//*[@id=\"branchSearch\"]/span");
    }
    
    /*
        Getter method of 'Employment Status' Drop Down
    */
    private get employmentStatus() {
        return $('//*[@name="employmentStatus"]')
    }

    /*
        Getter method of 'Occupation' Text Field
    */
    private get occupationTextBox() {
        return $('//input[@ng-model="searchInputValue"]');
    }

    /*
        Getter method of 'Social Professionals (general)' Selection
    */
    private get socialPrefessionals() {
        return $('*[title="Social Professionals (general)"]');
    }

    /*
        Getter method of 'Clifton Hill' Location
    */
    private get cliftonHillXpath() {
        return $('//*[@ng-click="selectBranch(branch)"][contains(text(),"Clifton Hill")]');
    }

    /*
        Getter method of 'Income Amount' Text Field
    */
    private get amountText() {
        return $('input[name="incomeAmount"]');
    }

    /*
        Getter method of 'Income Frequency' Drop Down
    */
    private get frequencyDropDown() {
        return $('*[name="incomeFrequency"]');
    }

    /*
        Getter method of 'Expense Amount' Text Field
    */
    private get expencesAmountText() {
        return $('//input[@name="expenseAmount"]');
    }

    /*
        Getter method of 'Expense Frequency' Drop Down
    */
    private get expenceFrequencyDropDown() {
        return $('*[name="frequency"]');
    }

    /*
        Getter method of 'Cancel' Button
    */
    private get cancelButton() {
        return $('button[name="cancelBtn"]');
    }

    /*
        Getter method of 'Confirm Pop UP - Yes' Button
    */
    private get popUpYesButton() {
        return $('button[name="confirmYes"]')
    }

    /*
        Getter method of 'Cancel Application' Button
    */
    private get applicationCancelledMessage() {
        return $('//h1[contains(text(), "Your application ")]');
    }

    /*
        Function: updateProductDetails
        Description: Updates the Product Details
    */
    public async updateProductDetails() {
        const handles = await browser.getWindowHandles();
        console.log('****************** ' + (handles.length));

        for (var i = 0; i < (handles).length; i++) {    
            if (handles[i] != handles[0]) {    
                await browser.switchToWindow(handles[i]);
            }
        }

        // await browser.switchToWindow(handles[1]);
        await browser.pause(10000);
        await expect(browser).toHaveTitle('Product Details | Bendigo Bank Apply Online | Credit Card');

        console.log('****************** Navigated to Bendigo Bank Apply Online Page');

        await this.gettingStartedText.waitForExist();
        console.log('****************** Getting Started Text is visible');

        await browser.pause(2000);
        await this.creditLimitTextField.waitForExist();
        await this.creditLimitTextField.setValue("10000");
        console.log('****************** Enter 10000');

        await this.generalPurposeButton.waitForExist();
        await this.generalPurposeButton.click();
    
        await this.continueButton.waitForExist();
        await this.continueButton.click();
        console.log('****************** Click Continue Button - Product Details');
    }

    /*
        Function: updateApplicationDetails
        Description: Updates the Application Details
    */
    public async updateApplicationDetails() {
        await browser.pause(5000);
        await expect(browser).toHaveTitle('Application Details | Bendigo Bank Apply Online | Credit Card');

        await browser.pause(2000);
        await this.relationShipStatus.waitForExist();
        await this.relationShipStatus.selectByAttribute('label', 'Single');
        console.log('****************** Select Single');

        await this.existingCustomerNo.waitForExist();
        await this.existingCustomerNo.click();
        console.log('****************** Click Existing Customer No');
    
        await this.promoCodeNo.waitForExist();
        await this.promoCodeNo.click();
        console.log('****************** Click Promo Code No');
    
        await this.continueButton.waitForExist();
        await this.continueButton.click();
        console.log('****************** Click Continue Button - Application Details');
    }

    /*
        Function: updateTimeAndElegibility
        Description: Updates the Time and Elegibility Details
    */
    public async updateTimeAndElegibility() {
        browser.pause(5000);
        await expect(browser).toHaveTitle('Time & Eligibility | Bendigo Bank Apply Online | Credit Card');

        await browser.pause(2000);
        await this.elegibilityCriteriaYes.waitForExist();
        await this.elegibilityCriteriaYes.click();
        console.log('****************** Click Elegibility Criteria Yes');
    
        await browser.pause(5000);
        await this.continueButton.waitForExist();
        await this.continueButton.scrollIntoView({block:'center'});
        await this.continueButton.click();
        console.log('****************** Click Continue Button - Time & Eligibility Details');
    }

    /*
        Function: updateBranchDetails
        Description: Updates the Branch Details
    */
    public async updateBranchDetails() {
        browser.pause(10000);
        await expect(browser).toHaveTitle('Branch Details | Bendigo Bank Apply Online | Credit Card');

        await browser.pause(2000);
        await this.enterLocationText.waitForExist();
        await this.enterLocationText.setValue("Melbourne");
        console.log('****************** Enter Melbourne');

        await this.findButton.waitForExist();
        await this.findButton.click();

        await browser.pause(2000);
        await this.cliftonHillXpath.waitForExist();
        await this.cliftonHillXpath.click();
        console.log('****************** Click Clifton Hill');

        await browser.pause(2000);
        await this.continueButton.waitForExist();
        await this.continueButton.click();
        console.log('****************** Click Continue Button - Branch Details');
    }

    /*
        Function: updateIncomeDetails
        Description: Updates the Income Details
    */
    public async updateIncomeDetails() {
        browser.pause(7000);
        await expect(browser).toHaveTitle('Income Details | Bendigo Bank Apply Online | Credit Card');

        browser.pause(2000);
        await this.employmentStatus.waitForClickable();
        await this.employmentStatus.selectByAttribute('label', 'Casual');
        console.log('****************** Select Casual');

        await this.occupationTextBox.waitForExist();
        await this.occupationTextBox.setValue('Professionals');
        console.log('****************** Enter Professionals');

        await this.socialPrefessionals.waitForExist();
        await this.socialPrefessionals.click();
        console.log('****************** Select Social Prefessionals');
    
        await expect(browser).toHaveTitle('Income Details | Bendigo Bank Apply Online | Credit Card');
    
        await this.amountText.waitForExist();
        await this.amountText.setValue("20000");
        console.log('****************** Enter 20000');

        await this.frequencyDropDown.waitForExist();
        await this.frequencyDropDown.selectByAttribute('label', 'Annually');
        console.log('****************** Select Annually');

        browser.pause(2000)
        await this.continueButton.waitForExist();
        await this.continueButton.click();
        console.log('****************** Click Continue Button - Income Details');
    }

    /*
        Function: updateExpencesDetails
        Description: Updates the Expence Details
    */
    public async updateExpencesDetails() {
        await expect(browser).toHaveTitle('Commitments | Bendigo Bank Apply Online | Credit Card');

        browser.pause(3000)
        await this.expencesAmountText.waitForExist();
        await this.expencesAmountText.setValue('6000');
        console.log('****************** Enter 6000');

        await this.expenceFrequencyDropDown.waitForExist();
        await this.expenceFrequencyDropDown.selectByAttribute('label', 'Monthly');
        console.log('****************** Select Monthly');
    }

    /*
        Function: cancelAppliation
        Description: Cancel the application
    */
    public async cancelAppliation() {
        await this.cancelButton.waitForExist();
        await this.cancelButton.click();
        console.log('****************** Click Cancel');

        browser.pause(2000);
        await this.popUpYesButton.waitForExist();
        await this.popUpYesButton.click();
        console.log('****************** Click Popup Yes');
    }

    /*
        Function: validateApplicationCancellation
        Description: Validate that the application is cancelled
    */
        public async validateApplicationCancellation() {
        await this.applicationCancelledMessage.waitForExist()

        let message : string = await this.applicationCancelledMessage.getText();
    
        let regex = new RegExp('Your application [0-9]{8} has been cancelled');
        console.log(regex.test(message));
    
        if(!regex.test(message)) {
            throw Error(message + ' != ' + 'Your application [0-9]{8} has been cancelled');
        }
    }

}

export default new ApplyOnlinePage();