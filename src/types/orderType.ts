export interface CreateOrderPayload {
  orderType: 'package' | 'visa' | 'hotel';
  orderData: {
    packageId: string;
    destinationId: string;
    travelDate: string;
    adults: number;
    children?: number;
     paymentMethod:string;
  };
  discountAmount?: number;
 
  notes?: string;
}

export interface VerifyPaymentPayload {
  razorpayOrderId: string;
  razorpayPaymentId: string;
  razorpaySignature: string;
  
}

export interface OrderPaymentInfo {
  razorpayOrderId: string | null;
  amount: number;
  currency: string;
  key: string | null;
}

export interface OrderResponse {
  _id: string;
  orderNumber: string;
  orderType: string;
  orderData: Record<string, any>;
  totalPrice: number;
  discountAmount: number;
  finalAmount: number;
  currency: string;
  status: string;
  isPaid: boolean;
  paymentInfo: OrderPaymentInfo;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface OrderApiResponse {
  httpStatus: number;
  message: string;
  data: OrderResponse;
}
