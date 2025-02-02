"use client";

import { useState } from "react";
import { register } from "@/features/auth/api/authService";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    try {
      await register(email, password);
      router.push("/auth/login");
    } catch (err) {
      setError("회원가입에 실패했습니다. 이메일을 확인해주세요.");
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 bg-white rounded-lg shadow">
      <h1 className="text-2xl font-bold mb-4">회원가입</h1>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <input
        type="email"
        placeholder="이메일"
        className="w-full px-4 py-2 border rounded-lg my-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        className="w-full px-4 py-2 border rounded-lg my-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        onClick={handleRegister}
        className="w-full bg-green-500 text-white py-2 rounded-lg"
      >
        회원가입
      </button>
    </div>
  );
}
