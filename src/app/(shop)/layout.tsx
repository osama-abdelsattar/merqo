import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/app/_components/scroll-to-top";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollToTop />
      <header className="px-6 h-20 border-b fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-2xl">
        <Navbar className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-full" />
      </header>
      <main className="mt-20 px-6">{children}</main>
      <Footer />
    </>
  );
}
