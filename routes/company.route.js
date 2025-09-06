import express from "express";
import { login , logout , register , updateProfile } from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticate.js";
import { registerCompany , getCompany ,updateCompany, getCompanyById } from "../controllers/company.controller.js";

const router = express.Router();

router.route("/register").post(isAuthenticated , registerCompany);
router.route("/get").get(isAuthenticated, getCompany);
router.route("/get/:id").get(isAuthenticated, getCompanyById);
router.route("/update/:id")
  .put(isAuthenticated, updateCompany); // also support PUT


export default router;


