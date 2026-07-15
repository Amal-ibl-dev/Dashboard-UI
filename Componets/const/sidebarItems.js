import {
  LayoutGrid,
  IdCard,
  MessageCircle,
  CircleDollarSign,
  BarChart3,
  Archive,
  Settings,
  Power,
  PanelLeft,
  ArrowRight,
  Box,
  User,
} from "lucide-react";

export const NAV_ITEMS = [
  { id: "dashboard", label: "Dashboard", icon: LayoutGrid },
  { id: "profile", label: "Student Profile", icon: IdCard },
  { id: "mentor", label: "Mentor Info", icon: MessageCircle },
  { id: "financial", label: "Financial", icon: CircleDollarSign },
  { id: "improvement", label: "Improvement", icon: BarChart3 },
  { id: "resources", label: "Course Resources", icon: Archive },
];

export const BOTTOM_ITEMS = [
  { id: "settings", label: "Settings", icon: Settings },
  { id: "logout", label: "Log Out", icon: Power },
];

export const AVATAR_COLORS = [
  "bg-rose-400",
  "bg-amber-400",
  "bg-sky-400",
  "bg-violet-400",
];

export const BRAND = {
  name: "Academix",
};