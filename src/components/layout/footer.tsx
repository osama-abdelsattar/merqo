"use client";
import { SITE_INFO } from "@/config/site.config";
import { Separator } from "@/components/ui/separator";
import { useFooter } from "@/hooks/use-footer";
import FooterBrandSection from "./_components/footer-brand-section";
import FooterLinksSection from "./_components/footer-links-section";
import FooterPaymentMethods from "./_components/footer-payment-methods";

function Footer() {
  const { footerSections: FOOTER_SECTIONS } = useFooter();

  return (
    <footer className="bg-muted/60 dark:bg-card/80 *:container *:max-w-7xl *:mx-auto *:px-4">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <FooterBrandSection />
          {FOOTER_SECTIONS.map((section) => (
            <FooterLinksSection
              key={section.title}
              title={section.title}
              items={section.items}
            />
          ))}
        </div>
      </div>
      <Separator />
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {SITE_INFO.name}. All rights reserved.
          </p>
          <FooterPaymentMethods />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
