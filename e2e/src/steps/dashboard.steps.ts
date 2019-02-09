import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { HeroesPage } from '../pages/heroes.po';
import { DashboardPage } from '../pages/dashboard.po';

let appPage: AppPage;
let heroesPage: HeroesPage
let dashboardPage: DashboardPage;

Before(() => {
  appPage = new AppPage();
  heroesPage = new HeroesPage();
  dashboardPage = new DashboardPage();
});

Given(/^Dean is on the homepage$/, async () => {
    await appPage.navigateTo();
});

Then(/^Dean should see a list of his top 4 heroes$/, async () => {
  expect(await appPage.getTopHeroes()).to.equal(
`Narco
Bombasto
Celeritas
Magneta`);
});

Given(/^Narco is one of Deans heroes$/, async () => {
    heroesPage.navigateTo();
    expect(await heroesPage.doesHeroExist('Narco')).to.equal(true);
});

When('Dean deletes Narco', async () => {
    (await heroesPage.clickHeroDeleteButtonByName('Narco'));
});

Then(/^Narco should not display on the dashboard$/, async ()  => {
    heroesPage.navigateToDashboard();
    // browser.ignoreSynchronization = false;
    // browser.driver.sleep(2000);
    // browser.ignoreSynchronization = true;
    expect((await dashboardPage.getTopHeroes()))
        .to
        .equal(
`Bombasto
Celeritas
Magneta
RubberMan`
        );
});
