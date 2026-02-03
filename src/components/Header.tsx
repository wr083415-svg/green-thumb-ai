import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Leaf, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#");
            }}
            className="flex items-center gap-2"
          >
            <div className={`p-2 rounded-xl ${isScrolled ? "bg-primary" : "bg-primary-foreground/20"}`}>
              <Leaf className={`w-6 h-6 ${isScrolled ? "text-primary-foreground" : "text-accent"}`} />
            </div>
            <span className={`font-serif text-2xl font-bold ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
              GreenScape
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(link.href);
                }}
                className={`font-medium transition-colors hover:text-accent ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={() => scrollTo("#contact")}
              className="bg-accent hover:bg-accent/90 text-accent-foreground rounded-full px-6"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className={isScrolled ? "text-foreground" : "text-primary-foreground"}
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 bg-primary text-primary-foreground">
              <div className="flex flex-col h-full pt-8">
                <div className="flex items-center gap-2 mb-10">
                  <div className="p-2 rounded-xl bg-accent/20">
                    <Leaf className="w-6 h-6 text-accent" />
                  </div>
                  <span className="font-serif text-2xl font-bold">GreenScape</span>
                </div>
                <nav className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollTo(link.href);
                      }}
                      className="text-xl font-medium hover:text-accent transition-colors"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-auto pb-8">
                  <Button
                    onClick={() => scrollTo("#contact")}
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full"
                    size="lg"
                  >
                    Get Free Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export default Header;
