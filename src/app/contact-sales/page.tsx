import { FooterSection } from "@/components/FooterSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const DESTINATIONS = [
  { name: "Sushi Kitchen", href: "https://sushikitchen.io" },
  { name: "Sushi Legal", href: "https://sushi.legal" },
  { name: "Sushi Law", href: "https://sushi.law" },
  { name: "Aegis Core", href: "/aegis-core" },
  { name: "Aegis Pro", href: "/aegis-pro" },
  { name: "Sushi Ecosystem", href: "/sushi-ecosystem" },
];

export default function ContactSalesPage() {
  return (
    <main className="w-full flex flex-col items-center overflow-hidden">
      <section className="w-full bg-gradient-to-b from-background via-muted/40 to-background py-20">
        <div className="container max-w-5xl px-6 mx-auto flex flex-col gap-6 text-center">
          <p className="text-sm font-semibold text-primary uppercase tracking-[0.2em]">
            Contact Sales
          </p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Let’s tailor the Sushi ecosystem to your use case
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Share a few details and tell us which property you want to explore.
            We’ll route you to the right team for compliant RWA, legal engineering, or automation with the Sushi Stack.
          </p>
        </div>
      </section>

      <section className="w-full py-16">
        <div className="container max-w-3xl px-6 mx-auto space-y-10">
          <div className="rounded-3xl border bg-card p-6 shadow-sm">
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="property">Property of interest</Label>
                <Select>
                  <SelectTrigger id="property">
                    <SelectValue placeholder="Select a property" />
                  </SelectTrigger>
                  <SelectContent>
                    {DESTINATIONS.map((dest) => (
                      <SelectItem key={dest.name} value={dest.name}>
                        {dest.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="purpose">Purpose of inquiry</Label>
                <textarea
                  id="purpose"
                  name="purpose"
                  className="min-h-[120px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  placeholder="Tell us what you’re looking to achieve."
                  required
                />
              </div>

              <Button type="submit" className="w-full md:w-auto">
                Submit inquiry
              </Button>
            </form>
          </div>

          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-semibold">Prefer to go direct?</h2>
            <p className="text-muted-foreground">
              You can visit each property’s site for more details and direct support.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {DESTINATIONS.map((dest) => (
              <a
                key={dest.name}
                href={dest.href}
                target={dest.href.startsWith("http") ? "_blank" : undefined}
                rel={dest.href.startsWith("http") ? "noreferrer" : undefined}
                className="rounded-2xl border bg-card p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <h3 className="text-lg font-semibold">{dest.name}</h3>
                <p className="text-sm text-primary mt-2">Visit site</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </main>
  );
}
