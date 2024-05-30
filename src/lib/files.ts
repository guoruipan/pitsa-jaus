"use server";

import fs from "fs/promises";
import path from "path";

export async function saveFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const file_id = formData.get("file_id");
    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    const uploadPath = path.join(
      process.cwd(),
      `/public/pizza/${file_id}_${file.name}`,
    );

    console.log(uploadPath);
    await fs.writeFile(uploadPath, buffer);
  } catch (error) {
    console.error(error);
  }
}
