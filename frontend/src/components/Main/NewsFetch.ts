import fetchData from "../../network/fetchData";
import { NewsArray } from "../../models/News";

export default async function fetchNewsData(country: string) {
  // const now = new Date();

  // function format(date: Date) {
  //   if (!(date instanceof Date)) {
  //     throw new Error(
  //       'Invalid "date" argument. You must pass a date instance'
  //     );
  //   }
  //   const year = date.getFullYear();
  //   const month = String(date.getMonth() + 1).padStart(2, "0");
  //   const day = String(date.getDate() - 1).padStart(2, "0");

  //   return `${year}-${month}-${day}`;
  // }
  // const dateAgo = format(now);
  const apiKey = process.env.REACT_APP_KEY;

  async function fetchNews(): Promise<NewsArray> {
    const response = await fetchData(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}`
    );
    return response.json();
  }
  return fetchNews();
}
