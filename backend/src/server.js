import dotenv from "dotenv";
import http from "http";
import app from "./app.js";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const prisma = new PrismaClient();
const PORT = process.env.PORT || 5000;

// Connect to PostgreSQL via Prisma
(async () => {
    try {
        await prisma.$connect();
        console.log("✅ Connected to PostgreSQL database via Prisma");
    } catch (error) {
        console.error("❌ Failed to connect to database:", error.message);
        process.exit(1);
    }
})();

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});

// Graceful shutdown
process.on("SIGINT", async () => {
    await prisma.$disconnect();
    console.log("🧹 Disconnected from PostgreSQL");
    process.exit(0);
});
