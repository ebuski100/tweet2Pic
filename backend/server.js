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

  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage({
    viewport: { width: 900, height: 1200 },
  });

  try {
    const embedUrl = `https://publish.twitter.com/?query=${encodeURIComponent(
      tweetUrl,
    )}`;

    await page.goto(embedUrl, { waitUntil: "networkidle" });

    await page.emulateMedia({
      colorScheme: theme === "dark" ? "dark" : "light",
    });

    const tweet = await page.waitForSelector("twitter-widget", {
      timeout: 15000,
    });

    const imageBuffer = await tweet.screenshot({ type: "png" });

    const base64 = imageBuffer.toString("base64");

    await browser.close();

    res.json({
      image: `data:image/png;base64,${base64}`,
    });
  } catch (err) {
    console.error(err);
    await browser.close();
    res.status(500).json({ error: "Failed to render tweet" });
  }
});
