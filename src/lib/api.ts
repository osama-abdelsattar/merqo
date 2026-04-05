type SearchParams = Record<
  string,
  string | string[] | number | boolean | undefined | null
>;

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ||
  "https://ecommerce.routemisr.com/api/v1";

function buildApiUrl(
  endpoints?: string[],
  searchParams?: SearchParams,
): string {
  let path = "";
  if (endpoints && endpoints.length > 0) {
    path = endpoints
      .map((endpoint) => endpoint.replace(/^\/+|\/+$/g, ""))
      .filter(Boolean)
      .join("/");
  }

  const urlString = path ? `${API_BASE_URL}/${path}` : API_BASE_URL;
  const url = new URL(urlString);

  if (searchParams) {
    Object.entries(searchParams).forEach(([key, value]) => {
      if (value === undefined || value === null) return;

      if (Array.isArray(value)) {
        value.forEach((val) => url.searchParams.append(key, String(val)));
      } else {
        url.searchParams.append(key, String(value));
      }
    });
  }
  return url.toString();
}

async function fetchApi<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(url, { cache: "force-cache" });
    const { data } = await response.json();

    return data;
  } catch {
    return null;
  }
}

export { API_BASE_URL, buildApiUrl, fetchApi };
