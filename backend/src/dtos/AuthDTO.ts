import Joi from "joi";
import { isUnique } from "../validators/isUniqueValidator";
import AppDataSource from "../database/data-source";
import { UserEntity } from "../database/entities/UserEntity";

const userRepo = AppDataSource.getRepository(UserEntity);

// Registration schema
export const registerSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .external(isUnique(userRepo, "email"))
    .messages({ "string.empty": "Can't be empty", "string.email": "Enter valid email" }),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{8,30}$"))
    .required()
    .messages({ "string.pattern.base": "Should be 8 characters min", "string.empty": "Can't be empty" }),
  repeat_password: Joi.string()
    .required()
    .valid(Joi.ref("password"))
    .messages({ "any.only": "Passwords must match", "any.required": "Passwords do not match" }),
});

// login schema
export const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({ "string.empty": "Can't be empty", "string.email": "Enter valid email" }),

  password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{8,30}$")).required().messages({
    "string.pattern.base": "Should be 8 characters min",
    "string.empty": "Can't be empty",
  }),
});
