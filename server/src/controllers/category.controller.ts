import { Response, Request } from "express";
import prisma from "../client";
import { setWithExpiry } from "../utils/redis.utils";

export const CreateCategory = async (req: Request, res: Response) => {
  try {
    const { productId } = req.body;

    const Category = await prisma.category.create({
      data: {
        ...req.body,
        productId,
      },
    });

    if (Category) {
      return res.json({
        success: true,
        msg: "Category create Successfully",
        Category,
      });
    } else {
      return res.json({ success: true, msg: "Failed to create Category" });
    }
  } catch (error) {
    res.json({ success: false, msg: "Bad Request" });
  }
};

export const DeleteCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    await prisma.category.delete({
      where: { id: categoryId },
    });

    res.json({ success: true, msg: "category deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to delete" });
  }
};

export const UpdateCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;
    const category = await prisma.category.update({
      where: { id: categoryId },
      data: req.body,
    });

    res.json({
      success: true,
      msg: "category Updated successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to Update category" });
  }
};

export const GetAllCategory = async (req: Request, res: Response) => {
  try {
    const category = await prisma.category.findMany({
      include: {
        product: true,
      },
    });
    setWithExpiry("category", category, 30);
    res.json({
      success: true,
      msg: "All category Fetched Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};

export const GetSingleCategory = async (req: Request, res: Response) => {
  try {
    const { categoryId } = req.params;

    const category = await prisma.product.findFirst({
      where: { id: categoryId },
      select: {
        productId: true,
      },
    });

    setWithExpiry("category", category as {}, 30);
    res.json({
      success: true,
      msg: "All category Fetched Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};
