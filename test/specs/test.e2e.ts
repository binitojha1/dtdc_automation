/**
 * test with page objects
 */
import LoginPage from '../pageobjects/login.page'
import SecurePage from '../pageobjects/secure.page'



describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        const web = browser;
       // const mobile = browser["myMobile"];
        //browser.select('chrome');
        // await LoginPage.open()

        // await LoginPage.login('tomsmith', 'SuperSecretPassword!')
        // await expect(SecurePage.flashAlert).toBeExisting()
        // await expect(SecurePage.flashAlert).toHaveTextContaining(
        //     'You logged into a secure area!')

            await browser.url('https://www.amazon.in/');
            const searchInput = $('#twotabsearchtextbox');

            // Clear the existing value (optional)
            await searchInput.clearValue();
          
            // Set the new value
            await searchInput.setValue('your search text');

       
       //const { mobile } = browser;

       // Launch the mobile app
       // mobile.launchApp();
       
    })
})

