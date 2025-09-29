import Header from "@/header/Header";
import Sidebar from "@/share/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div>
        <Header />
      </div>
      <section className="flex">
        <Sidebar />
        <div className="bg-white">{children}</div>
      </section>
    </div>
  );
}
