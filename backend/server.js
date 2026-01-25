import express from "express";
import cors from "cors";
import { chromium } from "playwright";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/tweet-to-image", async (req, res) => {
  const { tweetUrl, theme = "light" } = req.body;

  if (!tweetUrl) {
    return res.status(400).json({ error: "Tweet URL required" });
  }

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage({
    viewport: { width: 900, height: 1200 },
  });

  try {
    await page.goto(tweetUrl, { waitUntil: "networkidle" });

    // Remove login modal if it appears
    await page.addStyleTag({
      content: `
        div[role="dialog"] { display: none !important; }
        body { overflow: auto !important; }
      `,
    });

    // Dark / light mode
    await page.emulateMedia({
      colorScheme: theme === "dark" ? "dark" : "light",
    });

    // Wait for the tweet
    const tweet = await page.waitForSelector('article[data-testid="tweet"]', {
      timeout: 15000,
    });

    const imageBuffer = await tweet.screenshot({
      type: "png",
    });

    await browser.close();

    res.setHeader("Content-Type", "image/png");
    res.send(imageBuffer);
  } catch (err) {
    await browser.close();
    res.status(500).json({ error: "Failed to render tweet" });
  }
});

app.listen(4000, () => {
  console.log("Backend running on http://localhost:4000");
});
