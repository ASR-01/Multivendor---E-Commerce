"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllUsers = exports.getMyProfile = exports.DeleteUser = exports.UpdateUser = exports.LoginUser = exports.RegisterUser = void 0;
const client_1 = __importDefault(require("../client"));
const redis_utils_1 = require("../utils/redis.utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
// user
const RegisterUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password, firstName, lastName, role, email, phoneNumber, } = req.body;
        const hashPassword = bcrypt_1.default.hashSync(password, 10);
        const user = yield client_1.default.user.create({
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
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.RegisterUser = RegisterUser;
const LoginUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield client_1.default.user.findUnique({
            where: {
                username,
            },
        });
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }
        const isPasswordValid = bcrypt_1.default.compareSync(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ success: false, msg: "Invalid password" });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, {
            expiresIn: "1h",
        });
        res.json({ success: true, msg: "Login User Successful", token });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.LoginUser = LoginUser;
const UpdateUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const updateData = req.body;
        const updatedUser = yield client_1.default.user.update({
            where: { id: userId },
            data: updateData,
        });
        res.json({ success: true, msg: "User updated successfully", updatedUser });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "An error occurred" });
    }
});
exports.UpdateUser = UpdateUser;
const DeleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        yield client_1.default.user.delete({
            where: { id: userId },
        });
        res.json({ success: true, msg: "User deleted successfully" });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "An error occurred" });
    }
});
exports.DeleteUser = DeleteUser;
const getMyProfile = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const user = yield client_1.default.user.findUnique({
            where: { id: userId },
            include: {
                address: true,
                stores: true, // Include addresses if needed
            },
        });
        if (!user) {
            return res.status(404).json({ success: false, msg: "User not found" });
        }
        (0, redis_utils_1.setWithExpiry)("users", user, 30);
        res.json({ success: true, user });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: "An error occurred" });
    }
});
exports.getMyProfile = getMyProfile;
// Admin
const GetAllUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield client_1.default.user.findMany({
            include: {
                address: true,
                stores: true,
            },
        });
        (0, redis_utils_1.setWithExpiry)("users", users, 30);
        res.json({ success: true, msg: "All users Fetched Successfully", users });
    }
    catch (error) {
        console.log(error);
        res.json({ success: false, msg: error });
    }
});
exports.GetAllUsers = GetAllUsers;
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
