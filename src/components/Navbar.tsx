import {
  Book,
  CirclePoundSterling,
  Menu,
  Sunset,
  Trees,
  Zap,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: React.ReactNode;
  items?: MenuItem[];
}

interface Navbar1Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  auth?: {
    signup: {
      title: string;
      url: string;
    };
  };
}

const Navbar = ({
  logo = {
    url: "/",
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg",
    alt: "logo",
    title: "Sushi Software",
  },
  menu = [
    {
      title: "Sushi Ecosystem",
      url: "/sushi-ecosystem",
      icon: <Zap className="size-5 shrink-0" />,
      items: [
        { title: "Overview", url: "/sushi-ecosystem", description: "Platform for simplicity across the Sushi brands." },
        { title: "Sushi Kitchen", url: "/kitchen", icon: <Sunset className="size-5 shrink-0" />, description: "IP and infra factory." },
        { title: "Sushi Legal", url: "/legal", icon: <Book className="size-5 shrink-0" />, description: "Compliance-as-code blueprints." },
        { title: "Sushi Law", url: "/law", icon: <Trees className="size-5 shrink-0" />, description: "Human-oracle network of firms." },
      ],
    },
    { title: "Aegis Core", url: "/aegis-core", icon: <CirclePoundSterling className="size-5 shrink-0" /> },
    { title: "Aegis Pro", url: "/aegis-pro", icon: <Zap className="size-5 shrink-0" /> },
    { title: "Resources", url: "/resources" },
  ],
  auth = {
    signup: { title: "Contact Sales", url: "/contact-sales" },
  },
}: Navbar1Props) => {
  return (
    <section className="py-4 sticky top-0 z-50 bg-background ">
      <div className="container max-w-7xl items-center mx-auto px-6">
        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6">
          {/* Logo */}
          <a href={logo.url} className="flex items-center gap-2">
            <CirclePoundSterling className="text-blue-500 size-6" />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>

          {/* Centered menu */}
          <div className="flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* CTA */}
          <div className="flex gap-2">
            <Button asChild size="sm" className="w-32 h-10">
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href={logo.url} className="flex items-center gap-2">
              <img src={logo.src} className="max-h-8" alt={logo.alt} />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto">
                <SheetHeader>
                  <SheetTitle>
                    <a href={logo.url} className="flex items-center gap-2">
                      <img src={logo.src} className="max-h-8" alt={logo.alt} />
                    </a>
                  </SheetTitle>
                </SheetHeader>
                  <div className="flex flex-col gap-6 p-4">
                  <div className="flex w-full flex-col gap-4">
                    {menu.map((item) => renderMobileMenuItem(item))}
                  </div>

                  <div className="flex flex-col gap-3">
                    <Button asChild>
                      <a href={auth.signup.url}>{auth.signup.title}</a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="inline-flex gap-2 text-base">
          {item.icon}
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-popover text-popover-foreground">
          <div className="grid w-[360px] gap-1 p-3">
            {item.items.map((sub) => (
              <NavigationMenuLink asChild key={sub.title}>
                <SubMenuLink item={sub} />
              </NavigationMenuLink>
            ))}
          </div>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem key={item.title}>
      <NavigationMenuLink
        href={item.url}
        className="group inline-flex h-10 w-max items-center justify-center gap-2 rounded-md bg-background px-4 py-2 text-base font-medium transition-colors hover:bg-muted hover:text-accent-foreground"
      >
        {item.icon}
        {item.title}
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};

const renderMobileMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <div key={item.title} className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-md font-semibold">
          <span className="text-foreground">{item.icon}</span>
          {item.title}
        </div>
        <div className="ml-2 flex flex-col gap-2">
          {item.items.map((sub) => (
            <a
              key={sub.title}
              href={sub.url}
              className="flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {sub.icon && <span className="text-foreground">{sub.icon}</span>}
              <span>
                <div className="font-semibold text-foreground">{sub.title}</div>
                {sub.description && <div className="text-xs text-muted-foreground">{sub.description}</div>}
              </span>
            </a>
          ))}
        </div>
      </div>
    );
  }

  return (
    <a
      key={item.title}
      href={item.url}
      className="flex items-center gap-3 text-md font-semibold"
    >
      <span className="text-foreground">{item.icon}</span>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-muted hover:text-accent-foreground"
      href={item.url}
    >
      <div className="text-foreground">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
