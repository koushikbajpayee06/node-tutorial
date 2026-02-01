const express = require("express");
const connectDB = require("./config/database.js");
const app = express();
const User = require("./models/user.js");
app.use(express.json());

app.post("/signup", async (req, res) => {
  console.log(req.body);
  try {
    const { firstName, lastName, emailId, password } = req.body;

    if (!firstName | !lastName | !emailId | !password) {
      res.status(404).json({ message: "All field required" });
    }
    const userEmail = await User.findOne({ emailId });
    if (userEmail) {
      res.status(404).json({ message: "userEmail already exists" });
    }
    const user = await User.create({
      firstName,
      lastName,
      emailId,
      password,
    });
    res.status(200).send({ message: "User registered succesfully", user });
  } catch (err) {
    res.status(500).json("Something went wrong");
  }
});

app.get("/user", async (req, res) => {
  const userEmail = req.body.emailId;
  try {
    const user = await User.find({ emailId: userEmail });
    if (user.length === 0) {
      res.status(404).send("User not found");
    }
    res.send(user);
  } catch (err) {
    res.status(400).send("Something went wrong");
  }
});
app.get("/feed", async (req, res) => {
  try {
    const data = await User.find({});
    if (!data) {
      res.status(404).json({ message: "no data found.." });
    } else {
      res.status(200).json(data);
    }
  } catch (err) {
    res.status(404).json("Somthing went wrong");
  }
});
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  try {
    const user = await User.findById(id).select("-password");
    if (!user) {
      res.status(404).json({ message: "User id not found" });
    }
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json({ message: "Invalid user id" });
  }
});
app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      res.status(400).json({ message: "User deleted successfully" });
    }
    res.status(200).json({ message: "user deleted successfully", user });
  } catch (err) {
    res.status(500).json({ message: "something went wrong" });
  }
});
app.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = req.body;

  try {
    const allowedUpdates = ["photoUrl", "about", "gender", "age", "skills"];
    const isUpdateAllowed = Object.keys(data).every((k) =>
      allowedUpdates.includes(k),
    );
    if (!isUpdateAllowed) {
      throw new Error("Update not allowed");
    }
    if (data.skills.length > 10) {
      throw new Error("Update not allowed");
    }
    const user = await User.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({
      message: "User updated successfully",
      user,
    });
  } catch (err) {
    res.status(500).json({ message: "Somthing went wrong..." });
  }
});

connectDB()
  .then(() => {
    console.log("Database Connection established...");
    app.listen(3000, () => {
      console.log("server is successfully listening on port-3000");
    });
  })
  .catch((err) => {
    console.error("Database cannot be connected!!!");
    process.exit(1);
  });
