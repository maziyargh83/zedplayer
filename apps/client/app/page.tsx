"use client";
import { Button } from "@repo/ui/src/components/ui/button";
import { aria2Connection } from "lib/aria2/Aria2";

export default function Page() {
  const addDownload = async () => {
    // "use server";
    const res = await aria2Connection.getGlobalStat();
    console.log(res);
  };
  return (
    // <form action={addDownload}>
    <Button type="submit" onClick={addDownload}>
      here
    </Button>
    // </form>
  );
}
