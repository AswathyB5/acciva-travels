import {
  Car,
  Building2,
  Plane,
  Bus,
  ShieldCheck,
  Navigation,
  MapPin,
  Users,
  Award,
  Headphones,
} from "lucide-react";

export const iconMap = {
  Car,
  Building2,
  Plane,
  Bus,
  ShieldCheck,
  Navigation,
  MapPin,
  Users,
  Award,
  Headphones,
};

export const iconNames = Object.keys(iconMap);

export function resolveIcon(name) {
  return iconMap[name] || Car;
}
