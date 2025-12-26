import { z } from 'zod';

export const createBidValidationSchema = z.object({
  body: z.object({
    rentId: z.string(), 
    driverId: z.string(), 
    bidAmount: z.number(),
    driverLocation: z.string(),
  }),
});

export const updateBidValidationSchema = z.object({
  body: z.object({
    driverId: z.string().optional(),
    bidAmount: z.number().optional(),
    bidStatus: z.enum(['accepted', 'pending', 'rejected']).optional(),
    driverLocation: z.string().optional(),
  }),
});

export const BidValidations = {
  createBidValidationSchema,
  updateBidValidationSchema,
};
