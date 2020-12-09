import * as tutorialsController from "../controller/tutorial.controller"
import express from "express"
import validateMiddleware from "../middleware/validateMiddleware";
import { validateTutorial } from "../models/tutorial.model";


export default function (app) {

  const router = express.Router()

  // Create a new Tutorial
  router.post("/",validateMiddleware(validateTutorial), tutorialsController.create);

  // Retrieve all Tutorials
  router.get("/", tutorialsController.findAll);

  // Retrieve all published Tutorials
 // router.get("/published", tutorialsController.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorialsController.findOne);

  // Update a Tutorial with id
  router.put("/:id",validateMiddleware(validateTutorial), tutorialsController.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorialsController.delete);

  // Create a new Tutorial
  router.delete("/", tutorialsController.deleteAll);

  app.use('/api/tutorials', router);
};