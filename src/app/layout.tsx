import type { Metadata } from "next";
import "./globals.css";
import Header from "@/shared/ui/Header";
import Footer from "@/shared/ui/Footer";

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
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
