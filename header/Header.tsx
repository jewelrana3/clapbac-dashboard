import React from "react";
import Image from "next/image";
import logo from "../public/header/logo.svg";
import person from "../public/header/person.png";
import { Bell, Mail } from "lucide-react";

export default function Header() {
  return (
    <div className="flex items-center justify-between py-6">
      <div>
        <Image src={logo} alt="logo" />
      </div>
      <div className="flex items-center gap-5">
        <button>
          <Bell />
        </button>
        <button>
          <Mail />
        </button>
        <button>
          <Image src={person} alt="logo" />
        </button>
      </div>
    </div>
  );
}
