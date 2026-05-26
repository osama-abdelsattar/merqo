import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import ScrollToTop from "@/app/(shop)/_components/scroll-to-top";

function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-background border border-border text-foreground px-4 py-2 rounded-md z-100 shadow-md focus:ring-2 focus:ring-ring"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <header className="px-6 h-20 border-b fixed top-0 inset-x-0 z-50 bg-background/95 backdrop-blur-2xl">
        <Navbar className="max-w-7xl mx-auto flex items-center justify-between gap-6 h-full" />
      </header>
      <main id="main-content" tabIndex={-1} className="mt-20 px-6 outline-none">
        {children}
      </main>
      <Footer />
    </>
  );
}

export default HomeLayout;
