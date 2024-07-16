import { z } from 'zod';

export const createUserSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  password: z.string().min(8),
  userName: z.string().optional(),
  email: z.string().email(),
  phoneNumber: z.string().regex(/^\d+$/),
  gender: z.enum(['male', 'female', 'others']),
  role: z.enum(['CLIENT', 'ADMIN']).optional(),
  address: z.array(
    z.object({
      street: z.string(),
      city: z.string(),
      state: z.string(),
      pinCode: z.string(),
    })
  ),
  store: z.array(
    z.object({
      name: z.string(),
      type: z.enum(['ECCOMERCE', 'FOOD', 'ELECTRONICS', 'HEALTH']),
      products: z.array(z.string()).optional(),
    })
  ),
  order: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().int(),
      status: z.enum(['PENDING', 'SHIPPED', 'DELIVERED', 'CANCELED']),
    })
  ),
  CartItem: z.array(
    z.object({
      productId: z.string(),
      quantity: z.number().int(),
    })
  ),
});

export const updateUserSchema = createUserSchema.partial();
