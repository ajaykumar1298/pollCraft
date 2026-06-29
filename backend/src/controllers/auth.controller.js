import userModel from "../models/user.model.js";
import ApiError from "../utils/api-error.js";

async function addUser(req, res, next) {
  try {
    let { username, email, password } = req.body;
    let isUser = await userModel.findOne({ email });
    if (isUser) {
      throw new ApiError(401, "user already exist");
    }
    let user = await userModel.create({ username, email, password });
  } catch (error) {
    console.log(error);
    throw new ApiError(401, "something went wrong!");
  }
}

export { addUser };
