import checkDiskSpace from "check-disk-space";

export const diskSpace = async () => {
  const { free, size } = await checkDiskSpace("/");
  return {
    free: free / 1024 / 1024 / 1024,
    size: size / 1024 / 1024 / 1024,
  };
};
