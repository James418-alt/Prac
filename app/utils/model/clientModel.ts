import { Schema, model, models } from "mongoose";
import { iUser } from "../interface";

interface iUserData extends iUser, Document {}

const clientModel = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    homeAddress: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
  },
  { timestamps: true }
);

const Client = models.Client || model("Client", clientModel);

export default Client;
