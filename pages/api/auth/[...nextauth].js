// src/pages/api/auth/[...nextauth].js

import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@next-auth/mongodb-adapter";
import clientPromise from "@/lib/mongodb";
import bcrypt from "bcrypt";

export default NextAuth({
	adapter: MongoDBAdapter(clientPromise),
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				email: { label: "Email", type: "text" },
				password: { label: "Password", type: "password" },
			},
			authorize: async (credentials) => {
				const db = (await clientPromise).db();
				const user = await db
					.collection("users")
					.findOne({ email: credentials.email });

				if (
					user &&
					(await bcrypt.compare(credentials.password, user.password))
				) {
					return user;
				}
				return null;
			},
		}),
	],
	callbacks: {
		session: async ({ session, user }) => {
			session.user = user;
			return session;
		},
	},
	secret: process.env.NEXTAUTH_SECRET,
	pages: {
		signIn: "/auth/signin",
		signUp: "/auth/signup",
	},
});
