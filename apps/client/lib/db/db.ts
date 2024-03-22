import { JSONFilePreset } from "lowdb/node";
import path from "path";
const dbPath = path.join(process.cwd(), "db.json");
export const db = await JSONFilePreset(dbPath, { folders: [] });
