import ApiError from "../utils/api-error.js";

const validate = (schema) => {
  return (req, res, next) => {
    let { error, value } = schema.validate(req.body);
    if (error) {
      next(new ApiError(404, error.details[0]?.message));
    }
    req.body = value;
    next();
  };
};

export default validate;
