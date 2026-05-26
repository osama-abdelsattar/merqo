"use server";

import { AccountInfoValues } from "@/lib/schemas/update-user.schema";
import { buildApiUrl } from "@/utils/api.util";
import { getServerToken } from "@/utils/token.util";
import axios from "axios";

interface Response {
  message: string;
  user: {
    name: string;
    email: string;
    role: string;
  };
}

interface Error {
  message: string;
  errors: {
    value: string;
    msg: string;
    param: string;
    location: string;
  };
}

async function changeInfo(data: AccountInfoValues) {
  const url = buildApiUrl(["users", "updateMe"]);

  const token = await getServerToken();
  try {
    const res = await axios.put<Response>(url, data, { headers: { token } });

    return res.data;
  } catch (error) {
    if (axios.isAxiosError<Error>(error)) {
      throw new Error(error.response?.data.errors.msg);
    }
  }
}

export { changeInfo };
