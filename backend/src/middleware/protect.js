import jwt from "jsonwebtoken";
import prisma from "../config/prismaClient.js";

export const protect = async (req, res, next) => {
    let token;

    // Check for Bearer token in header
    if (req.headers.authorization?.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({ message: "Not authorized, no token" });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Fetch user from DB using Prisma
        const user = await prisma.user.findUnique({
            where: { id: decoded.id },
            select: { id: true, name: true, email: true },
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Auth Error:", error.message);
        res.status(401).json({ message: "Token invalid or expired" });
    }
};
