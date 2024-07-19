import { Response, Request } from "express";
import prisma from "../client";
import { setWithExpiry } from "../utils/redis.utils";

export const CreateProduct = async (req: Request, res: Response) => {
  try {
    const { storeId } = req.body;

    const product = await prisma.product.create({
      data: {
        ...req.body,
        storeId,
      },
    });

    if (product) {
      return res.json({
        success: true,
        msg: "Product create Successfully",
        product,
      });
    } else {
      return res.json({ success: true, msg: "Failed to create product" });
    }
  } catch (error) {
    res.json({ success: false, msg: "Bad Request" });
  }
};

export const DeleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    await prisma.product.delete({
      where: { id: productId },
    });

    res.json({ success: true, msg: "Product deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to delete" });
  }
};

export const UpdateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updatedUser = await prisma.product.update({
      where: { id: productId },
      data: req.body,
    });

    res.json({
      success: true,
      msg: "Product Updated successfully",
      updatedUser,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to Update User" });
  }
};

export const GetAllProduct = async (req: Request, res: Response) => {
  try {
    const product = await prisma.product.findMany({
      include: {
        categories: true,
        store: true,
      },
    });
    setWithExpiry("products", product, 30);
    res.json({
      success: true,
      msg: "All products Fetched Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};

export const GetSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const product = await prisma.product.findFirst({
      where: { id: productId },
    });

    setWithExpiry("products", product as {}, 30);
    res.json({
      success: true,
      msg: "All products Fetched Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};
