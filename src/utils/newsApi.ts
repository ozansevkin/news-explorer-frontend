export default async function searchNews(searchValue: string) {
  const ONE_WEEK = 7;
  const currentDate = new Date();
  const toDate = currentDate.toISOString();
  const fromDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate() - ONE_WEEK,
  ).toISOString();

  const API_KEY = "25ba9a2cfb704e30aa9927217a7ec42f";

  const res = await fetch(
    `https://newsapi.org/v2/everything?from=${fromDate}&to=${toDate}&q=${searchValue}&language=en&apiKey=${API_KEY}`,
  );

  if (!res.ok) {
    interface ReponseError extends Error {
      info: object;
      status: number;
    }

    const error = new Error(
      "An error occurred while fetching the data.",
    ) as ReponseError;
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return await res.json();
}
