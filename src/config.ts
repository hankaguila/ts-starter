import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { getJsonPropertyValue, toPosix } from "./lib/utils/index.js";

const baseDir = toPosix(
  process.env.INIT_CWD || join(dirname(fileURLToPath(import.meta.url)), "..")
);
const packageJsonPath = `${baseDir}/package.json`;

export const packageMeta = {
  baseDir,
  name: await getJsonPropertyValue(packageJsonPath, "name"),
  version: await getJsonPropertyValue(packageJsonPath, "version")
};
