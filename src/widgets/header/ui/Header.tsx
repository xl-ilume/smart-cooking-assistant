"use client";

import Link from "next/link";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full bg-blue-600 text-white p-4">
      <div className="container max-w-[1024px] mx-auto flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="text-xl font-bold">
          냉장고마스터
        </Link>

        {/* 검색창 (PC & 모바일 공통) */}
        <div className="relative flex-1 mx-4 max-w-[400px]">
          <input
            type="text"
            placeholder="검색어 입력"
            className="w-full p-2 pl-10 pr-4 rounded-md text-black"
          />
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={20}
          />
        </div>

        {/* 로그인 버튼 (PC에서만 보이도록) */}
        <Link
          href="/auth"
          className="hidden md:flex items-center justify-center gap-2 border border-white/50 px-4 py-2 rounded-md hover:bg-white hover:text-blue-600 transition-colors duration-300"
        >
          <span className="text-sm font-medium">로그인</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
