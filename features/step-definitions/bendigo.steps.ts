import { Given, When, Then } from '@wdio/cucumber-framework';

import LandingPage from '../pageobjects/landing-page'
import CreditCardsPage from '../pageobjects/creditcards-page'
import CheckMyElegibilityPage from '../pageobjects/check-my-elegibility-page'
import ApplyOnlinePage from '../pageobjects/apply-online-page'

Given(/^User is launching the Bendigo url$/, async () => {
    await browser.url(`https://www.bendigobank.com.au/`)
	browser.maximizeWindow();
});

When(/^User is in Landing page$/, async () => {
	LandingPage.bankingButton.waitForExist()
	console.log('****************** Banking button is visible')
});

Then(/^User validates the Landing Page and navigates to Credit Card Page$/, async () => {
	await LandingPage.validateLandingPage();
	await LandingPage.clickCreditCardsButton();
});


Then(/^User validates the Credit Cards Page and navigates to apply Bendigo Bright Credit Card$/, async () => {
	await CreditCardsPage.validateCreditCardPageAndNavigateAndClickApply();
	await CheckMyElegibilityPage.checkMyElegibilityAndContinue();
});

Then(/^User navigates to Apply Credit Card Page and validates his elegibility$/, async () => {
	await ApplyOnlinePage.updateProductDetails();
	await ApplyOnlinePage.updateApplicationDetails();
	await ApplyOnlinePage.updateTimeAndElegibility();
	await ApplyOnlinePage.updateBranchDetails();
	await ApplyOnlinePage.updateIncomeDetails();
	await ApplyOnlinePage.updateExpencesDetails();
	await ApplyOnlinePage.cancelAppliation();
});


Then(/^User validares the application is cancelled$/, async () => {
	await ApplyOnlinePage.validateApplicationCancellation();
});
