"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/", async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name
        }
    });
    res.json({
        msg: "done ji!!"
    });
});
app.get("/", (req, res) => {
    res.json({
        msg: "chnga ji!"
    });
});
app.listen(3000);
