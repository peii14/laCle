/* eslint-disable import/no-anonymous-default-export */
"use strict";

import bcrypt from "bcrypt";
import { MongoClient } from "mongodb";

const dbName = "formationMsg";
const colName = "users";

export default async (req, res) => {
  const { username, password } =req.body;

  // Connect to database
  const client = new MongoClient(process.env.MONGO_URL, {
    useUnifiedTopology: true
  });
  try {
    await client.connect();
    const col = client.db(dbName).collection(colName);


    let user = await col.findOne({ username: username });


    if (!user) {
      res.status(404).json({ message: "No user found" });
    } else {
      // Compare user-entered password to stored hash
      const passwordMatch = await bcrypt.compare(password, user.password_hash);

      if (passwordMatch) {
        // Send all-clear with _id as token
        res.status(200).json({ token: user._id.toString() });
      } else {
        res.status(401).json({ message: "Incorrect password" });
      }
    }
  } catch (err) {
    const { response } = err;
    response
      ? res.status(response.status).json({ message: response.statusText })
      : res.status(500).json({ message: err.message });
  }

  // Disconnect from database
  client.close();
};