"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_routes_1 = __importDefault(require("./routes/users.routes"));
const dotenv_1 = __importDefault(require("dotenv"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const category_routes_1 = __importDefault(require("./routes/category.routes"));
const address_routes_1 = __importDefault(require("./routes/address.routes"));
const store_routes_1 = __importDefault(require("./routes/store.routes"));
const path_1 = __importDefault(require("path"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/uploads', express_1.default.static(path_1.default.join(__dirname, '../../uploads')));
app.use("/api/v1", users_routes_1.default);
app.use("/api/v1", store_routes_1.default);
app.use("/api/v1", product_routes_1.default);
app.use("/api/v1", category_routes_1.default);
app.use("/api/v1", address_routes_1.default);
app.get("/", (req, res) => {
    res.json({ success: true, msg: "I am Aditya Richest Man in the World" });
});
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server Is Listing on Port ${PORT}`);
});
