import axios from "axios";

export default async function getAllLinks() {
  const res = await axios("https://backend.kodehash.com/blog/category");

  if (res.status !== 200) return undefined;
  let data = res.data.data.data;
  return data;
}
