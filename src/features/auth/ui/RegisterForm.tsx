"use client";

import { useState } from "react";
import { register } from "@/features/auth/api/authService";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async () => {
    if (password !== passwordConfirm) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      await register(email, password);
      router.push("/auth/login");
    } catch (err: any) {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        setError("이미 사용 중인 이메일입니다.");
      } else if (err.code === "auth/invalid-email") {
        setError("올바른 이메일 주소를 입력해주세요.");
      } else if (err.code === "auth/weak-password") {
        setError("비밀번호는 최소 6자리 이상이어야 합니다.");
      } else if (err.code === "auth/missing-password") {
        setError("비밀번호를 입력해주세요.");
      } else {
        setError("회원가입에 실패했습니다. 입력 정보를 확인해주세요.");
      }
    }
  };

  return (
    <>
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
          placeholder="비밀번호 (6자리 이상)"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg my-2 bg-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="비밀번호 확인"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg my-2 bg-white"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
        />

        <button
          onClick={handleRegister}
          className="w-full my-2 py-2 rounded-lg bg-blue-500 text-white"
        >
          회원가입
        </button>
      </div>
    </>
  );
}
