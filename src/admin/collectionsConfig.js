import { Car, MapPinned, Star, BarChart3, Newspaper, Briefcase, History } from "lucide-react";
import { iconNames } from "../data/iconMap";

// Describes each editable collection: its API path, a human label, the
// fields shown in the editor form, and which field is used as a row title.
export const collections = [
  {
    key: "services",
    label: "Services",
    singular: "Service",
    icon: Car,
    titleField: "title",
    imageField: "image",
    subtitleField: "tag",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true, hint: "Used in the URL, must be unique." },
      { name: "tag", label: "Tag", type: "text" },
      { name: "icon", label: "Icon", type: "select", options: iconNames },
      { name: "description", label: "Description", type: "textarea" },
      { name: "features", label: "Features", type: "list" },
      { name: "image", label: "Image URL", type: "image" },
    ],
  },
  {
    key: "destinations",
    label: "Destinations",
    singular: "Destination",
    icon: MapPinned,
    titleField: "name",
    imageField: "image",
    subtitleField: "country",
    fields: [
      { name: "name", label: "Name", type: "text", required: true },
      { name: "country", label: "Country", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "image", label: "Image URL", type: "image" },
      { name: "size", label: "Card Size", type: "select", options: ["small", "medium", "large"] },
    ],
  },
  {
    key: "testimonials",
    label: "Testimonials",
    singular: "Testimonial",
    icon: Star,
    titleField: "name",
    subtitleField: "quote",
    fields: [
      { name: "name", label: "Customer Name", type: "text", required: true },
      { name: "rating", label: "Rating (1-5)", type: "number" },
      { name: "quote", label: "Quote", type: "textarea" },
    ],
  },
  {
    key: "stats",
    label: "Homepage Stats",
    singular: "Stat",
    icon: BarChart3,
    titleField: "label",
    fields: [
      { name: "label", label: "Label", type: "text", required: true },
      { name: "value", label: "Value", type: "number" },
      { name: "suffix", label: "Suffix", type: "text", hint: "e.g. + in 25+" },
      { name: "display", label: "Display Override", type: "text", hint: "e.g. 24/7 (used instead of value+suffix)" },
      { name: "icon", label: "Icon", type: "select", options: iconNames },
    ],
  },
  {
    key: "blog-posts",
    label: "Blog Posts",
    singular: "Blog Post",
    icon: Newspaper,
    titleField: "title",
    imageField: "image",
    subtitleField: "category",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "category", label: "Category", type: "text" },
      { name: "date", label: "Date", type: "text" },
      { name: "readTime", label: "Read Time", type: "text" },
      { name: "excerpt", label: "Excerpt", type: "textarea" },
      { name: "content", label: "Full Content", type: "textarea" },
      { name: "image", label: "Image URL", type: "image" },
    ],
  },
  {
    key: "job-openings",
    label: "Job Openings",
    singular: "Job Opening",
    icon: Briefcase,
    titleField: "title",
    subtitleField: "department",
    fields: [
      { name: "title", label: "Title", type: "text", required: true },
      { name: "slug", label: "Slug", type: "text", required: true },
      { name: "department", label: "Department", type: "text" },
      { name: "location", label: "Location", type: "text" },
      { name: "type", label: "Employment Type", type: "text" },
      { name: "experience", label: "Experience", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "requirements", label: "Requirements", type: "list" },
    ],
  },
  {
    key: "timeline",
    label: "Company Timeline",
    singular: "Timeline Entry",
    icon: History,
    titleField: "title",
    imageField: "image",
    subtitleField: "year",
    fields: [
      { name: "year", label: "Year", type: "text", required: true },
      { name: "title", label: "Title", type: "text", required: true },
      { name: "badge", label: "Badge", type: "text" },
      { name: "description", label: "Description", type: "textarea" },
      { name: "stat", label: "Stat", type: "text" },
      { name: "image", label: "Image URL", type: "image" },
    ],
  },
];

export function getCollectionConfig(key) {
  return collections.find((c) => c.key === key);
}
