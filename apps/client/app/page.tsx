import { Button } from "@repo/ui/src/components/ui/button";
import { aria2Connection } from "lib/aria2/Aria2";
import { aria2 } from "maria2";
export default async function Page() {
  const v = await aria2.getVersion(aria2Connection);
  console.log("====================================");
  console.log(v);
  console.log("====================================");
  return <Button>{v.version}</Button>;
}
