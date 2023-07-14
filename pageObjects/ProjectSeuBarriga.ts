import { Locator, Page } from "@playwright/test";

export class LoginAndMovement {
  readonly page: Page;
  readonly clickOnLink: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly Button: Locator;
  readonly CadastrateAnMoviment: Locator;
  readonly description: Locator;
  readonly value: Locator;
  readonly interest: Locator;
  readonly ButtonSave: Locator;
  readonly Despesa: Locator;
  readonly Settings: Locator;
  readonly Count: Locator;
  readonly NameOfAccount: Locator;

  constructor(page: Page) {
    this.page = page;
    this.clickOnLink = page.locator('a[href="/login"]');
    this.email = page.locator('input[data-test="email"]');
    this.password = page.locator('input[data-test="passwd"]');
    this.Button = page.locator('button[type="submit"]');
    this.CadastrateAnMoviment = page.locator(
      'i[title="Cadastrar movimentação"]'
    );
    this.description = page.locator("#descricao");
    this.value = page.locator('input[type="number"]');
    this.interest = page.locator("#envolvido");
    this.ButtonSave = page.locator('button[alt="Salvar"]');
    this.Despesa = page.locator('button[data-test="tipo-despesa"]');
    this.Settings = page.locator('i[title="settings"]');
    this.Count = page.locator('a[href="/contas"]');
    this.NameOfAccount = page.locator('input[data-test="nome"]');
  }

  async visit() {
    await this.page.goto("https://barrigareact.wcaquino.me/");
  }

  async clickToLink() {
    await this.clickOnLink.click();
  }

  async PutYourData(data: { email: string; password: string }) {
    await this.email.type(data.email);
    await this.password.type(data.password);
  }

  async ClickToRegistrer() {
    await this.Button.click();
  }

  async clickOnMoviment() {
    await this.CadastrateAnMoviment.click();
  }

  async DataOfCreateMovement(data: {
    description: string;
    value: string;
    interest: string;
  }) {
    await this.description.type(data.description);
    await this.value.type(data.value);
    await this.interest.type(data.interest);
  }

  async ClickToSave() {
    await this.ButtonSave.click();
  }

  async ClickOnDespesa() {
    await this.Despesa.click();
  }

  async ClickOnCreateACount() {
    await this.Settings.click();
    await this.Count.click();
  }

  async FillNameOfAccount(data: { NameOfAccount: string }) {
    await this.NameOfAccount.type(data.NameOfAccount);
  }
}
