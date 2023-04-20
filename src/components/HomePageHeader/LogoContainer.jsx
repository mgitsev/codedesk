import React from "react";
import { logo_container } from "./style.module.scss";
import Link from "next/link";
export default function LogoContainer(props) {
  return (
    <div className={logo_container}>
      <Link href="/" className="text-2xl font-bold">
        Codedesk <sup className="text-xs text-black">tm</sup>
      </Link>
    </div>
  );
}
