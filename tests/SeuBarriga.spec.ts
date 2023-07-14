import { test } from "@playwright/test";
import { LoginAndMovement } from "../pageObjects/ProjectSeuBarriga";

test.describe("Seu Barriga tests", () => {
  let seubarriga: LoginAndMovement;
  const data = require("../Data/data.json");

  test.beforeEach(async ({ page }) => {
    seubarriga = new LoginAndMovement(page);
    await seubarriga.visit();
    await seubarriga.clickToLink();
    await seubarriga.PutYourData(data);
    await seubarriga.ClickToRegistrer();
  });

  test("Create a movement", async ({ page }) => {
    await seubarriga.clickOnMoviment();
    await seubarriga.DataOfCreateMovement(data);
    await seubarriga.ClickOnDespesa();
    await seubarriga.ClickToSave();
  });

  test("Create an account", async ({ page }) => {
    await seubarriga.ClickOnCreateACount();
    await seubarriga.FillNameOfAccount(data);
    await seubarriga.ClickToSave();
  });
});
