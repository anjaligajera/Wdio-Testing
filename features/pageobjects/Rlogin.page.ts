export default class RegisterPage {
  get username() { return $("#username"); }
  get password() { return $("#password"); }
  get confirmPassword() { return $("#confirmPassword"); }
  get registerBtn() { return $("button[type='submit']"); }

  async open() {
    await browser.url("https://practice.expandtesting.com/register");
  }
}
