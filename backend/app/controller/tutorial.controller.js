import db from "../models";
const Tutorial = db.tutorials

// Create and Save a new Tutorial
export async function create(req, res) {
  // Validate request

  // Create a Tutorial
  console.log("req.body = ",req.body);
  const tutorial = new Tutorial({
    title: req.body.title,
    published: false
  });
  // Save Tutorial in the database

  try {
    const data = await tutorial.save();
    res.send(data);
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Tutorial."
    });
  }
}



// Retrieve all Tutorials from the database.
export async function findAll(req, res) {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};
  try {
    const data = await Tutorial.find(condition)
    res.send(data);
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
}

// Find a single Tutorial with an id
export async function findOne(req, res) {
  const id = req.params.id;
  try {
    const data = await Tutorial.findById(id)
    if (!data)
      res.status(404).send({ message: "Not found Tutorial with id " + id });
    else res.send(data);
  }
  catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving Tutorial with id=" + id });
  }
}

// Update a Tutorial by the id in the request
export async function update(req, res) {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  };

  const id = req.params.id;

  try {
    const data = await Tutorial.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    if (!data) {
      res.status(404).send({
        message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    }
    else res.send(data);
  }
  catch (err) {
    console.log (err)
    res.status(500).send({
      message: "Error updating Tutorial with id=" + id
    });
  }
}

// Delete a Tutorial with the specified id in the request
const _delete = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Tutorial.findByIdAndRemove(id)
    if (!data) {
      res.status(404).send({
        message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
      });
    } else {
      res.send({
        message: "Tutorial was deleted successfully!"
      });
    }
  }
  catch (err) {
    res.status(500).send({
      message: "Could not delete Tutorial with id=" + id
    });
  }
};
export { _delete as delete };


// Delete all Tutorials from the database.
export async function deleteAll(req, res) {
  try {
    const data = await Tutorial.deleteMany({})
    res.send({
      message: `${data.deletedCount} Tutorials were deleted successfully!`
    });
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while removing all tutorials."
    });
  }
}
//Find all published Tutorials
export async function findAllPublished(req, res) {
  const data = await Tutorial.find({ published: true })
  try {
    res.send(data);
  }
  catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving tutorials."
    });
  }
}