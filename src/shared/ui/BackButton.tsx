"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="p-2 rounded-full hover:bg-gray-200 transition"
    >
      <ArrowLeft size={24} />
    </button>
  );
}
