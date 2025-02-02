import { Header } from "@/widgets/header";
import { Footer } from "@/widgets/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      <main className="py-[66px]">{children}</main>
      <Footer />
    </>
  );
}
