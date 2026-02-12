const express = require("express");
const connectDB = require("./config/database.js");
var cookieParser = require('cookie-parser');
const app = express();

app.use(express.json());
app.use(cookieParser());

const authRouter = require("./routes/auth.js")
const profileRouter = require("./routes/profile.js")
const requestRouter = require("./routes/request.js");
const userRouter = require("./routes/user.js");

app.use('/', authRouter);
app.use('/', profileRouter);
app.use('/', requestRouter);
app.use('/', userRouter)

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
