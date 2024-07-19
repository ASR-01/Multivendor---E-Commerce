import { Response, Request } from "express";
import prisma from "../client";
import { setWithExpiry } from "../utils/redis.utils";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

// user
export const RegisterUser = async (req: Request, res: Response) => {
  try {
    const {
      username,
      password,
      firstName,
      lastName,
      role,
      email,
      phoneNumber,
    } = req.body;
    const hashPassword = bcrypt.hashSync(password, 10);
    const user = await prisma.user.create({
      data: {
        username,
        password: hashPassword,
        firstName,
        lastName,
        role,
        email,
        phoneNumber,
      },
    });

    res.json({ success: true, msg: "User Registration Successfully", user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};

export const LoginUser = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    const isPasswordValid = bcrypt.compareSync(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ success: false, msg: "Invalid password" });
    }

    const token = jwt.sign(
      { userId: user.id },
      process.env.JWT_SECRET as string,
      {
        expiresIn: "1h",
      }
    );

    res.json({ success: true, msg: "Login User Successful", token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};

export const UpdateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const updateData = req.body;

    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    res.json({ success: true, msg: "User updated successfully", updatedUser });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "An error occurred" });
  }
};

export const DeleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    await prisma.user.delete({
      where: { id: userId },
    });

    res.json({ success: true, msg: "User deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "An error occurred" });
  }
};

export const getMyProfile = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;

    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: {
        address: true,
        stores: true, // Include addresses if needed
      },
    });

    if (!user) {
      return res.status(404).json({ success: false, msg: "User not found" });
    }

    setWithExpiry("users", user, 30);
    res.json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: "An error occurred" });
  }
};

// Admin

export const GetAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany({
      include: {
        address: true,
        stores: true,
      },
    });
    setWithExpiry("users", users, 30);
    res.json({ success: true, msg: "All users Fetched Successfully", users });
  } catch (error) {
    console.log(error);
    res.json({ success: false, msg: error });
  }
};

// export const GetAllUsersWithTodos = async (req: Request, res: Response) => {
//   try {
//     const users = await prisma.user.findMany({
//       where: {
//         todo: {
//           some: {},
//         },
//       },
//       include: {
//         todo: true,
//       },
//     });

//     setWithExpiry("users", users, 30);

//     res.json({ success: true, msg: "User Created Successfully", users });
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, msg: error });
//   }
// };
