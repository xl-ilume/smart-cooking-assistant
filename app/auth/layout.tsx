"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth";
import BackButton from "@/shared/ui/BackButton";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (user) {
      router.push("/"); // ✅ 로그인된 상태라면 홈페이지로 리디렉트
    }
  }, [user, router]);

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <div className="max-w-[1024px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
          <BackButton />
        </div>
      </header>
      <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
        {/* 로고 */}
        <div className="mb-6">
          <img
            src="/logo.png"
            alt="Logo"
            width={80}
            height={80}
            className="rounded-lg"
          />
        </div>
        {children}
      </main>
    </>
  );
}
