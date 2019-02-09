import { browser, by, element } from 'protractor';

export class HeroesPage {
    /**
     * Navigates to the heroes page using the browser, this will
     * cause an refresh event and reset volatile app state
     */
    navigateTo() {
        return browser.get('/heroes');
    }

    navigateToDashboard() {
        element(by.linkText('Dashboard')).click();
    }

    /**
     * Fetches all elements with .heroes class and checks if the text of the element contains the heroes name
     * May cause false positives due to the 'contains' matching.
     * @param heroName: text of the hero name to search for
     */
    async doesHeroExist(heroName: string) {
        return (await element(by.css('.heroes')).getText()).includes(heroName);
    }

    /**
     * Fetches a list of Li elements, filters to the one that contans the `heroName` text,
     * finds the delete button in that Li element and clicks it.
     * @param heroName: The text that the function will search for
     */
    clickHeroDeleteButtonByName(heroName: string) {
        return element.all(by.css('li')).filter(function(elem) {
            return elem.getText().then(function(text) {
                return text.includes(heroName);
            });
        }).all(by.css('.delete-button')).first().click();
    }
}
