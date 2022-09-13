import user from "../model/usermodel.js";
import bcrypt from "bcryptjs";
import role from "../model/SelctModel.js";
import permissionMap from "../model/PermissionMap.js";
import permission from "../model/Permission.js";

export const createuser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(req.body.password, salt);
    const result = await user.create({ ...req.body, password: hash });
    res.json({
      message: "user Created",
      result,
    });
  } catch (error) {
    res.json({ message: error.message });
  }
};

export const PostSelectRoleData = async (req, res) => {
  try {
    console.log(req.body);
    const result = await role.create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const PostMenuData = async (req, res) => {
  try {
    console.log(req.body);
    const result = await permission.create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const PermissionDataPost = async (req, res) => {
  try {
    console.log(req.body);
    const result1 = await permissionMap.findAll({
      where: {
        roleId: req.body.roleId,
        PermissionId: req.body.PermissionId,
      },
    });
    if (result1.length > 0) {
      // console.log("Already Exist");
      res.json({ message: "Already Exist" });
    } else {
      const result = await permissionMap.create(req.body);
      res.json(result);
      // console.log("data inserted ");
    }
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const GetMenuData = async (req, res) => {
  try {
    const result = await permission.findAll();
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
export const getSelectRoleData = async (req, res) => {
  try {
    console.log(req.body);
    const result = await role.findAll();
    res.json(result);
  } catch (error) {
    res.json({ message: error.message });
  }
};
