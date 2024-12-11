import { Wifi, Shield, Clock, Zap } from "lucide-react";

const features = [
  {
    name: "Haut débit",
    description: "Vitesses de téléchargement jusqu'à 150 Mbps",
    icon: Wifi,
  },
  {
    name: "Installation professionnelle",
    description: "Service d'installation par des experts qualifiés",
    icon: Shield,
  },
  {
    name: "Support 24/7",
    description: "Assistance technique disponible à tout moment",
    icon: Clock,
  },
  {
    name: "Performance optimale",
    description: "Maintenance mensuelle pour garantir la meilleure connexion",
    icon: Zap,
  },
];

export function FeaturesSection() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">
            Internet par Satellite
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Tout ce que vous devez savoir
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-blue-600">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <dt className="text-xl font-semibold leading-7">{feature.name}</dt>
                <dd className="mt-1 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}