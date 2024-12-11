import { HeroSection } from './components/hero-section';
import { FeaturesSection } from './components/features-section';
import { PricingCard } from './components/pricing-card';
import { ContactSection } from './components/contact-section';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection />
      <FeaturesSection />
      <div className="py-24 sm:py-32 bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Tarifs transparents
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Un prix unique pour tout le matériel et l&apos;installation
            </p>
          </div>
          <div className="flex justify-center">
            <PricingCard />
          </div>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

export default App;