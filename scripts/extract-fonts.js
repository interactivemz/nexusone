const fs = require("fs");
const path = require("path");

const inputHtml = path.resolve(__dirname, "..", "nexusone_landing_page.html");
const outDir = path.resolve(__dirname, "..", "public", "fonts");

if (!fs.existsSync(inputHtml)) {
  console.error("Input HTML not found:", inputHtml);
  process.exit(1);
}
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const html = fs.readFileSync(inputHtml, "utf8");

const fontFaceRe = /@font-face\s*{([\s\S]*?)}/g;
let m;
let found = 0;
while ((m = fontFaceRe.exec(html)) !== null) {
  const block = m[1];
  if (!/font-family:\s*'Cottox'/.test(block)) continue;

  // find base64 data
  const srcMatch = block.match(
    /src:\s*url\('\s*data:font\/[\w+-]+;base64,([A-Za-z0-9+/=\n\r]+)'\)/,
  );
  if (!srcMatch) {
    console.warn("No base64 src found in a Cottox @font-face block");
    continue;
  }
  const base64 = srcMatch[1].replace(/\s+/g, "");

  const weightMatch = block.match(/font-weight:\s*([0-9]+)/);
  const weight = weightMatch ? weightMatch[1] : "400";

  const fmtMatch = block.match(/data:font\/(\w+)/);
  const fmt = fmtMatch ? fmtMatch[1] : "otf";
  const ext = fmt === "woff2" ? "woff2" : fmt === "woff" ? "woff" : "otf";

  const outFile = path.join(outDir, `Cottox-${weight}.${ext}`);
  const buf = Buffer.from(base64, "base64");
  fs.writeFileSync(outFile, buf);
  console.log("Wrote", outFile);
  found++;
}

if (found === 0) {
  console.error("No Cottox @font-face blocks with base64 data were found.");
  process.exit(2);
}
console.log("Done. Extracted", found, "font files.");
