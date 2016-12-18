'use strict';

import webdriver from 'selenium-webdriver';

export default class DriverBuilder {
  constructor() {
    this._driver = new webdriver.Builder()
      .usingServer('http://localhost:4444/wd/hub')
      .forBrowser('chrome')
      .build();
  }

  get driver() {
    return this._driver;
  }

  async quit() {
    return this._driver.quit();
  }

}
