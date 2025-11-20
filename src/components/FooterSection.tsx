import { Terminal as TerminalIcon, Lock, Globe, Code } from "lucide-react";

const sections = [
  {
    title: "Ecosystem",
    links: [
      { name: "Sushi Kitchen", href: "/kitchen" },
      { name: "Sushi Legal", href: "/legal" },
      { name: "Sushi Law", href: "/law" },
      { name: "Aegis Core", href: "/aegis-core" },
      { name: "Aegis Pro", href: "/aegis-pro" },
      { name: "Sushi Ecosystem", href: "/sushi-ecosystem" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Team", href: "/team" },
      { name: "Careers", href: "/careers" },
      { name: "Contact", href: "/contact-sales" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "Help", href: "/help" },
      { name: "Support", href: "/support" },
      { name: "Partners", href: "/partners" },
    ],
  },
];

const FooterSection = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-white/10 w-full">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="size-8 bg-indigo-600 rounded-md flex items-center justify-center text-white font-bold">
                S
              </div>
              <span className="font-bold text-white text-xl">
                SUSHI<span className="text-slate-500">SOFTWARE</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 max-w-xs leading-relaxed">
              AI automation with the simplicity of sushi. Privacy by default. Sovereignty by design.
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h4 className="text-white font-bold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href} className="hover:text-indigo-400 transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-600">
            © 2025 Sushi Software Inc. All Rights Reserved.
          </div>
          <div className="flex gap-6 text-slate-500">
            <TerminalIcon className="size-4 hover:text-white cursor-pointer transition-colors" />
            <Lock className="size-4 hover:text-white cursor-pointer transition-colors" />
            <Globe className="size-4 hover:text-white cursor-pointer transition-colors" />
            <Code className="size-4 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export { FooterSection };
