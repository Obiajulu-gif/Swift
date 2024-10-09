import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key";

// Function to generate a token
export const generateToken = (user) => {
	return jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, {
		expiresIn: "1h",
	});
};

// Function to verify a token
export const verifyToken = (token) => {
	return jwt.verify(token, SECRET_KEY);
};
