"use client";

import AnimatedSection from "@/components/ui/animated-section";
import SectionHeader from "@/components/ui/section-header";
import EmptyCard from "@/components/ui/empty-card";
import { CTA } from "@/types/hero-slide.type";
import React from "react";

interface ProductListLayoutProps {
  title: string;
  isEmpty: boolean;
  emptyState: {
    title: string;
    cta?: CTA;
  };
  children: React.ReactNode;
  sidebar?: React.ReactNode;
  listFooter?: React.ReactNode;
  isLoading?: boolean;
}

export default function ProductListLayout({
  title,
  isEmpty,
  emptyState,
  children,
  sidebar,
  listFooter,
  isLoading,
}: ProductListLayoutProps) {
  return (
    <main className="min-h-[calc(100dvh-5rem)]">
      <AnimatedSection>
        <SectionHeader>{title}</SectionHeader>
        <div className="grid grid-cols-12 gap-8">
          {!isEmpty ? (
            <>
              <div className={`col-span-full ${sidebar ? "lg:col-span-8 xl:col-span-9" : ""} flex flex-col gap-4`}>
                <div className="flex flex-col gap-4">
                  {children}
                </div>
                {listFooter && (
                  <div className="mt-4">
                    {listFooter}
                  </div>
                )}
              </div>
              {sidebar && (
                <div className="col-span-full lg:col-span-4 xl:col-span-3 lg:sticky lg:top-24 h-fit">
                  {sidebar}
                </div>
              )}
            </>
          ) : !isLoading ? (
            <div className="col-span-full">
              <EmptyCard title={emptyState.title} cta={emptyState.cta} />
            </div>
          ) : (
             <div className="col-span-full">
               {/* Optional: Add a skeleton here if needed */}
             </div>
          )}
        </div>
      </AnimatedSection>
    </main>
  );
}
