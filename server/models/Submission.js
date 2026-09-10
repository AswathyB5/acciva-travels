import mongoose from "mongoose";

const { Schema, model } = mongoose;

export const ContactSubmission = model(
  "ContactSubmission",
  new Schema(
    {
      name: { type: String, required: true },
      email: { type: String, required: true },
      phone: { type: String, default: "" },
      subject: { type: String, default: "" },
      message: { type: String, default: "" },
      read: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);

export const PartnerApplication = model(
  "PartnerApplication",
  new Schema(
    {
      name: { type: String, required: true },
      phone: { type: String, required: true },
      vehicleType: { type: String, default: "" },
      regYear: { type: String, default: "" },
      read: { type: Boolean, default: false },
    },
    { timestamps: true }
  )
);
