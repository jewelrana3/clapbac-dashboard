"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const paths = [
  { id: 1, name: "Overview", path: "/" },
  { id: 2, name: "Users", path: "/users" },
  { id: 3, name: "Reviews", path: "/reviews" },
  { id: 4, name: "Reviewers", path: "/reviewers" },
  { id: 5, name: "Reports", path: "/reports" },
  { id: 6, name: "Announcements", path: "/announcements" },
  {
    id: 7,
    name: "Settings",
    path: "/settings",
    children: [
      {
        id: 7.1,
        name: "Terms & Conditions",
        path: "/settings/terms-conditions",
      },
      {
        id: 7.2,
        name: "Privacy Policy",
        path: "/settings/privacy-policy",
      },
    ],
  },
  { id: 8, name: "Profile", path: "/profile" },
  { id: 9, name: "Log Out", path: "/logout" },
];

export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <section className="">
      <div className="bg-[#F2F2F2] w-[340px] text-[#000000] h-screen py-14">
        {paths.map((item) => {
          const active = pathname === item.path;
          return (
            <div
              key={item.id}
              className="flex items-center justify-center my-4"
            >
              <Link
                href={item.path}
                className={`font-bold px-4 py-2 rounded-md ${
                  active && "bg-[#F05223] text-white"
                }`}
              >
                <p>{item.name}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
