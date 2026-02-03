import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2, TreeDeciduous, Home, Droplets, Scissors, Sun } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Lawn Maintenance",
    description: "Regular mowing, edging, fertilization, and weed control to keep your lawn lush and healthy year-round.",
    features: ["Weekly mowing", "Seasonal fertilization", "Weed control"],
  },
  {
    icon: Flower2,
    title: "Garden Design",
    description: "Custom garden designs featuring native plants, perennials, and seasonal blooms tailored to your style.",
    features: ["Custom layouts", "Native plants", "Color planning"],
  },
  {
    icon: Home,
    title: "Hardscaping",
    description: "Beautiful patios, walkways, retaining walls, and outdoor living spaces built to last.",
    features: ["Patios & decks", "Stone walkways", "Fire pits"],
  },
  {
    icon: TreeDeciduous,
    title: "Tree Services",
    description: "Professional tree trimming, pruning, removal, and stump grinding by certified arborists.",
    features: ["Trimming & pruning", "Safe removal", "Health assessments"],
  },
  {
    icon: Droplets,
    title: "Irrigation Systems",
    description: "Smart irrigation design, installation, and maintenance for efficient water management.",
    features: ["Smart controllers", "Drip systems", "Seasonal adjustments"],
  },
  {
    icon: Sun,
    title: "Outdoor Lighting",
    description: "Landscape lighting design that enhances beauty, safety, and extends outdoor enjoyment.",
    features: ["Path lighting", "Accent lights", "Security lighting"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-medium tracking-widest uppercase text-sm">
            What We Offer
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-6">
            Our Landscaping Services
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From routine maintenance to complete outdoor transformations, we offer 
            comprehensive landscaping solutions tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="group bg-card hover:shadow-xl transition-all duration-300 border-border/50 hover:border-accent/30 overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="font-serif text-2xl text-foreground">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
