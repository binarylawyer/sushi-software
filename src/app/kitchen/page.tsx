import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function KitchenPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Kitchen
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          RWA Marketplace & Tokenization Factory. Cook up your assets and serve them to the global market.
        </p>
        <Button size="lg" className="rounded-full" asChild>
          <a href="https://sushikitchen.io" target="_blank" rel="noreferrer">
            Visit SushiKitchen.io
          </a>
        </Button>
      </div>
      <FooterSection />
    </main>
  );
}
