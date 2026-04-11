"use client";
import { SITE_INFO } from "@/config/site.config";
import Link from "next/link";
import Brand from "@/components/layout/navbar-components/brand";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useFooter } from "@/hooks/use-footer";
import { PAYMENT_METHODS } from "@/config/footer.config";

function Footer() {
  const { footerSections: FOOTER_SECTIONS } = useFooter();
  return (
    <footer className="bg-muted/60 dark:bg-card/80 *:container *:max-w-7xl *:mx-auto *:px-4">
      <div className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <Brand />
              <p className="text-muted-foreground text-sm leading-relaxed">
                {SITE_INFO.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {SITE_INFO.contactInfo?.map((link) => {
                const { value, Icon, type, href } = link;
                return (
                  <p
                    key={value}
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary-400 transition-colors text-sm"
                  >
                    {Icon && <Icon className="size-5" />}
                    {type !== "address" ? (
                      <Link href={href || "/"}>
                        <span>{value}</span>
                      </Link>
                    ) : (
                      <span>{value}</span>
                    )}
                  </p>
                );
              })}
            </div>
            <div className="flex items-center gap-3">
              {SITE_INFO.socialInfo?.map((link) => {
                const { link: href, platform, Icon, iconOnly } = link;
                return (
                  <Button
                    key={platform}
                    asChild
                    size="icon-lg"
                    variant="outline"
                  >
                    <Link
                      href={href}
                      className="size-10 rounded-full flex items-center justify-center text-muted-foreground"
                    >
                      {Icon && iconOnly && <Icon className="size-5" />}{" "}
                      {!iconOnly && platform}
                    </Link>
                  </Button>
                );
              })}
            </div>
          </div>
          {FOOTER_SECTIONS.map((section) => {
            const { title, items } = section;
            return (
              <div key={title} className="lg:col-span-2">
                <h3 className="font-semibold text-lg mb-5">{title}</h3>
                <ul className="flex flex-col gap-2">
                  {items.map((item) => {
                    const { label, href } = item;
                    return (
                      <li key={label}>
                        <Link
                          className="text-muted-foreground/80 hover:text-muted-foreground transition-colors text-sm"
                          href={href}
                        >
                          {label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <Separator />
      <div className="py-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm text-center md:text-left">
            &copy; {SITE_INFO.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-muted-foreground">
            {PAYMENT_METHODS.map((method) => {
              const { srLabel, Icon } = method;
              return (
                <div key={srLabel}>
                  <Icon className="size-6" />
                  <span className="sr-only">{srLabel}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
