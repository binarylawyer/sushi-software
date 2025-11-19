import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Smartphone,
  Apple,
} from "lucide-react";

const sections = [
  {
    title: "Solutions",
    links: [
      { name: "Overview", href: "#" },
      { name: "Services", href: "#" },
      { name: "Case Studies", href: "#" },
      { name: "Approach", href: "#" },
      { name: "Integrations", href: "#" },
      { name: "Consulting", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Support", href: "#" },
      { name: "Partners", href: "#" },
    ],
  },
  {
    title: "Connect",
    links: [
      { name: "Twitter", href: "#" },
      { name: "Instagram", href: "#" },
      { name: "LinkedIn", href: "#" },
    ],
  },
];

const FooterSection = () => {
  return (
    <section className="py-32 w-full">
      <div className="container  max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 gap-10">
            <div className="grid gap-8 lg:grid-cols-4 lg:flex-row">
              <div className="col-span-3">
                <p className="mb-3 font-bold">Follow us</p>
                <ul className="flex items-center gap-2 text-muted-foreground">
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Facebook className="size-6" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Twitter className="size-6" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Instagram className="size-6" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Linkedin className="size-6" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <p className="mb-3 font-bold">Get in Touch</p>
                <ul className="flex items-center gap-2 text-muted-foreground">
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Smartphone className="size-6" />
                      </span>
                    </a>
                  </li>
                  <li className="font-medium">
                    <a href="#">
                      <span className="flex size-12 items-center justify-center rounded-full bg-muted transition-colors hover:text-primary">
                        <Apple className="size-6" />
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-24 border-t pt-8">
            <p className="text-center text-sm font-medium text-muted-foreground">
              © 2024 Sushi Software. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { FooterSection };