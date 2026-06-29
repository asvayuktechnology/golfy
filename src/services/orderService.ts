import { useMutation } from "@tanstack/react-query";
import HttpService from "./httpsService";
import {
  CreateOrderPayload,
  OrderApiResponse,
  VerifyPaymentPayload,
} from "@/types/orderType";

export const createOrder = async (
  payload: CreateOrderPayload
): Promise<OrderApiResponse> => {
  const res = await HttpService.post("/order", payload);
  return res.data;
};

export const verifyPayment = async (
  payload: VerifyPaymentPayload
): Promise<OrderApiResponse> => {
  const res = await HttpService.post("/order/verify", payload);
  return res.data;
};

export const useCreateOrder = () =>
  useMutation({
    mutationFn: createOrder,
  });

export const useVerifyPayment = () =>
  useMutation({
    mutationFn: verifyPayment,
  });
