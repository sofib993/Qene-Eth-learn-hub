import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Mock payment simulation functions

const PLATFORM_COMMISSION_RATE = 0.20; // 20%

const generateTransactionId = () => `QENE-TX-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`;

export const simulateTelebirrPayment = (amount: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% success rate
      if (isSuccess) {
        const platformFee = amount * PLATFORM_COMMISSION_RATE;
        const instructorPayout = amount - platformFee;
        resolve({
          status: 'success',
          transactionId: generateTransactionId(),
          method: 'Telebirr',
          commission: {
            platform: platformFee.toFixed(2),
            instructor: instructorPayout.toFixed(2),
          },
        });
      } else {
        resolve({
          status: 'failed',
          message: 'Transaction declined by Telebirr. Please try again.',
        });
      }
    }, 1500); // Simulate network delay
  });
};

export const simulateCbePayment = (amount: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const isSuccess = Math.random() > 0.2; // 80% success rate
      if (isSuccess) {
        const platformFee = amount * PLATFORM_COMMISSION_RATE;
        const instructorPayout = amount - platformFee;
        resolve({
          status: 'success',
          transactionId: generateTransactionId(),
          method: 'CBE Birch',
          commission: {
            platform: platformFee.toFixed(2),
            instructor: instructorPayout.toFixed(2),
          },
        });
      } else {
        resolve({
          status: 'failed',
          message: 'Your bank has declined the payment. Please check your details.',
        });
      }
    }, 1500); // Simulate network delay
  });
};