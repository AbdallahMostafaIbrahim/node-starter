const createSchema = joi
  .object({
    name: joi.string().required(),
    isCompleted: joi.boolean().required(),
  })
  .required();
const editSchema = joi
  .object({
    name: joi.string(),
    isCompleted: joi.boolean(),
  })
  .required();

module.exports = { createSchema, editSchema };
