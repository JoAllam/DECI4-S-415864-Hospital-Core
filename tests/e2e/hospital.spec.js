const { test, expect } = require("@playwright/test");

test("Hospital workflow", async ({ page }) => {
  await page.goto("http://localhost:3000/patients");

  await page.screenshot({
    path: "patients-page.png",
    fullPage: true,
  });

  console.log(await page.title());

  const html = await page.content();
  console.log(html);

  await page.getByPlaceholder("Full Name").fill("Playwright Patient");
  await page.locator('input[name="dateOfBirth"]').fill("2000-01-01");
  await page.getByPlaceholder("Phone").fill("01012345678");
  await page.getByPlaceholder("Email").fill("playwright@test.com");
  await page.getByPlaceholder("Address").fill("Cairo");
  await page.locator('textarea[name="medicalHistory"]').fill("Healthy");

  await page.getByRole("button", { name: "Add Patient" }).click();

  await expect(page.getByText("Playwright Patient")).toBeVisible();
});