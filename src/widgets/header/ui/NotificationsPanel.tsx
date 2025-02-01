"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function NotificationsPanel({
  onClose,
}: {
  onClose: () => void;
}) {
  return (
    <div className="fixed top-0 right-0 w-[320px] h-full bg-white shadow-lg z-50 transition-transform translate-x-0">
      {/* 상단 바 */}
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-semibold">알람</h2>
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <X size={20} />
        </button>
      </div>

      {/* 알람 목록 */}
      <div className="p-4 space-y-4">
        {/* 예제 알람 */}
        <div className="p-3 bg-gray-100 rounded-md">
          <p className="text-sm font-medium">새로운 레시피가 등록되었습니다!</p>
          <p className="text-xs text-gray-500">5분 전</p>
        </div>
        <div className="p-3 bg-gray-100 rounded-md">
          <p className="text-sm font-medium">재료가 부족합니다: 당근</p>
          <p className="text-xs text-gray-500">1시간 전</p>
        </div>
      </div>
    </div>
  );
}
