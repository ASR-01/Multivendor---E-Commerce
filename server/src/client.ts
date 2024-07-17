import { PrismaClient } from "@prisma/client";
import { userSchema } from "./utils/zodValidation.utils";

const prisma = new PrismaClient()

export default prisma;
