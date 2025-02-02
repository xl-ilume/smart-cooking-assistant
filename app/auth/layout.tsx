"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/features/auth";
import BackButton from "@/shared/ui/BackButton";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const { user, isLoading } = useAuthStore();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      if (user) {
        router.replace("/"); // ✅ 로그인된 상태라면 즉시 메인 페이지로 이동
      } else {
        setShouldRender(true); // ✅ 로그인 상태 확인 후 렌더링 허용
      }
    }
  }, [user, isLoading, router]);

  // ✅ Firebase 초기화가 끝날 때까지 아무것도 렌더링하지 않음
  if (!shouldRender)
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-2">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-gray-500 rounded-full animate-spin"></div>
          <p className="text-gray-500 text-sm">로딩 중...</p>
        </div>
      </div>
    );

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
