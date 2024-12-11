import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export function ContactSection() {
  const whatsappLink = "https://chat.whatsapp.com/your-group-link";
  
  return (
    <div className="bg-blue-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Des questions ?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Rejoignez notre groupe WhatsApp pour plus d&apos;informations et pour rester informé des disponibilités.
          </p>
          <div className="mt-10">
            <Button
              size="lg"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => window.open(whatsappLink, '_blank')}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Rejoindre le groupe WhatsApp
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}