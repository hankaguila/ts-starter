import { readFile } from "node:fs/promises";

export default async function getJsonPropertyValue(
  jsonPath: string,
  key: string
): Promise<string> {
  try {
    const packageJson = (await readFile(jsonPath, "utf-8")).trim();
    return JSON.parse(packageJson)[key];
  } catch (error: any) {
    console.error(error.message);
    return "";
  }
}
