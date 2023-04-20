import React from "react";
import { nav_toggle } from "./style.module.scss";
export default function SignupToggle() {
  return (
    <div className={nav_toggle}>
      <svg viewBox="0 0 100 80" width="40" height="40">
        <rect x={30} rx={8} width="70" height="15"></rect>
        <rect rx={8} y="30" width="100" height="15"></rect>
        <rect x={50} rx={8} y="60" width="50" height="15"></rect>
      </svg>
    </div>
  );
}
