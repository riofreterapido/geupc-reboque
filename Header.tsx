import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function Header() {
  const whatsappNumber = "21996458786";
  const phoneNumber = "21996458786";

  return (
    <header className="fixed top-0 w-full bg-background/95 backdrop-blur border-b border-border z-50">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg font-mono">G</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-primary font-mono text-sm">GEUPC</span>
            <span className="text-xs text-muted-foreground font-mono">REBOQUE</span>
          </div>
        </div>

        {/* Contact Buttons */}
        <div className="flex items-center gap-3">
          {/* WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=Olá%20Geupc%20Reboque!%20Preciso%20de%20um%20reboque.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white gap-2 font-mono font-bold"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </Button>
          </a>

          {/* Phone Button */}
          <a href={`tel:${phoneNumber}`}>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-mono font-bold"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">Ligar</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}
