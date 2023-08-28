import ReponseError from "@/errors/Response";

const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://api.newsexplorer.ozansevkin.dev"
    : "http://localhost:3002";

interface PostRequestArg {
  arg: {
    [x: string]: any;
  };
}

export async function checkResponse(res: Response) {
  if (res.ok) return await res.json();

  const info = await res.json();
  const status = res.status;

  throw new ReponseError(
    "An error occurred while fetching the data.",
    info,
    status,
  );
}

async function request(path: string, options: RequestInit | undefined) {
  const res = await fetch(`${baseUrl}${path}`, options);

  return checkResponse(res);
}

export async function sendPostRequest(path: string, { arg }: PostRequestArg) {
  return await request(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });
}

export async function sendPostRequestWithToken(
  path: string,
  { arg }: PostRequestArg,
) {
  const { token, ...rest } = arg;

  return await request(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(rest),
  });
}

export async function sendGetRequestWithToken(
  path: string,
  { arg }: PostRequestArg,
) {
  const { token } = arg;

  return await request(path, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}

export async function sendDeleteRequestWithToken(
  path: string,
  { arg }: PostRequestArg,
) {
  const { token } = arg;

  return await request(path, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
}
