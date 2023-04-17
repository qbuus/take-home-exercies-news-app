import { NewsArray } from "../models/News";

async function fetchData(
  input: RequestInfo,
  init?: RequestInit
) {
  const response = await fetch(input, init);
  if (response.ok) {
    return response;
  } else {
    const errorBody = await response.json();
    const errorMesssage = errorBody.error;

    if (response.status === 401) {
      throw new Error("Error status 401" + errorMesssage);
    } else if (response.status === 409) {
      throw new Error("Error status 409" + errorMesssage);
    } else {
      throw new Error(
        "Request failed with status" +
          response.status +
          "message:" +
          errorMesssage
      );
    }
  }
}

// const key = process.env.REACT_APP_KEY;

export async function fetchNewsData(country: string) {
  async function fetchNews(): Promise<NewsArray> {
    const response = await fetchData(
      `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=f2d79bd71bc4469691d42f1fec0fbec5`
    );
    return response.json();
  }
  return fetchNews();
}
