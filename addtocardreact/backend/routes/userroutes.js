import express from "express";
import login from "../controller/authcontrolller.js";
import {
  createuser,
  GetMenuData,
  getSelectRoleData,
  PermissionDataPost,
  PostMenuData,
  PostSelectRoleData,
} from "../controller/usercontroller.js";

const router = express.Router();

router.route("/reg").post(createuser);
router.route("/login").post(login);
router.route("/roleAdd").post(PostSelectRoleData);
router.route("/roleGet").get(getSelectRoleData);
router.route("/menuAdd").post(PostMenuData);
router.route("/menuget").get(GetMenuData);
router.route("/permission/post").post(PermissionDataPost);
router.route("/permissionGet").get(GetMenuData);

export default router;
