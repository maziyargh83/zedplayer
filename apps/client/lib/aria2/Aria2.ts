import { open } from "maria2";

export const aria2Connection = await open(
  new WebSocket("ws://localhost:6800/jsonrpc"),
  {
    secret: "P3TERX",
  }
);
