import type { Metadata } from "next";
import "../styles";
import ReactQueryProvider from "../providers/ReactQueryProvider";
import { Header } from "@/widgets/header";

export const metadata: Metadata = {
  title: "냉장고마스터",
  description: "스마트 요리 비서",
};

export function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ReactQueryProvider>
          <Header />
          <main>{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
