const puppeteer = require('puppeteer');
const fs = require('fs');
const crypto = require('crypto');
const path = require('path');


const TARGET_URL = 'https://www.pascalcoste-shopping.com/esthetique/fond-de-teint.html';
const OUTPUT_IMAGE_PATH = './banner_screenshot.png';
const JSON_OUTPUT_PATH = './banner_data.json';

(async () => {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(TARGET_URL, { waitUntil: 'networkidle2' });

    const bannerSelector = '.sidebar-banner'; // Replace with actual selector for the left banner
    const bannerElement = await page.$(bannerSelector);
    if (bannerElement) {
        await bannerElement.screenshot({ path: OUTPUT_IMAGE_PATH });


        const adDetails = await page.evaluate(banner => {
            const img = banner.querySelector('img');
            const link = banner.querySelector('a');
            return {
                redirection_url: link ? link.href : null,
                img_link: img ? img.src : null
            };
        }, bannerElement);


        const adId = crypto.createHash('md5').update(adDetails.img_link).digest('hex');


        const bannerData = {
            id: adId,
            redirection_url: adDetails.redirection_url,
            img_link: adDetails.img_link,
            image_url: path.resolve(OUTPUT_IMAGE_PATH),
            format: 'Left Side Banner'
        };


        fs.writeFileSync(JSON_OUTPUT_PATH, JSON.stringify(bannerData, null, 4));
        console.log('Banner details saved to', JSON_OUTPUT_PATH);
    } else {
        console.error('Banner element not found!');
    }

    await browser.close();
})();
