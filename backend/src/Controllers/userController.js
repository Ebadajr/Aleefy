const User = require("../Models/user.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const pet = require("../Models/pet.js");
const user = require("../Models/user.js");

const addUser = async (req, res) => {
  try {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      email: req.body.username,
      password: hashedPassword,
      firstName: req.body.first_name,
      lastName: req.body.last_name,
      mobile: req.body.mobile,
    });

    const token = createToken(user.name);
    const maxAge = 3 * 24 * 60 * 60;
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).send("admin added");
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
};

const listUsers = async (req, res) => {
  try {
    res.send(await User.find());
  } catch (e) {
    res.status(400).send(e);
  }
};

const deleteUser = async (req, res) => {
  try {
    res.send(await User.findByIdAndDelete(req.params.id));
  } catch (e) {
    res.status(400).send(e);
  }
};

const getUsers = async (req, res) => {
  //retrieve all users from the database
  const users = await User.find({});
  //console.log(users);
  res.status(200).send(users);
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: req.body.username });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createToken(user._id);
    const maxAge = 3 * 24 * 60 * 60;

    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });

    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const logout = (req, res) => {
  // Clear the JWT cookie to log the user out
  res.clearCookie("jwt");

  res.status(200).json({ message: "Logged out successfully" });
};
const getUser = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await user.findById(id);

  res.status(200).json(p.firstName);
};

const getMobile = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await user.findById(id);
  res.status(200).json(p.mobile);
};

const updateUser = async (req, res) => {
  const token = req.cookies.jwt;
  var id;
  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await user.findById(id);
  await User.findByIdAndUpdate(id, {
    firstName: req.body.firstname,
    lastName: req.body.lastname,
    mobile: req.body.mobile,
  });
  res.status(200).send("User info updated!");
};

const addPet = async (req, res) => {
  const token = req.cookies.jwt;
  var id;

  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await user.findById(id);
  console.log(p.email);
  var c = pet.create({
    name: req.body.name,
    Breed: req.body.breed,
    age: req.body.age,
    type: "owned",
    owner: p.email,
  });

  p.pets.push((await c)._id);
  p.save().catch((err) => res.send(err));
  res.status(200).json(p.pets);
};
const myPets = async (req, res) => {
  const token = req.cookies.jwt;
  var id;

  jwt.verify(token, "supersecret", (err, decodedToken) => {
    if (err) {
      // console.log('You are not logged in.');
      // res send status 401 you are not logged in
      res.status(401).json({ message: "You are not logged in." });
      // res.redirect('/login');
    } else {
      id = decodedToken.name;
    }
  });
  const p = await user.findById(id);
  const petNames = [];
  for (let i = 0; i < p.pets.length; i++) {
    var pe = p.pets[i].toString();
    var s = await pet.findById(pe);
    petNames.push(s);
  }

  p.save().catch((err) => res.send(err));
  res.status(200).json(petNames);
};

module.exports = {
  addUser,
  deleteUser,
  listUsers,
  getUsers,
  login,
  logout,
  getUser,
  addPet,
  myPets,
  updateUser,
  getMobile,
};
