import type { Metadata } from "next";
import "@/app/styles";
import ReactQueryProvider from "@/app/providers/ReactQueryProvider";

export const metadata: Metadata = {
  title: "냉장고마스터",
  description: "스마트 요리 비서",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </body>
    </html>
  );
}
