export default async function fetchData(
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
