import {
  ShoppingBag,
  Utensils,
  Car,
  Tv,
  Heart,
  Briefcase,
  CircleDashed,
} from "lucide-react";

export const CATEGORY_MAP = {
  shopping: {
    label: "Shopping",
    icon: ShoppingBag,
  },
  food: {
    label: "Food & Drinks",
    icon: Utensils,
  },
  transport: {
    label: "Transport",
    icon: Car,
  },
  entertainment: {
    label: "Entertainment",
    icon: Tv,
  },
  health: {
    label: "Health",
    icon: Heart,
  },
  salary: {
    label: "Salary",
    icon: Briefcase,
  },
  other: {
    label: "Other",
    icon: CircleDashed,
  },
};
