// Next.js Landing Page - Servicios (Optimizada para conversión)

import { Contact, CTA, Footer, Hero, Portfolio, Process, Services, SocialProof } from "./components";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <Hero />
      <SocialProof />
      <Services />
      <Process />
      <Portfolio />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
