import axios, { AxiosRequestConfig } from "axios";

interface ApiCallOptions {
  path: string;
  requestType?: string;
  payload?: any;
  usePathAsUrl?: boolean;
}

interface ApiResponse {
  success: boolean;
  data?: any;
  error?: string;
}

export async function makeApiCall({
  path = "",
  requestType = "GET",
  payload = "",
  usePathAsUrl = false,
}: ApiCallOptions): Promise<ApiResponse> {
  if (requestType === "GET" && typeof payload === "object" && payload)
    requestType = "POST";

  const url = usePathAsUrl ? path : `BASE_URL` + path;
  const headers: Record<string, string> = {
    Accept: "*/*",
  };
  if (payload && requestType !== "GET")
    headers["Content-Type"] = "application/json";

  try {
    const reqOptions: AxiosRequestConfig = {
      method: requestType,
      url,
      headers,
    };
    if (payload) reqOptions.data = payload;

    let axiosRes = await axios(reqOptions);
    if (!axiosRes.data)
      return {
        success: false,
        error: axiosRes?.data?.message || axiosRes?.data?.error,
      };

    return { success: true, data: axiosRes.data };
  } catch (err) {
    console.error(
      `axios req[${path}] failed:`,
      (err as any)?.response?.data || (err as Error).message
    );

    return {
      success: false,
      error: (err as any)?.response?.data || (err as Error).message,
    };
  }
}
