import { checkResponse } from "./mainApi";

// TripleTen proxy server
const baseUrl = "https://nomoreparties.co/news";

const API_KEY = "25ba9a2cfb704e30aa9927217a7ec42f";

const ONE_WEEK = 7;
const currentDate = new Date();
const toDate = currentDate.toISOString();
const fromDate = new Date(
  currentDate.getFullYear(),
  currentDate.getMonth(),
  currentDate.getDate() - ONE_WEEK,
).toISOString();

export default async function searchNews(searchValue: string) {
  const res = await fetch(
    `${baseUrl}/v2/everything?from=${fromDate}&to=${toDate}&q=${searchValue}&language=en&apiKey=${API_KEY}`,
  );

  return checkResponse(res);
}
