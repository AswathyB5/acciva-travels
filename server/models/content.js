import mongoose from "mongoose";

const { Schema, model } = mongoose;

const withOrder = (fields) =>
  new Schema({ ...fields, order: { type: Number, default: 0 } }, { timestamps: true });

export const Service = model(
  "Service",
  withOrder({
    slug: { type: String, required: true, unique: true, trim: true },
    icon: { type: String, default: "Car" },
    title: { type: String, required: true },
    tag: { type: String, default: "" },
    description: { type: String, default: "" },
    features: { type: [String], default: [] },
    image: { type: String, default: "" },
  })
);

export const Destination = model(
  "Destination",
  withOrder({
    name: { type: String, required: true },
    country: { type: String, default: "" },
    description: { type: String, default: "" },
    image: { type: String, default: "" },
    size: { type: String, enum: ["small", "medium", "large"], default: "medium" },
  })
);

export const Testimonial = model(
  "Testimonial",
  withOrder({
    name: { type: String, required: true },
    rating: { type: Number, default: 5, min: 1, max: 5 },
    quote: { type: String, default: "" },
  })
);

export const Stat = model(
  "Stat",
  withOrder({
    icon: { type: String, default: "MapPin" },
    value: { type: Number, default: 0 },
    suffix: { type: String, default: "" },
    display: { type: String, default: "" },
    label: { type: String, required: true },
  })
);

export const BlogPost = model(
  "BlogPost",
  withOrder({
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true },
    titleAccent: { type: String, default: "" },
    excerpt: { type: String, default: "" },
    category: { type: String, default: "" },
    date: { type: String, default: "" },
    readTime: { type: String, default: "" },
    image: { type: String, default: "" },
    content: { type: String, default: "" },
    metaTitle: { type: String, default: "" },
    metaDescription: { type: String, default: "" },
    schemaMarkup: { type: String, default: "" },
  })
);

export const JobOpening = model(
  "JobOpening",
  withOrder({
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true },
    department: { type: String, default: "" },
    location: { type: String, default: "" },
    type: { type: String, default: "Full-Time" },
    experience: { type: String, default: "" },
    description: { type: String, default: "" },
    requirements: { type: [String], default: [] },
  })
);

export const TimelineItem = model(
  "TimelineItem",
  withOrder({
    year: { type: String, required: true },
    title: { type: String, required: true },
    badge: { type: String, default: "" },
    description: { type: String, default: "" },
    stat: { type: String, default: "" },
    image: { type: String, default: "" },
  })
);

export const PageContent = model(
  "PageContent",
  new Schema(
    {
      page: { type: String, required: true, unique: true, trim: true },
      data: { type: Schema.Types.Mixed, default: {} },
    },
    { timestamps: true }
  )
);
