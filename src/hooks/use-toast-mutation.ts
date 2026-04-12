"use client";

import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { ExternalToast, toast } from "sonner";

interface ToastMutationOptions<TData, TError, TVariables> extends Omit<
  UseMutationOptions<TData, TError, TVariables>,
  "onSuccess" | "onError"
> {
  successMessage?: string | ((data: TData) => string);
  errorMessage?: string | ((error: TError) => string);
  onSuccessWithToast?: (data: TData) => void;
}

/**
 * Custom hook that wraps useMutation with built-in toast notifications
 * Eliminates repetitive toast handling code across mutation-based components
 *
 * @param options - Mutation options with optional toast messages and success callback
 * @param toastOptions - Shadcn toast (sonner) options
 *
 * @returns The mutation object from useMutation
 *
 * @example
 * // With variables and toast options
 * const { mutate, isPending } = useToastMutation({
 *   mutationFn: async (id: string) => await addToWishlist(id),
 *   successMessage: "Added to wishlist!",
 *   errorMessage: (error) => error.message,
 *   onSuccessWithToast: (data) => setWishlist(data),
 * }, { action: { label: "login" } });
 *
 * // Without variables or toast options
 * const { mutate, isPending } = useToastMutation({
 *  mutationFn: async () => await clearCart(),
 *  successMessage: "Cart cleared",
 *  errorMessage: (error) => error.message,
 *  onSuccessWithToast: (data) => setCart(data),
 * });
 */
function useToastMutation<TData, TError extends Error, TVariables = void>(
  options: ToastMutationOptions<TData, TError, TVariables>,
  toastOptions?: ExternalToast,
) {
  const {
    successMessage = "Operation successful",
    errorMessage = "An error occurred",
    onSuccessWithToast,
    ...mutationOptions
  } = options;

  return useMutation<TData, TError, TVariables>({
    ...mutationOptions,
    onSuccess: (data) => {
      const message =
        typeof successMessage === "function"
          ? successMessage(data)
          : successMessage;
      toast.success(message);

      if (onSuccessWithToast) {
        onSuccessWithToast(data);
      }
    },
    onError: (error) => {
      const message =
        typeof errorMessage === "function" ? errorMessage(error) : errorMessage;
      toast.error(message, toastOptions);
    },
  });
}

export { useToastMutation };
