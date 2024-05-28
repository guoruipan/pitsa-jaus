"use server";

// TODO wip

import fs from "fs";

export async function saveFile(file: File) {
  const data = await file.arrayBuffer();
  fs.appendFile(`#/public/${file.name}`, Buffer.from(data), () => {});
}
