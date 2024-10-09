// /api/protected.js

import { authMiddleware } from "@/lib/authMiddleware";

const handler = async (req, res) => {
	res.status(200).json({ message: "This is protected data", user: req.user });
};

export default authMiddleware(handler);
