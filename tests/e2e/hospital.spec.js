const { test, expect } = require("@playwright/test");

test("Hospital workflow", async ({ page }) => {
  const patientName = `Playwright Patient ${Date.now()}`;

  // 1. Create patient
  await page.goto("http://localhost:3000/patients");

  await page.getByPlaceholder("Full Name")
    .fill(patientName);

  await page.locator('input[name="dateOfBirth"]')
    .fill("2000-01-01");

  await page.getByPlaceholder("Phone")
    .fill("01012345678");

  await page.getByPlaceholder("Email")
    .fill("playwright@test.com");

  await page.getByPlaceholder("Address")
    .fill("Cairo");

  await page.locator('textarea[name="medicalHistory"]')
    .fill("Healthy");

  await page.getByRole("button", { name: "Add Patient" })
    .click();

  await expect(
    page.getByText(patientName)
  ).toBeVisible();


// 2. Book appointment
await page.goto("http://localhost:3000/appointments");

await page.getByPlaceholder("Patient Name")
  .fill(patientName);

await page.getByPlaceholder("Doctor")
  .fill("Dr. Ahmed");

await page.locator('input[name="date"]')
  .fill("2026-07-26");

await page.locator('input[name="time"]')
  .fill("10:00");

await page.getByRole("button", {
  name: "Book Appointment"
}).click();


// 3. Wait for appointment table update
await expect(
  page.getByText(patientName)
).toBeVisible({ timeout: 10000 });


  // 4. Verify dashboard updated
  await page.goto("http://localhost:3000/");

  await expect(
    page.getByTestId("total-patients")
  ).not.toHaveText("0");

  await expect(
    page.getByTestId("total-appointments")
  ).not.toHaveText("0");
});