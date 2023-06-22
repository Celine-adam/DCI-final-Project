import cors from "cors";
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { request } from "express";
import bodyParser from "body-parser";
import path from "path";
import { StatusCodes } from "http-status-codes";
import cookieParser from "cookie-parser";
import passport from "passport";
import { configureJwtStrategy } from "./routes/passport-config.js";
import userRoutes from "./routes/userRoutes.js";
import commentRoutes from "./routes/commentRoutes.js";
import postRoutes from "./routes/postRoutes.js";
import fileRoutes from "./routes/fileRoutes.js";

dotenv.config();

const app = express();
app.use(express.static("client"));

app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "./client")));

// {"email_address": "$user_email","status": "subscribed","merge_fields": {"FNAME": "$user_fname" "LNAME": "$user_lname"}}

app.get("/signup", (req, res) => {
  res.sendFile(__dirname + "./client");
});

app.post("/signup", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const email = req.body.email;

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName,
        },
      },
    ],
  };
  const jsonData = JSON.stringify(data);

  const url = "https://us5.api.mailchimp.com/3.0/lists/a6e1377581";

  const options = {
    method: "POST",
    auth: process.env.my_key,
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });
  });

  request.write(jsonData);
  request.end();
});
app.use(
  cors({
    credentials: true,
    origin: true,
  })
);
app.use(express.json());
app.use(cookieParser());

configureJwtStrategy(passport);

app.use(express.urlencoded({ extended: true }));

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected! 😃");
  })
  .catch((error) => {
    console.log(error.message);
    console.log("🤨");
  });

app.use("/api/user", userRoutes);
app.use("/api/comment", commentRoutes);
app.use("/api/post", postRoutes);
app.use("/api/files", fileRoutes);
//the files inside the folder will be served by our server
app.use("/uploads", express.static("./uploads"));

app.all("*", (req, res) => {
  return res.status(StatusCodes.NOT_FOUND).json({ message: "Invalid path" });
});

app.listen(3001, () => {
  console.log("The server is listening for requests....");
});
