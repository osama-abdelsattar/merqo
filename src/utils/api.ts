type SearchParams = Record<
  string,
  string | string[] | number | boolean | undefined | null
>;

export function getAPI(
  endpoints?: string[],
  searchParams?: SearchParams,
): string {
  const baseURL = "https://ecommerce.routemisr.com/api/v1";

  let path = "";
  if (endpoints && endpoints.length > 0) {
    path = endpoints
      .map((endpoint) => endpoint.replace(/^\/+|\/+$/g, ""))
      .filter(Boolean)
      .join("/");
  }

  const urlString = path ? `${baseURL}/${path}` : baseURL;
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
  console.log(url.toString());
  return url.toString();
}
