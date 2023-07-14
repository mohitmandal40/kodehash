import axios from "axios";

export default async function getCategoryId(id) {
  const res = await axios(
    `https://backend.kodehash.com/blog/blog-list?category_id=${id}`
  );

  if (res.status !== 200) return undefined;
  let data = res.data.data;
  return data;
}
