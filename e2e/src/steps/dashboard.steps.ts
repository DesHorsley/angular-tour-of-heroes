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

Given(/^Dean is on the dashboard$/, async () => {
    await appPage.navigateTo();
});

Then(/^Dean should see a list of his top 4 heroes$/, async () => {
  expect(await appPage.getTopHeroes()).to.equal(
`Narco
Bombasto
Celeritas
Magneta`);
});


