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
      include: {
        photos: true,
      },
    });

    if (req.file) {
      const { originalname: filename, path: filepath } = req.file;

      const photo = await prisma.photo.create({
        data: {
          filename,
          filepath,
          productId: product.id,
        },
      });
    }
    
    res.json({ success: true, msg: "Product created successfully", product });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Bad Request", error });
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
        photos:true
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
      include:{
        categories: true,
        store: true,
        photos:true
      }
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
