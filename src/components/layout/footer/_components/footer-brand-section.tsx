"use client";

import Link from "next/link";
import Brand from "@/components/layout/navbar/brand";
import { SITE_INFO } from "@/config/site.config";
import FooterSocialLinks from "@/components/layout/footer/_components/footer-social-links";

function FooterBrandSection() {
  return (
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
      <FooterSocialLinks />
    </div>
  );
}

export default FooterBrandSection;
