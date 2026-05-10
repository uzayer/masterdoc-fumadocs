import puppeteer from "puppeteer";
import { PDFDocument } from "pdf-lib";
import { mkdir, writeFile } from "fs/promises";
import path from "path";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const OUTPUT_PATH = path.join(process.cwd(), "pdfs", "masterdoc.pdf");

// Pages in docs order — home first, then sidebar order from meta.json
const PAGES = [
  "/",
  "/preface",
  "/academic-record",
  "/history",
  "/projects",
  "/projects/research-lab",
  "/projects/organisational-systems",
  "/projects/standalone",
  "/reference",
];

async function exportPage(
  browser: Awaited<ReturnType<typeof puppeteer.launch>>,
  route: string
): Promise<Uint8Array> {
  const page = await browser.newPage();
  const url = `${BASE_URL}${route}`;

  await page.goto(url, { waitUntil: "networkidle2" });
  const pdf = await page.pdf({
    format: "A4",
    margin: { top: "20mm", bottom: "20mm", left: "15mm", right: "15mm" },
    printBackground: true,
  });

  console.log(`  ✓ ${route}`);
  await page.close();
  return pdf;
}

async function main() {
  await mkdir(path.dirname(OUTPUT_PATH), { recursive: true });

  const browser = await puppeteer.launch({ headless: true });

  try {
    console.log(`Exporting ${PAGES.length} pages…`);

    // Export sequentially to preserve order and avoid overwhelming the server
    const pdfBytes: Uint8Array[] = [];
    for (const route of PAGES) {
      pdfBytes.push(await exportPage(browser, route));
    }

    console.log("\nMerging into single PDF…");
    const merged = await PDFDocument.create();

    for (const bytes of pdfBytes) {
      const src = await PDFDocument.load(bytes);
      const pages = await merged.copyPages(src, src.getPageIndices());
      pages.forEach((p) => merged.addPage(p));
    }

    await writeFile(OUTPUT_PATH, await merged.save());
    console.log(`\nSaved → pdfs/masterdoc.pdf`);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
