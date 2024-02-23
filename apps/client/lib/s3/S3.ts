// import { Client } from "minio";

import { S3 } from "aws-sdk";

// export const minio = new Client({
//   accessKey: process.env.ACCESSKEY!,
//   secretKey: process.env.SECRETKEY!,
//   endPoint: process.env.ENDPOINT!,
//   useSSL: true,

//   // pathStyle: true,
// });
export const s3 = new S3({
  accessKeyId: process.env.ACCESSKEY!,
  secretAccessKey: process.env.SECRETKEY!,
  endpoint: process.env.ENDPOINT!,
});
