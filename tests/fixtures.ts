import {test as base} from '@playwright/test';

export const test = base.extend({
    examplePage: async ({page}, use) => {
        await page.goto('https://playwright.dev/');
        await use(page);
    }
});

export {expect} from '@playwright/test';