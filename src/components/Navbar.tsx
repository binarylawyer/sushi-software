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
        {
          title: "Overview",
          url: "/sushi-ecosystem",
          description: "Platform for simplicity across the Sushi brands.",
        },
        {
          title: "Sushi Kitchen",
          url: "/kitchen",
          icon: <Sunset className="size-5 shrink-0" />,
          description: "IP and infra factory.",
        },
        {
          title: "Sushi Legal",
          url: "/legal",
          icon: <Book className="size-5 shrink-0" />,
          description: "Compliance-as-code blueprints.",
        },
        {
          title: "Sushi Law",
          url: "/law",
          icon: <Trees className="size-5 shrink-0" />,
          description: "Human-oracle network of firms.",
        },
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
    <section className="sticky top-0 z-50 bg-slate-950/90 text-white backdrop-blur border-b border-white/10">
      <div className="container max-w-7xl mx-auto px-6">
        <nav className="hidden lg:flex items-center gap-6 py-4">
          <a href={logo.url} className="flex items-center gap-2">
            <CirclePoundSterling className="text-indigo-400 size-6" />
            <span className="text-lg font-semibold tracking-tighter">
              {logo.title}
            </span>
          </a>

          <div className="flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList>
                {menu.map((item) => renderMenuItem(item))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex gap-2">
            <Button
              asChild
              size="sm"
              className="w-36 h-10 rounded-full bg-white text-slate-950 hover:bg-slate-200"
            >
              <a href={auth.signup.url}>{auth.signup.title}</a>
            </Button>
          </div>
        </nav>

        <div className="flex items-center justify-between py-4 lg:hidden">
          <a href={logo.url} className="flex items-center gap-2">
            <img src={logo.src} className="max-h-8" alt={logo.alt} />
          </a>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="border-white/20 text-white bg-slate-900"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto bg-slate-950 text-white">
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
                  <Button
                    asChild
                    className="rounded-full bg-white text-slate-950 hover:bg-slate-200"
                  >
                    <a href={auth.signup.url}>{auth.signup.title}</a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items && item.items.length > 0) {
    return (
      <NavigationMenuItem key={item.title}>
        <NavigationMenuTrigger className="inline-flex gap-2 text-base text-white">
          {item.icon}
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent className="bg-slate-900 text-white border border-white/10">
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
        className="group inline-flex h-10 w-max items-center justify-center gap-2 rounded-md px-4 py-2 text-base font-medium transition-colors hover:bg-white/10 text-white"
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
          <span className="text-white">{item.icon}</span>
          {item.title}
        </div>
        <div className="ml-2 flex flex-col gap-2">
          {item.items.map((sub) => (
            <a
              key={sub.title}
              href={sub.url}
              className="flex items-start gap-2 text-sm text-slate-300 hover:text-white"
            >
              {sub.icon && <span className="text-white">{sub.icon}</span>}
              <span>
                <div className="font-semibold text-white">{sub.title}</div>
                {sub.description && (
                  <div className="text-xs text-slate-300">{sub.description}</div>
                )}
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
      <span className="text-white">{item.icon}</span>
      {item.title}
    </a>
  );
};

const SubMenuLink = ({ item }: { item: MenuItem }) => {
  return (
    <a
      className="flex flex-row gap-4 rounded-md p-3 leading-none no-underline transition-colors outline-none select-none hover:bg-white/10 hover:text-white"
      href={item.url}
    >
      <div className="text-white">{item.icon}</div>
      <div>
        <div className="text-sm font-semibold text-white">{item.title}</div>
        {item.description && (
          <p className="text-sm leading-snug text-slate-300">{item.description}</p>
        )}
      </div>
    </a>
  );
};

export { Navbar };
