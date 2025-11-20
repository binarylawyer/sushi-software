import { HeroSection } from "@/components/HeroSection";
import { FooterSection } from "@/components/FooterSection";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function LegalPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Legal
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          The Opus RegTech Engine. Automated compliance and regulatory infrastructure for Real World Assets.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://sushi.legal" target="_blank" rel="noreferrer">
            Visit Sushi.legal
          </a>
        </Button>
      </div>
      <FooterSection />
    </main>
  );
}
