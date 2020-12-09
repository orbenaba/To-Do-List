import tutorialsModel from "./tutorial.model.js";
import { url } from "../config/db.config.js";
import mongoose from "mongoose";

const db = {};
db.mongoose = mongoose;
db.url = url;
db.tutorials = tutorialsModel(mongoose)
export default db;