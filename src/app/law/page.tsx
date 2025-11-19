import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

export default function LawPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-slate-50 dark:bg-slate-900">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
          Sushi Law
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mb-8 px-4">
          The Integrated Legal Trust Layer. Bridging the gap between software code and legal jurisdictions.
        </p>
        <Button size="lg" className="rounded-full">Consult Legal Engineering</Button>
      </div>
      <FooterSection />
    </main>
  );
}
