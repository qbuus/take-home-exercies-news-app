import { NewsArray } from "../models/News";

// async function fetchData(
//   input: RequestInfo,
//   init?: RequestInit
// ) {
//   const response = await fetch(input, init);
//   if (response.ok) {
//     return response;
//   } else {
//     const errorBody = await response.json();
//     const errorMesssage = errorBody.error;

//     if (response.status === 401) {
//       throw new Error("Error status 401" + errorMesssage);
//     } else if (response.status === 409) {
//       throw new Error("Error status 409" + errorMesssage);
//     } else {
//       throw new Error(
//         "Request failed with status" +
//           response.status +
//           "message:" +
//           errorMesssage
//       );
//     }
//   }
// }

export async function fetchNewsData(country: string) {
  async function fetchNews() {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.REACT_APP_KEY}`
    );
    return response.json();
  }
  return fetchNews();
}
