import path from "path";
import fs from "fs";
import { s3 } from "lib/s3/S3";
import { Button } from "@repo/ui/src/components/ui/button";
export default async function page() {
  const cwd = process.cwd();
  const downloadFolderPath = path.join(cwd, "../../downloads");

  // const files = await fs.promises.readdir(downloadFolderPath);

  const uploadFiles = async () => {
    "use server";
    try {
      const res = s3.listBuckets().promise();
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    // for (const file of files) {
    //   const filePath = path.join(downloadFolderPath, file);

    //   const fileStream = fs.createReadStream(filePath);

    //   const uploadParams = {
    //     Bucket: process.env.BUCKET!,
    //     Key: file,
    //     Body: fileStream,
    //   };

    //   try {
    //     const res = await s3.upload(uploadParams).promise();
    //     console.log(res);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  };

  return (
    <form action={uploadFiles}>
      <Button type="submit">click</Button>
    </form>
  );
}
