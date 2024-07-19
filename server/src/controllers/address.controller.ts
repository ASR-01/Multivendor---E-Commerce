import { Response, Request } from "express";
import prisma from "../client";
import { setWithExpiry } from "../utils/redis.utils";

export const CreateAddress = async (req: Request, res: Response) => {
  try {
    const {
      street,
      city,
      state,
      postalCode,
      country,
      userAddressId,
      storeAddressId,
    } = req.body;

    const address = await prisma.address.create({
      data: {
        street,
        city,
        state,
        postalCode,
        country,
        userAddressId,
        storeAddressId,
      },
    });

    // address
    if (address) {
      setWithExpiry("address", address, 30);

      return res.json({
        success: true,
        msg: "Address added Successfully",
        address,
      });
    } else {
      return res.json({ success: true, msg: "Failed to add Address", address });
    }
  } catch (error) {
    
    res.json({ success: false, msg: "Bad Request" });
  }
};


export const UpdateAddress = async (req: Request, res: Response) => {
  try {
    const { addressId } = req.params; 
    const updateData = req.body; 

    const updatedAddress = await prisma.address.update({
      where: { id: addressId },
      data: updateData,
    });

  

    res.json({ success: true, msg: "Address updated successfully", address: updatedAddress });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "Failed to update address" });
  }
};
