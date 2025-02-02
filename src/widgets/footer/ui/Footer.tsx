"use client";

import { Home, BookOpen, List, Star, User } from "lucide-react";
import NavItem from "./NavItem";

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md z-10">
      <div className="max-w-[1024px] mx-auto flex justify-around py-3">
        <NavItem href="/" icon={<Home size={24} />} label="홈" />
        <NavItem href="/recipes" icon={<BookOpen size={24} />} label="레시피" />
        <NavItem
          href="/ingredients"
          icon={<List size={24} />}
          label="재료관리"
          protected
        />
        <NavItem
          href="/favorites"
          icon={<Star size={24} />}
          label="즐겨찾기"
          protected
        />
        <NavItem
          href="/mypage"
          icon={<User size={24} />}
          label="마이페이지"
          protected
        />
      </div>
    </nav>
  );
}
