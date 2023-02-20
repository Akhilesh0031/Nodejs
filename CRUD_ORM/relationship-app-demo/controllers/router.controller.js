const router = require("express").Router();
const { json } = require("body-parser");
const bodyParser = require("body-parser");
const path = require("path");
const express = require("express");
const app = express();
const cors = require("cors");

//const multer = require("multer");
//var Jimp = require("jimp");
//var nodemailer = require("nodemailer");
//const bcrypt = require("bcrypt");
//const saltRounds = 10;
const cookieParser = require("cookie-parser");
const session = require("express-session");

const createCompany = require("../services/companycreate");
const createUser = require("../services/usercreate");
const updatecom = require("../services/companyupdate");
const updateuser = require("../services/userupdate");
const readuser = require("../services/userread");
//const uploadphoto = require("../services/uploadphoto");
router.use(express.json());
// -- MIDDLEWARE ---

router.use(bodyParser.urlencoded({ extended: true }));

const models = require("../models");
const { uploadPhoto } = require("../services/uploadphoto");
const company = models.company;
const user = models.user;

router.post("/name",async (req,res)=>{
    try{
        const result = await createCompany.addcompany(req.body);
        res.json(result);
    } catch (err) {
        res.status(406).send({
            msg: "something went wrong please try again",
            err: err,
          });
    }
});

router.post("/user",async (req,res)=>{
    try{
        const result = await createUser.adduser(req.body);
        //res.set("Content-Type", "application/json");
        res.json(result);
    } catch (err) {
        res.status(406).send({
            msg: "something went wrong please try again",
            err: err,
          });
    }
});

router.post("/updatecom",async (req,res)=>{
    try{
        const result = await updatecom.updatecompany(req.body);
        res.json(result); 
    } catch(err) {
        res.status(406).send({
            msg: "something went wrong please try again",
            err: err,
        });
    }
});

router.post("/updateuser",async (req,res)=>{
    try{
        const result = await updateuser.updateuser(req.body);
        //res.set("Content-Type", "application/json");
        res.json(result);
    } catch (err) {
        res.status(406).send({
            msg: "something went wrong please try again",
            err: err,
          });
    }
});

router.get("/read",async (req,res)=>{
    try{
        const result = await readuser.displayuser(req.body);
        res.send(result);
    } catch (err) {
        res.status(406).send({
            msg: "something went wrong please try again",
            err: err,
          });
    }
});


module.exports = router;