"use client";

import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import EmptyCard from "@/components/empty-card";
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
  isLoading?: boolean;
  Skeleton: React.ElementType;
}

function ProductListLayout({
  title,
  isEmpty,
  emptyState,
  children,
  isLoading,
  Skeleton,
}: ProductListLayoutProps) {
  if (isLoading) return <Skeleton />;

  if (isEmpty)
    return (
      <section className="min-h-[calc(100dvh-5rem)] flex items-center justify-center">
        <EmptyCard title={emptyState.title} cta={emptyState.cta} />
      </section>
    );

  return (
    <main className="min-h-[calc(100dvh-5rem)]">
      <AnimatedSection className="-mx-6 sm:mx-auto">
        <SectionHeader>{title}</SectionHeader>
        <div className="grid grid-cols-12 gap-6 *:lg:sticky *:lg:h-fit *:lg:top-26">
          {children}
        </div>
      </AnimatedSection>
    </main>
  );
}

export default ProductListLayout;
