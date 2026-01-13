import React from 'react';
import Hero from '@/components/allpages/Hero';
import WhatIncluded from '@/components/allpages/WhatIncluded';
import PageShowcase from '@/components/allpages/PageShowcase';
import PurchaseCTA from '@/components/allpages/PurchaseCTA';

const Page = () => {
  return (
    <main className="flex flex-col min-h-screen bg-background text-foreground">
      <Hero />
      <WhatIncluded />
      <PageShowcase />
      <PurchaseCTA />
    </main>
  );
};

export default Page;