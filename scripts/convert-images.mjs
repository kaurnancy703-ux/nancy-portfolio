import sharp from "sharp";
import { readdir } from "node:fs/promises";
import path from "node:path";

const folder = "src/assets/projects";
const files = await readdir(folder);

for (const file of files) {
  if (!file.toLowerCase().endsWith(".png")) continue;

  const input = path.join(folder, file);
  const output = path.join(
    folder,
    file.replace(/\.png$/i, ".webp")
  );

  await sharp(input)
    .webp({ quality: 82, effort: 6 })
    .toFile(output);

  console.log(`Converted: ${file} → ${path.basename(output)}`);
}

console.log("All project images converted!");