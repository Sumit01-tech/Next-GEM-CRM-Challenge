import prisma from "../config/prismaClient.js";

// Get all users
export const getAllUsers = async (req, res) => {
    try {
        const users = await prisma.user.findMany({
            include: { leads: true, activities: true },
        });
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};
