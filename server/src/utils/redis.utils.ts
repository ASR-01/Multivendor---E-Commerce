import { NextFunction, Request, Response } from "express";
import client from "../clientRedis";

export const redisCachedMiddleWare =
  (key: string) => async (req: Request, res: Response, next: NextFunction) => {
    let cachedValue = await client.get(key);
    if (cachedValue) {
      const users = JSON.parse(cachedValue);
      return res.json({
        success: true,
        msg: " Data fetched Successfully",
        users,
      });
    }

    next()
  };


export const setWithExpiry = async (key: string, value:{}, expiryInSeconds: number) => {
  try {
    await client.set(key, JSON.stringify(value));
    await client.expire(key, expiryInSeconds);
  } catch (error) {
    console.error(`Error setting value in Redis for key "${key}":`, error);
    throw new Error(`Failed to set value in Redis for key "${key}"`);
  }
};
