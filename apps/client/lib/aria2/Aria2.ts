import { WebSocket } from "@repo/libaria2";

export const aria2Connection = new WebSocket.Client({
  host: "localhost",

  port: 6800,
  auth: {
    secret: "P3TERX",
  },
});
