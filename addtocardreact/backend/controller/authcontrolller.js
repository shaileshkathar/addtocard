import user from "../model/usermodel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import permissionMap from "../model/PermissionMap.js";

const login = async (req, res) => {
  try {
    // console.log(req.body);
    const { email, password } = req.body;
    const result = await user.findOne({
      where: {
        email,
      },
    });
    console.log(result);
    if (!result) {
      return res.status(401).json({
        success: false,
        massage: "email not found",
      });
    }

    const verify = bcrypt.compare(password, result.password);
    console.log(verify);
    if (!verify) {
      return res.status(401).json({
        success: false,
        massage: "please enter valid password",
        data: null,
      });
    }
    const token = jwt.sign({ id: result._id }, "jwt");
    const result1 = await permissionMap.findAll({
      where: {
        roleId: result.roleId,
      },
    });
    // console.log(result1);
    res.json({
      success: true,
      massage: "you are log in",
      email: result.email,

      // id: result._id,
      firstname: result.firstname,
      lastname: result.lastname,
      PermssionMap: result1,
      email: result.email,
      success: true,
      token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      massage: "something went wrong" + error,
    });
  }
};
export default login;
