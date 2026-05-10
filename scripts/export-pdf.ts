import puppeteer from "puppeteer";
import { mkdir } from "fs/promises";
import path from "path";

const BASE_URL = "http://localhost:3000";
const OUTPUT_DIR = path.join(process.cwd(), "pdfs");

const PAGES = [
  "/preface",
  "/history",
  "/projects",
  "/projects/research-lab",
  "/projects/organisational-systems",
  "/projects/standalone",
  "/academic-record",
  "/reference",
];

async function exportPage(
  browser: Awaited<ReturnType<typeof puppeteer.launch>>,
  route: string
): Promise<void> {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;
  const slug = route.replace(/^\//, "").replace(/\//g, "-");
  const outputPath = path.join(OUTPUT_DIR, `${slug}.pdf`);

  await page.goto(url, { waitUntil: "networkidle0" });
  await page.pdf({
    path: outputPath,
    format: "A4",
    margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
    printBackground: true,
  });

  console.log(`Exported: ${url} → pdfs/${slug}.pdf`);
  await page.close();
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  const browser = await puppeteer.launch({ headless: true });

  try {
    await Promise.all(PAGES.map((route) => exportPage(browser, route)));
    console.log(`\nAll ${PAGES.length} PDFs saved to pdfs/`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
