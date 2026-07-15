import { ICON_BUTTON } from "../../utils/scheduleStyles";

export default function IconButton({ children, className = "" }) {
  return <button className={`${ICON_BUTTON} ${className}`}>{children}</button>;
}