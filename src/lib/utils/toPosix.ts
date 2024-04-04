import { resolve } from "node:path";

export default function toPosix(path: string): string {
  return resolve(path).replace(/\\/g, "/");
}
