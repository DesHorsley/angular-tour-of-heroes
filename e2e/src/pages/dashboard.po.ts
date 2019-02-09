import { browser, by, element } from 'protractor';

export class DashboardPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  /** Returns the names of the heros displayed as Top Heros
  * Could be improved on by comma seperating the list rather than a line seperated list produced by
  * getText()
  * @example returns a list with new lines seperating heros:
  * `Bombasto
Celeritas
Magneta
RubberMan`
  */
  getTopHeroes() {
    return element(by.css('.grid-pad')).getText();
  }
}
