"use server";

import { buildApiUrl } from "@/utils/api.util";
import axios from "axios";

interface Response {
  status?: "success" | "fail";
  statusMsg: "success" | "fail";
  message?: string;
}

async function sendPasswordResetCode(email: string) {
  const url = buildApiUrl(["auth", "forgotPasswords"]);
  const data = { email };

  try {
    const res = await axios.post<Response>(url, data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError<Response>(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to send reset code, please try again",
      );
    }

    throw new Error("Failed to send reset code, please try again");
  }
}

async function verifyPasswordResetCode(resetCode: string) {
  const url = buildApiUrl(["auth", "verifyResetCode"]);
  const data = { resetCode };

  try {
    const res = await axios.post<Response>(url, data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError<Response>(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to verify code, please try again",
      );
    }

    throw new Error("Failed to verify code, please try again");
  }
}

async function resetPassword(email: string, newPassword: string) {
  const url = buildApiUrl(["auth", "resetPassword"]);
  const data = { email, newPassword };

  try {
    const res = await axios.put<{ token: string }>(url, data);

    return res.data;
  } catch (error) {
    if (axios.isAxiosError<Response>(error)) {
      throw new Error(
        error.response?.data?.message ||
          "Failed to reset password, please try again",
      );
    }

    throw new Error("Failed to reset password, please try again");
  }
}

export { sendPasswordResetCode, verifyPasswordResetCode, resetPassword, type Response };
