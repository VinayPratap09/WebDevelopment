const puppeteer = require("puppeteer");
//const id = "kaleenbhaiya___07";
const id = "hovih38053@0ranges.com";
const pw = "qwerty@123";
const search="pepCoding";
(async function () {
    try{
        let browser = await puppeteer.launch({
          headless: false,
          defaultViewport: null,
          args: ["--start-maximized"],
         // executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        });
        let pages = await browser.pages();
        let tab = pages[0];
        await tab.goto("https://www.instagram.com/");
        await tab.waitForSelector('input[name="username"]');
        await tab.type('input[name="username"]', id);
        await tab.type('input[name="password"]', pw);
        await tab.click('button[type="submit"]');
        await tab.waitForSelector('svg[aria-label="Home"]');
       //await tab.goto("https://www.instagram.com/pepcoding/");
        //await tab.click('button.sqdOP.yWX7d.y3zKF');

      await tab.waitForSelector('button.sqdOP.yWX7d.y3zKF');
        await tab.click('button.sqdOP.yWX7d.y3zKF');
        await tab.waitForSelector('button.aOOlW.HoLwm');
        await tab.click('button.aOOlW.HoLwm');
        await tab.waitForSelector('input[placeholder="Search"]');
        await tab.type('input[placeholder="Search"]',search);
        //await tab.waitForSelector('div[aria-labelledby="f3d3ba289f87258 f76ed9b73c697 f140a85dcbfc79"]');
        //await tab.click('div[aria-labelledby="f3d3ba289f87258 f76ed9b73c697 f140a85dcbfc79"]');
       // search 
       await tab.waitForSelector('.fuqBx a[href="/pepcoding/"]');
       await tab.click('.fuqBx a[href="/pepcoding/"]');
       // click
       await tab.waitForSelector('._9VEo1.T-jvg');
       await tab.click('._9VEo1.T-jvg');
       //open Post
       //await tab.waitForSelector('.v1Nh3.kIKUG._bz0w:first-child');
       await tab.waitForSelector('.v1Nh3.kIKUG._bz0w:first-child');
       await tab.click('.v1Nh3.kIKUG._bz0w:first-child');
       // //like .QBdPU .FY9nT
       //await navigationPromise;

       await tab.waitForSelector('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
       await tab.click('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
       await tab.keyboard.press('Enter');
       //right click for more posts
       // await navigationPromise;
       await tab.waitForSelector('.coreSpriteRightPaginationArrow');
       await tab.click('.coreSpriteRightPaginationArrow');
       for(let i=0;i<10;i++)
       {
           await tab.waitForSelector('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
           await tab.click('.fr66n button.wpO6b .QBdPU  svg[aria-label="Like"]');
           
           await tab.waitForSelector('.coreSpriteRightPaginationArrow');
            await tab.click('.coreSpriteRightPaginationArrow');
       }
        console.log("Successfull");
    }
    catch(err){
        console.log(err);
    }
})();
