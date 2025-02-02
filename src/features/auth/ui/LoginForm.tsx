"use client";

import { useState } from "react";
import { login } from "@/features/auth/api/authService";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/");
    } catch (err) {
      setError("로그인에 실패했습니다. 이메일과 비밀번호를 확인해주세요.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
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

      {/* 로그인 폼 */}
      <div className="w-full max-w-sm">
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="이메일"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg my-2 bg-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 (영문+숫자, 8자리 이상)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg my-2 bg-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-lg bg-gray-500 text-white"
        >
          로그인
        </button>

        {/* 하단 링크 */}
        <div className="flex justify-between text-sm text-gray-500 mt-4">
          <a href="/auth/register" className="hover:underline">
            회원가입
          </a>
          <a href="/auth/find-id" className="hover:underline">
            아이디 찾기
          </a>
          <a href="/auth/find-password" className="hover:underline">
            비밀번호 찾기
          </a>
        </div>

        {/* 소셜 로그인 버튼 */}
        <p className="text-center text-gray-500 text-sm mt-6">
          SNS 간편 로그인
        </p>

        <button className="w-full py-2 mt-4 rounded-lg bg-green-500 text-white flex items-center justify-center gap-2">
          <img
            src="/icons/naver-logo.svg"
            alt="네이버"
            width={20}
            height={20}
          />
          네이버 로그인
        </button>
        <button className="w-full py-2 mt-2 rounded-lg bg-yellow-400 text-black flex items-center justify-center gap-2">
          <img
            src="/icons/kakao-logo.svg"
            alt="카카오"
            width={20}
            height={20}
          />
          카카오 로그인
        </button>
      </div>
    </div>
  );
}
