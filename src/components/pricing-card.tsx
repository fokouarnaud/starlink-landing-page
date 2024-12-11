import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { PRICING } from "@/lib/constants";

export function PricingCard() {
  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl">Pack Starlink Complet</CardTitle>
        <CardDescription>Tout ce dont vous avez besoin pour démarrer</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold mb-6">{PRICING.EQUIPMENT.toLocaleString()} FCFA</div>
        <ul className="space-y-3">
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Kit Starlink complet</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Installation professionnelle ({PRICING.INSTALLATION.toLocaleString()} FCFA)</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Maintenance mensuelle ({PRICING.MAINTENANCE.toLocaleString()} FCFA/mois)</span>
          </li>
          <li className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span>Support technique dédié</span>
          </li>
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full" size="lg">
          Rejoindre la liste d&apos;attente
        </Button>
      </CardFooter>
    </Card>
  );
}