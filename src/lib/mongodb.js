import { MongoClient } from "mongodb";

let client;
let clientPromise;

if (!process.env.MONGODB_URI) {
	throw new Error("Please add your Mongo URI to .env");
}

client = new MongoClient(process.env.MONGODB_URI);
clientPromise = client.connect();

export default clientPromise;
