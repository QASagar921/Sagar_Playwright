const {test, expect} = require('@playwright/test')



test('First Playwright test with browser launch', async()=>
{
 const context = browser.newContext();
 const newPage =  await context.newPage();

await page.goto("https://www.google.com/");

await expect(page).toHaveTitle("Google");
    
}); 


test('Login Test', async({page})=>
{

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 await page.locator("input#username").type("rahulshettyacademy");

 await page.locator("input#password").fill("Learning@830$3mK2");

 await page.locator("#signInBtn").click();

 await page.close();

}); 


test('Incorrect credencial login test ', async({page})=>
{

 await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

 await page.locator("input#username").type("rahulshettyacademy");

 await page.locator("input#password").fill("Learning");

 await page.locator("#signInBtn").click();
 
 const  alert_text = await page.locator(".alert.alert-danger.col-md-12").textContent();

 console.log(alert_text);

await expect(alert_text).toContain("Incorrect login");

}); 

test('Validate multiple Elements from page', async({page})=>
{
    const URL = "https://rahulshettyacademy.com/loginpagePractise/";
    const Username =page.locator("input#username");
    const Password = page.locator("input#password");
    const SignIn_btn =  page.locator("#signInBtn");

 await page.goto(URL);
 await Username.type("rahulshetty");
 await Password.fill("Learning124");
 await SignIn_btn.click();

 const alert_text = await page.locator(".alert.alert-danger.col-md-12").textContent();
 await expect(alert_text).toContain("Incorrect");

 await Username.fill("");
 await Username.fill("rahulshettyacademy");
 await Password.fill("");
 await Password.fill("Learning@830$3mK2");
 await SignIn_btn.click();

//  console.log(await page.locator("div.card-body a").textContent());  // test getting failed with list of element

console.log(await page.locator("div.card-body a").nth(0).textContent());

console.log(await page.locator("div.card-body a").nth(1).textContent());

console.log(await page.locator("div.card-body a").first().textContent());

console.log(await page.locator("div.card-body a").last().textContent());

}); 



test('Validate list of Elements', async({page})=>
{
    const URL = "https://rahulshettyacademy.com/loginpagePractise/";
    const Username =page.locator("input#username");
    const Password = page.locator("input#password");
    const SignIn_btn =  page.locator("#signInBtn");
    const Card_title = page.locator("div.card-body a");

 await page.goto(URL);
 await Username.fill("rahulshettyacademy");
 await Password.fill("Learning@830$3mK2");
 await SignIn_btn.click();

//  console.log(await page.locator("div.card-body a").textContent());
 console.log(await Card_title.nth(0).textContent());

const all_Titles = await Card_title.allTextContents();
console.log(all_Titles);

}); 


test.only("UI Controller", async({page})=>
{
    const URL = "https://rahulshettyacademy.com/loginpagePractise/";
    const Username =page.locator("input#username");
    const Password = page.locator("input#password");
    const SignIn_btn =  page.locator("#signInBtn");
    const Card_title = page.locator("div.card-body a");
    const dropdown = page.locator("select.form-control");
    const select_radio_user = page.locator("input#usertype");
    const alert = page.locator("button#okayBtn");



 await page.goto(URL);
 await Username.fill("rahulshettyacademy");
 await Password.fill("Learning@830$3mK2");
 await dropdown.selectOption("Student");

 await select_radio_user.last().click();
 await alert.click();

 await SignIn_btn.click();

 await page.pause();



});

