import { Builder, Capabilities, By } from "selenium-webdriver"
import { afterAll, beforeAll, describe, expect, test } from "@jest/globals"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
});

afterAll(async () => {
    await driver.quit()
});

const movieInput = "Jurassic Park";

test('Add movie test', async () => {
    await driver.findElement(By.xpath('(//input)')).sendKeys("Jurassic Park\n");
    
    // await driver.findElement(By.xpath('(//button)')).click();
    
    await driver.sleep(2000);
});

//ADVANCED
test('Delete movie', async () => {
    await driver.findElement(By.id('JurassicPark')).click();

    await driver.sleep(1000);
});

test('Confirm message says the right thing', async () => {
    let message = await driver.findElement(By.id('message')).getText()

        
    expect(message).toBe(`${movieInput} deleted!`);
});