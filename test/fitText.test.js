const assert = require('chai').assert;
const puppeteer = require('puppeteer');
const fitText = require('../src/lib/fitText');
const path = require('path');

let HTMLPage = `file:${path.join(__dirname, '../src/index.html')}`;
let page;
let browser;

before(async () => {
  browser = await puppeteer.launch({headless: true});
  page = await browser.newPage();
});

describe('fitText()', () => {

  it('Should return correct font size for short phrase', async () => {
    await page.goto(HTMLPage);
    await page.type('.inputField', 'Hi there');
    const outputDivHandle = await page.$('.outputDiv');
    const outputDivFontSize = await page.evaluate(el => el.style.fontSize, outputDivHandle);
    assert.equal(outputDivFontSize, '27px');
  })

  it('Should return correct font size for long phrase', async () => {
    await page.goto(HTMLPage);
    await page.type('.inputField', 'This is a long phrase');
    const outputDivHandle = await page.$('.outputDiv');
    const outputDivFontSize = await page.evaluate(el => el.style.fontSize, outputDivHandle);
    assert.equal(outputDivFontSize, '22px');
  })

  it('Should return correct font size for a longer phrase', async () => {
    await page.goto(HTMLPage);
    await page.type('.inputField', 'This is an even longer phrase with lots of text');
    const outputDivHandle = await page.$('.outputDiv');
    const outputDivFontSize = await page.evaluate(el => el.style.fontSize, outputDivHandle);
    assert.equal(outputDivFontSize, '9px');
  })
})

after(() => {
  browser.close();
});
