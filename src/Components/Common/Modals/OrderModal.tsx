"use client";

import { useState, useEffect } from "react";
import { z } from "zod";
import { toastError, toastSuccess } from "@/utils/toast";
import { useCreateOrder, useVerifyPayment } from "@/services/orderService";
import useAppCookies from "@/hook/useCookies";

declare global {
  interface Window {
    Razorpay: any;
  }
}

const orderSchema = z.object({
  adults: z
    .string()
    .min(1, "Required")
    .refine((val) => !isNaN(Number(val)) && Number(val) >= 1, {
      message: "At least 1 adult required",
    }),
  children: z.string().optional(),
  travelDate: z.string().min(1, "Travel date required"),
  notes: z.string().optional(),
  paymentMethod: z.string().min(1, "Select a payment method"),
});

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: any;
}

const OrderModal = ({ isOpen, onClose, packageData }: OrderModalProps) => {
  const [formData, setFormData] = useState({
    adults: "1",
    children: "0",
    travelDate: "",
    notes: "",
    paymentMethod: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { isLoggedIn } = useAppCookies();

  const resetForm = () => {
    setFormData({
      adults: "1",
      children: "0",
      travelDate: "",
      notes: "",
      paymentMethod: "",
    });
    setErrors({});
  };

  const { mutate: createOrderMutate, isPending: isCreating } = useCreateOrder();
  const { mutate: verifyPaymentMutate, isPending: isVerifying } =
    useVerifyPayment();

  useEffect(() => {
    resetForm();
    if (!isOpen) return;
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [isOpen]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isLoggedIn) {
      toastError("Please first login then buy ticket");
      return;
    }

    const result = orderSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.issues.forEach((err) => {
        const key = err.path?.[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    const destinationId =
      typeof packageData?.destination === "object"
        ? packageData?.destination?._id
        : packageData?.destination;

    const isRazorpay = formData.paymentMethod === "razorpay";

    createOrderMutate(
      {
        orderType: "package",
        orderData: {
          packageId: packageData?._id,
          destinationId,
          travelDate: formData.travelDate,
          adults: Number(formData.adults),
          children: Number(formData.children) || 0,
          paymentMethod: formData.paymentMethod,
        },
        notes: formData.notes || undefined,
      },
      {
        onSuccess: (res) => {
          if (!isRazorpay) {
            toastSuccess("Order placed successfully");
            onClose();
            resetForm();
            return;
          }

          const paymentInfo = res?.data?.paymentInfo;
          if (!paymentInfo?.key || !paymentInfo?.razorpayOrderId) {
            toastError("Payment gateway not available. Try again later.");
            return;
          }

          const options = {
            key: paymentInfo.key,
            amount: paymentInfo.amount,
            currency: paymentInfo.currency,
            name: "Golfy Travels",
            description: `Order: ${res?.data?.orderNumber}`,
            order_id: paymentInfo.razorpayOrderId,
            handler: function (response: any) {
              verifyPaymentMutate(
                {
                  razorpayOrderId: response.razorpay_order_id,
                  razorpayPaymentId: response.razorpay_payment_id,
                  razorpaySignature: response.razorpay_signature,
                },
                {
                  onSuccess: () => {
                    toastSuccess("Payment successful! Order confirmed.");
                    onClose();
                    resetForm();
                  },
                  onError: (error: any) => {
                    toastError(
                      error?.response?.data?.message?.[0] ||
                        "Payment verification failed"
                    );
                  },
                }
              );
            },
            modal: {
              ondismiss: () => {
                toastError("Payment cancelled");
              },
            },
            theme: {
              color: "#000",
            },
          };

          const razorpay = new window.Razorpay(options);
          razorpay.open();
        },
        onError: (error: any) => {
          toastError(
            error?.response?.data?.message?.[0] || "Failed to create order"
          );
        },
      }
    );
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-2xl rounded-[20px] bg-white p-8 md:p-10 overflow-visible">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:bg-gray-100"
        >
          ✕
        </button>

        <div className="mb-8">
          <h4 className="text-2xl font-semibold">Order Package</h4>
          <p className="text-gray-500 mt-1">
            {packageData?.title} — ₹{packageData?.pricePerPerson}/person
          </p>
          {(() => {
            const adults = Number(formData.adults) || 1;
            const children = Number(formData.children) || 0;
            const price = Number(packageData?.pricePerPerson || 0);
            const adultTotal = adults * price;
            const childTotal = children * (price / 2);
            const subtotal = adultTotal + childTotal;
            const gst = subtotal * 0.18;
            const total = subtotal + gst;
            return (
              <div className="mt-3 rounded-lg border border-gray-200 bg-gray-50 p-3 text-sm space-y-1">
                <p className="flex justify-between">
                  <span>Adults ({adults} × ₹{price})</span>
                  <span>₹{adultTotal.toLocaleString("en-IN")}</span>
                </p>
                {children > 0 && (
                  <p className="flex justify-between">
                    <span>Children ({children} × ₹{price / 2})</span>
                    <span>₹{childTotal.toLocaleString("en-IN")}</span>
                  </p>
                )}
                <p className="flex justify-between">
                  <span>Subtotal</span>
                  <span>₹{subtotal.toLocaleString("en-IN")}</span>
                </p>
                <p className="flex justify-between">
                  <span>GST (18%)</span>
                  <span>₹{gst.toLocaleString("en-IN")}</span>
                </p>
                <p className="flex justify-between font-semibold text-base border-t border-gray-200 pt-1">
                  <span>Total</span>
                  <span>₹{total.toLocaleString("en-IN")}</span>
                </p>
              </div>
            );
          })()}
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Adults <span className="text-red-500">*</span>
              </label>
              <input
                type="number"
                name="adults"
                value={formData.adults}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none"
                placeholder="Number of adults"
                min={1}
              />
              {errors.adults && (
                <p className="text-red-500 text-sm">{errors.adults}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Children
              </label>
              <input
                type="number"
                name="children"
                value={formData.children}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none"
                placeholder="Number of children"
                min={0}
              />
              {errors.children && (
                <p className="text-red-500 text-sm">{errors.children}</p>
              )}
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Travel Date <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                name="travelDate"
                value={formData.travelDate}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:outline-none"
              />
              {errors.travelDate && (
                <p className="text-red-500 text-sm">{errors.travelDate}</p>
              )}
            </div>
          </div>
          

          <div className="flex flex-col gap-1 mb-6">
            <label className="text-sm font-medium text-gray-700">
              Payment Method <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {/* <label
                className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition ${
                  formData.paymentMethod === "razorpay"
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              > */}
                {/* <input
                  type="radio"
                  name="paymentMethod"
                  value="razorpay"
                  checked={formData.paymentMethod === "razorpay"}
                  onChange={handleChange}
                  className="accent-black"
                />
                <div>
                  <p className="font-medium text-sm">Razorpay</p>
                  <p className="text-xs text-gray-500">Credit Card / UPI / Net Banking</p>
                </div>
              </label> */}
              <label
                className={`flex items-center gap-3 border rounded-lg p-4 cursor-pointer transition ${
                  formData.paymentMethod === "cash"
                    ? "border-black bg-gray-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cash"
                  checked={formData.paymentMethod === "cash"}
                  onChange={handleChange}
                  className="accent-black"
                />
                <div>
                  <p className="font-medium text-sm">Cash on Arrival</p>
                  <p className="text-xs text-gray-500">Pay when you arrive</p>
                </div>
              </label>
            </div>
            {errors.paymentMethod && (
              <p className="text-red-500 text-sm">{errors.paymentMethod}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 mb-6">
            <label className="text-sm font-medium text-gray-700">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:outline-none"
              placeholder="Any special requests or notes"
              rows={3}
            />
            {errors.notes && (
              <p className="text-red-500 text-sm">{errors.notes}</p>
            )}
          </div>

          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
            >
              Close
            </button>
            <button
              type="submit"
              disabled={isCreating || isVerifying}
              className="primary-btn1 black-bg cursor-pointer"
            >
              {isCreating || isVerifying
                ? "Processing..."
                : formData.paymentMethod === "razorpay"
                ? "Proceed to Payment"
                : "Place Order"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default OrderModal;
