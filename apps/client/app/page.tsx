import { Button } from "@repo/ui/src/components/ui/button";
import { aria2Connection } from "lib/aria2/Aria2";
import { aria2 } from "maria2";
export default async function Page() {
  const v = await aria2.getVersion(aria2Connection);
  const addDownload = async () => {
    "use server";
    const res = await aria2.addUri(aria2Connection, [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Piquet_-_Brabham-BMW_BT_54_1985-08-02.jpg/440px-Piquet_-_Brabham-BMW_BT_54_1985-08-02.jpg",
    ]);
    console.log("====================================");
    console.log(res);
    console.log("====================================");
  };
  return (
    <form action={addDownload}>
      <Button type="submit">{v.version}</Button>;
    </form>
  );
}
