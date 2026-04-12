type SearchParams = Record<
  string,
  string | string[] | number | boolean | undefined | null
>;

interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage?: number;
  prevPage?: number;
}

interface ApiResponse<T> {
  results: number;
  metadata: PaginationMetadata;
  data: T;
}

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL!;

function getSiteBaseUrl() {
  if (typeof window !== "undefined") return window.location.origin; // Browser
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`; // Vercel Server
  return `http://localhost:3000`; // Local Dev
}

function buildApiUrl(
  endpoints?: string[],
  searchParams?: SearchParams,
  version: "v1" | "v2" = "v1",
): string {
  let path = "";
  if (endpoints && endpoints.length > 0) {
    path = endpoints
      .map((endpoint) => endpoint.replace(/^\/+|\/+$/g, ""))
      .map((endpoint) => endpoint.replace(/\.\./g, "")) // Prevent path traversal
      .filter(Boolean)
      .join("/");
  }

  const baseUrl = API_BASE_URL + version;
  const urlString = path ? `${baseUrl}/${path}` : baseUrl;
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

async function fetchApi<T>(
  url: string,
  headers?: HeadersInit,
  options?: RequestInit,
): Promise<T | null> {
  // SSRF Protection: Ensure fetch only targets the designated API
  if (!url.startsWith(API_BASE_URL)) {
    console.error("Security Error: Attempted to fetch unauthorized URL", url);
    return null;
  }

  try {
    const response = await fetch(url, {
      cache: "force-cache",
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });

    // Content-Type validation to prevent executing malicious non-JSON bodies
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
      return await response.json();
    }

    return null;
  } catch {
    return null;
  }
}

export {
  API_BASE_URL,
  getSiteBaseUrl,
  buildApiUrl,
  fetchApi,
  type PaginationMetadata,
  type ApiResponse,
};
