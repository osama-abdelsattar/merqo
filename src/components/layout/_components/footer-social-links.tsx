"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SITE_INFO } from "@/config/site.config";

function FooterSocialLinks() {
  const socialLinks = SITE_INFO.socialInfo || [];

  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => {
        const { link: href, platform, Icon, iconOnly } = link;
        if (!Icon) return null;
        return (
          <Button key={platform} asChild size="icon-lg" variant="outline">
            <Link
              href={href}
              className="size-10 rounded-full flex items-center justify-center text-muted-foreground"
            >
              {iconOnly && <Icon className="size-5" />} {!iconOnly && platform}
            </Link>
          </Button>
        );
      })}
    </div>
  );
}

export default FooterSocialLinks;
