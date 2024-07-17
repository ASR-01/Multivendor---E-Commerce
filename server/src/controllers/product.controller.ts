import { Request, Response } from "express";
import prisma from "../client";
import { number } from "zod";

export const createProduct = async (req: Request, res: Response) => {
  const product = await prisma.product.create({
    data: {
      ...req.body,
      tags: req.body.tags.join(","),
    },
  });
  res.json(product);
};

export const updateProduct = async (req: Request, res: Response) => {
  const id = req.params.singleProduct;
  const data = req.body;
  const product = await prisma.product.update({ where: { id }, data });

  res.json({ success: true, msg: "Product Updated Successfully", product });
};

export const deleteProduct = async (req: Request, res: Response) => {
  const id = req.params.singleProduct;
  const product = await prisma.product.delete({ where: { id } });
  res.json({ success: true, msg: "Product deletion Successful" });
};

export const getAllProduct = async (req: Request, res: Response) => {
  let skip: number | undefined;
  if (typeof req.query.skip === "string") {
    skip = parseInt(req.query.skip, 10);
    if (isNaN(skip)) {
      skip = undefined;
    }
  }

  const products = await prisma.product.findMany({
    skip: skip,
    take: 5,
  });
  res.json({ success: true, products });
};

export const getSingleProduct = async (req: Request, res: Response) => {
  const id = req.params.singleProduct;
  const product = await prisma.product.findFirst({ where: { id } });
  res.json({ success: true, product });
};
