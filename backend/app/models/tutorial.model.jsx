import Joi from 'joi'

export default function model(mongoose) {
  const Tutorial = mongoose.model(
    "tutorial",
    mongoose.Schema(
      {
        title: String,
        published: Boolean
      },
      { timestamps: true }
    )
  );
  return Tutorial;
};



export function validateTutorial(obj) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(30).required(),
    published: Joi.boolean()
  })
  return schema.validate(obj);
}