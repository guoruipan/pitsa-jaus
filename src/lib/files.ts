"use server";

import fs from "fs/promises";
import path from "path";

export async function saveFile(formData: FormData) {
  try {
    const file = formData.get("file") as File;
    const filePath = formData.get("filePath") as string;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);

    const uploadPath = path.join(process.cwd(), filePath);
    console.log(uploadPath);

    await fs.writeFile(uploadPath, buffer);
  } catch (error) {
    console.error(error);
  }
}

export async function deleteFile(filePath: string): Promise<boolean> {
  try {
    const deletePath = path.join(process.cwd(), filePath);
    await fs.unlink(deletePath);
    console.log(`File deleted successfully: ${filePath}`);
    return true;
  } catch (error) {
    console.error(`Error deleting file: ${filePath}`, error);
    return false;
  }
}
