import Image from "next/image";
import { Bell, Pencil } from "lucide-react";
import Link from "next/link";

export default function UserProfileCard() {
  return (
    <div className="flex justify-between items-center p-6 bg-white rounded-lg shadow">
      {/* 왼쪽: 프로필 이미지 & 정보 */}
      <div className="flex items-center gap-6">
        <Image
          src="/images/user-placeholder.png"
          alt="프로필 이미지"
          width={100}
          height={100}
          className="rounded-full"
        />
        <div className="flex flex-col">
          <h2 className="text-xl font-semibold">사용자 이름</h2>

          <div className="flex gap-4 mt-2">
            <StatItem title="내 레시피" value="12" />
            <StatItem title="팔로워" value="1,234" />
            <StatItem title="팔로우" value="567" />
          </div>
          <Link
            href="/recipes/add"
            className="flex items-center gap-2 mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md"
          >
            <Pencil size={20} />
            <span className="text-sm font-semibold">레시피 작성</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function StatItem({ title, value }: { title: string; value: string }) {
  return (
    <div className="text-center">
      <p className="text-lg font-bold">{value}</p>
      <p className="text-gray-500 text-sm">{title}</p>
    </div>
  );
}
