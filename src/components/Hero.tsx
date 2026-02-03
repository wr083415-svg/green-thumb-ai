import { Button } from "@/components/ui/button";
import { Palmtree, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, hsl(var(--primary) / 0.7), hsl(var(--primary) / 0.85)), url('https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=2070&auto=format&fit=crop')`,
        }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20">
        <Palmtree className="w-32 h-32 text-accent rotate-12" />
      </div>
      <div className="absolute bottom-32 right-16 opacity-15">
        <Palmtree className="w-24 h-24 text-accent -rotate-45" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Palmtree className="w-8 h-8 text-accent" />
            <span className="text-accent font-medium tracking-widest uppercase text-sm">
              Professional Landscaping Services
            </span>
            <Palmtree className="w-8 h-8 text-accent" />
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-primary-foreground mb-6 leading-tight">
            Transform Your
            <span className="block text-accent">Outdoor Space</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Creating stunning landscapes that bring your vision to life. 
            From elegant gardens to complete outdoor transformations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={scrollToContact}
              className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Get Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={scrollToServices}
              className="border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-lg px-8 py-6 rounded-full font-medium backdrop-blur-sm"
            >
              Explore Services
            </Button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <button 
            onClick={scrollToServices}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            aria-label="Scroll to services"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
