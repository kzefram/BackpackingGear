import { chromium } from "playwright";

(async () => {
  try {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    // Ensure localStorage is set before any page script runs
    await page.addInitScript(() => {
      localStorage.setItem("tt_token", "demo-token");
      localStorage.setItem(
        "user_profile",
        JSON.stringify({ email: "you@example.com", units: "metric" })
      );
    });

    // Adjust URL/port if your dev server runs on a different port
    const url = process.env.URL || "http://localhost:5173/profile";
    console.log("Opening", url);
    await page.goto(url, { waitUntil: "networkidle" });

    const out = process.env.OUT || "profile-screenshot.png";
    await page.screenshot({ path: out, fullPage: true });
    console.log("Saved", out);

    await browser.close();
  } catch (err) {
    console.error("Screenshot failed:", err.message || err);
    process.exit(1);
  }
})();
