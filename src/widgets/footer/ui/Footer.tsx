"use client";

import Link from "next/link";
import { Home, List, BookOpen, Star, User } from "lucide-react"; // 아이콘 추가

export default function Footer() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-300 shadow-md">
      <div className="max-w-[1024px] mx-auto flex justify-around py-3">
        <NavItem href="/" icon={<Home size={24} />} label="홈" />
        <NavItem
          href="/ingredients"
          icon={<List size={24} />}
          label="재료관리"
        />
        <NavItem href="/recipes" icon={<BookOpen size={24} />} label="레시피" />
        <NavItem href="/favorites" icon={<Star size={24} />} label="즐겨찾기" />
        <NavItem href="/mypage" icon={<User size={24} />} label="마이페이지" />
      </div>
    </nav>
  );
}

// 개별 네비게이션 아이템 컴포넌트
function NavItem({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center text-gray-600 hover:text-blue-600 transition-colors"
    >
      {icon}
      <span className="text-xs mt-1">{label}</span>
    </Link>
  );
}
