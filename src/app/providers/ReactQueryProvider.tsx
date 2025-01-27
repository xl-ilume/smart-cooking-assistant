"use client";

import React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 2, // 쿼리 실패 시 재시도 횟수
      refetchOnWindowFocus: false, // 브라우저 포커스 시 리패치 비활성화
      staleTime: 1000 * 60 * 5, // 데이터가 신선하다고 간주되는 시간 (5분)
    },
  },
});

export default function ReactQueryProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
