import { Response, Request } from "express";
import prisma from "../client";
import { setWithExpiry } from "../utils/redis.utils";

export const CreateStore = async (req: Request, res: Response) => {
  try {
    const { userId } = req.body;

    const store = await prisma.store.create({
      data: {
        ...req.body,
        userId,
      },
    });

    if (store) {
      setWithExpiry("store", store, 30);
      return res.json({
        success: true,
        msg: "Store create Successfully",
        store,
      });
    } else {
      return res.json({ success: true, msg: "Failed to create store" });
    }
  } catch (error) {
    res.json({ success: false, msg: "Bad Request" });
  }
};

export const DeleteStore = async (req: Request, res: Response) => {
  try {
    const { storeId } = req.params;

    // Delete the store from the database
    await prisma.store.delete({
      where: { id: storeId },
    });

    res.json({ success: true, msg: "Store deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to delete store" });
  }
};

export const UpdateStore = async (req: Request, res: Response) => {
  try {
    const { storeId } = req.params; 
    const updateData = req.body; 

   
    const updatedStore = await prisma.store.update({
      where: { id: storeId },
      data: updateData,
    });

    res.json({
      success: true,
      msg: "Store updated successfully",
      store: updatedStore,
    });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to update store" });
  }
};

// Admin
export const GetAllUsersStore = async (req: Request, res: Response) => {
  try {
    const stores = await prisma.store.findMany({
      include: {
        user: true,
        products:true,
        address:true
      },
    });
    
    setWithExpiry("stores",stores,30)
    res.json({ success: true, stores });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to fetch stores" });
  }
};
