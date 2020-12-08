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