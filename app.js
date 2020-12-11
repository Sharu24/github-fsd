const express = require("express");
const bcrypt = require("bcrypt");
const cors = require("cors");
const { body, validationResult } = require("express-validator");
const app = express();

require("./dbConnect");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use(express.static("build"));

const User = require("./models/User");

app.get("/", (req, res) => {
  res.send("Home Get Route");
});

app.post(
  "/",
  [
    body("fullName", "Full Name is required").notEmpty(),
    body("password", "Password is required").notEmpty(),
    body("primaryEmail", "Primary Email is required").isEmail(),
    body("mobile", "Mobile is required").notEmpty(),
    body("dob", "Date Of Birth is required").notEmpty(),
    body("gender", "Gender is required").notEmpty(),
    body("location", "Location is required").notEmpty(),
    body("languages", "Languages are required").notEmpty(),
    body("cloud", "Cloud technologues not passed").notEmpty(),
    body("bio", "Bio is required").notEmpty(),
    body("raise", "Raise is required").notEmpty(),
    body("availability", "Availability is required").notEmpty()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(403).json({ Errors: errors.array() });
    }
    try {
      console.log(req.body);
      const userData = new User(req.body);
      const saltRounds = 10;
      userData.password = bcrypt.hashSync(req.body.password, saltRounds);
      await userData.save();
      res.status(200).json({ Success: "User Created Successfully" });
    } catch (err) {
      console.log(err);
      res.status(500).json({ Error: "failed to create" });
    }
  }
);

app.listen(PORT, () => {
  console.log("Server is listening on port " + PORT);
});
