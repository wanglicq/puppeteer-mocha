const puppeteer = require('puppeteer');
const expect = require('chai').expect;
const pageObject = require('../pages/page');

describe('sample test', async () => {
    let browser, page;
    const opts = {
        //headless: false,
        //slowMo: 10,
        devtools: true,
    };

    before(async () => {
        browser = await puppeteer.launch(opts);
        page = await browser.newPage();
        pageObject._init(page);
    });

    after(async () => {
        await browser.close();
    });

    it('Website should load', async () => {
        const response = await page.goto('https://www.thoughtworks.com/', {waitUntil: 'domcontentloaded'});
        expect(response.status()).to.equal(200);

        const [res1] = await Promise.all([
            page.waitForNavigation(),
            page.click(pageObject.inventingAndDelivering["25 years"]),
        ]);

        //click trigger navigation
        /*const navigation = await page.waitForNavigation({'waitUntil':'load'});
        await page.click('something');
        await navigation;*/

        //click example
        await page.waitForSelector(pageObject.thankYou);
        const thankYouTitle = await page.$eval(pageObject.thankYou, el => el.textContent);
        expect(thankYouTitle).to.equal('Thank you for 25 amazing years');

        await page.type(pageObject.search.searchBar, 'selenium');
        const [res2] = await Promise.all([
            page.waitForNavigation(),
            await page.click(pageObject.search.searchButton),
    ]);
        //debug example
        //await page.evaluate(() => {debugger;});

        await page.waitForSelector(pageObject.seleniumBirth);
        /*const seleniumBirth = await page.$eval(pageObject.seleniumBirth, el => el.textContent);
        expect(seleniumBirth).to.equal('Happy 10th Birthday, Selenium | ThoughtWorks');*/


    }).timeout(0);//this way can disable timeout, or set up timeout in package.json
});