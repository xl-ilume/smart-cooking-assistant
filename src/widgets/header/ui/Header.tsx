"use client";

import Link from "next/link";
import { Bell, Search } from "lucide-react";
import { useState } from "react";
import NotificationsPanel from "./NotificationsPanel";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white shadow-md">
        <div className="max-w-[1024px] mx-auto px-4 py-3 flex items-center gap-4">
          {/* 로고 */}
          <Link href="/" className="text-xl font-bold whitespace-nowrap">
            냉장고마스터
          </Link>

          {/* 검색창 */}
          <div className="flex-1">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="레시피를 검색하세요..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <Search
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* 알람 & 로그인 버튼 */}
          <div className="flex items-center gap-4">
            {/* 알람 아이콘 */}
            <button
              onClick={() => setIsOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <Bell size={24} />
            </button>

            {/* 로그인 버튼 */}
            <Link
              href="/login"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md whitespace-nowrap"
            >
              로그인
            </Link>
          </div>
        </div>
      </header>

      {/* 알람 패널 */}
      {isOpen && <NotificationsPanel onClose={() => setIsOpen(false)} />}
    </>
  );
}
