import { compare } from "bcrypt";
import { generateToken } from "@/lib/jwt";
import clientPromise from "@/lib/mongodb";

export default async (req, res) => {
	if (req.method !== "POST") {
		return res.status(405).json({ message: "Method not allowed" });
	}

	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ message: "Email and password are required" });
	}

	try {
		const db = await clientPromise;
		const user = await db.collection("users").findOne({ email });

		if (!user || !(await compare(password, user.password))) {
			return res.status(401).json({ message: "Invalid credentials" });
		}

		const token = generateToken(user);

		res.status(200).json({ token });
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: "Internal server error" });
	}
};
