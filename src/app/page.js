
import React from "react";
import Image from "next/image";
import CSVForm from "@/components/CSVForm";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-[#111525]">

      {/* Form */}

      <CSVForm />

    </div>
  );
}
