import { Before, Given, Then, When } from 'cucumber';
import { expect } from 'chai';

import { AppPage } from '../pages/app.po';
import { HeroesPage } from '../pages/heroes.po';
import { DashboardPage } from '../pages/dashboard.po';

let heroesPage: HeroesPage
let dashboardPage: DashboardPage;

Before(() => {
  heroesPage = new HeroesPage();
  dashboardPage = new DashboardPage();
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
    expect((await dashboardPage.getTopHeroes()))
        .to
        .equal(
`Bombasto
Celeritas
Magneta
RubberMan`
        );
});
