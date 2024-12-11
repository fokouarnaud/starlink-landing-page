import { Satellite } from "lucide-react";

export function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-blue-900 to-black py-24 sm:py-32">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <Satellite className="mx-auto h-16 w-16 text-blue-400 mb-8" />
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Internet Starlink à Yaoundé
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Connectez-vous à l&apos;internet haut débit par satellite. Installation professionnelle et support local disponibles.
          </p>
        </div>
      </div>
    </div>
  );
}