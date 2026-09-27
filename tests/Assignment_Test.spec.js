const { test, expect } = require('@playwright/test')



test ("Assignment Test", async({page})=>
{

    const URL = "https://rahulshettyacademy.com/client/#/auth/login";
    const Register_btn = page.locator('a.btn1');
    const First_Name = page.locator('input#firstName');
    const Last_Name = page.locator('input#lastName');
    const Email = page.locator('input#userEmail');
    const Phone_No = page.locator('input#userMobile');
    const Password = page.locator('input#userPassword');
    const Confirm_Password = page.locator('input#confirmPassword');
    const Gender = page.locator("input[value='Male']");
    const Eighteen_plus = page.locator("input[type='checkbox']");
    const SignIn_btn = page.locator('input#login');
    const Login_Email = page.locator('input#userEmail');
    const Login_Password = page.locator('input#userPassword');
    const Login_btn = page.locator('input#login');
    const Fist_Elementvalue = page.locator('div.card-body b');
    const already_signin_alert = page.locator('text=user already');



await page.goto(URL);
await Register_btn.click();
await First_Name.fill("Sagar");
await Last_Name.fill("Patil");
await Email.fill("qa.patilsagar@gmail.com");
await Phone_No.fill("7414904075");
await Password.fill("Sagar921");
await Confirm_Password.fill("Sagar921");
await Gender.click();
await Eighteen_plus.click();
await SignIn_btn.click();

if(await already_signin_alert.isVisible){
   await page.goBack();
console.log("already_signin_alert found");
}

await Login_Email.fill("qa.patilsagar@gmail.com");
await Login_Password.fill("Sagar921");
await Login_btn.click();

await page.waitForLoadState('networkidle'); // wait for call app Api

const first_text_value = await Fist_Elementvalue.first().waitFor().textContent();

console.log(first_text_value);
 expect(first_text_value).toContain('ADIDAS ORIGINAL');

});