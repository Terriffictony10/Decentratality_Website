import React from 'react';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { ProjectCarousel } from '@/components/ProjectCarousel';
import { ProjectFAQ } from '@/components/ProjectFAQ';
import { CTA } from '@/components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <Hero />
      <Features />
      <ProjectCarousel />
      <ProjectFAQ />
      <CTA />
    </div>
  );
}

export default App;