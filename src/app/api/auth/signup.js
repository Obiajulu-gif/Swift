export default async function handler(req, res) {
	if (req.method !== "POST") {
		return res.status(405).json({ error: "Method Not Allowed" });
	}

	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password are required." });
	}

	// Add more specific validation for email format, etc.
	if (!/\S+@\S+\.\S+/.test(email)) {
		return res.status(400).json({ error: "Invalid email format." });
	}

	try {
		const client = await clientPromise;
		const db = client.db("swiftdb");

		const userExists = await db.collection("users").findOne({ email });
		if (userExists) {
			return res.status(400).json({ error: "User already exists." });
		}

		const hashedPassword = await hash(password, 10);
		await db.collection("users").insertOne({ email, password: hashedPassword });
		return res.status(201).json({ message: "User created successfully" });
	} catch (error) {
		console.error("Signup error:", error);
		return res.status(500).json({ error: "Internal Server Error" });
	}
}
