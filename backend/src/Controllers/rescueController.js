const Rescue = require("../Models/rescueForms.js");
const bcrypt = require("bcrypt");
const { createToken } = require("../utils/auth.js");
const nodemailer = require("nodemailer");
const jwt = require('jsonwebtoken');

const addRescue = async (req, res) => {
    
    
  try {
    
      const rescueForm = await Rescue.create({
        name: req.body.name,
        email: req.body.email,
        mobile: req.body.mobile,
        location : req.body.location,
      });

      
    res.status(200).send("Rescue form sent");
  } catch (e) {
    
    res.status(400).send(e);
  }
};
const listForms = async (req, res) => {
    try {
    
      res.send(await Rescue.find());
    } catch (e) {
      res.status(400).send(e);
    }
  };



module.exports = {
  addRescue,
 listForms,

};
