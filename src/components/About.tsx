import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const stats = [
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: CheckCircle, value: "1000+", label: "Projects Completed" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
];

const features = [
  "Eco-friendly and sustainable practices",
  "Licensed and fully insured team",
  "Custom designs for every budget",
  "Seasonal maintenance programs",
  "Native plant specialists",
  "Satisfaction guaranteed",
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=2070&auto=format&fit=crop"
                alt="Beautiful landscaped garden"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-8 -right-8 bg-primary text-primary-foreground p-6 rounded-2xl shadow-xl hidden md:block">
              <div className="text-4xl font-serif font-bold">15+</div>
              <div className="text-sm opacity-90">Years of Excellence</div>
            </div>
          </div>

          {/* Content Section */}
          <div>
            <Badge variant="secondary" className="mb-4 bg-accent/10 text-accent border-accent/20">
              About GreenScape
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Creating Beautiful Outdoor Spaces Since 2009
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              At GreenScape Landscaping, we believe that every outdoor space has the potential 
              to become something extraordinary. Our passionate team of designers and horticulturists 
              work together to transform your vision into a stunning reality.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              From intimate residential gardens to expansive commercial properties, we bring 
              creativity, expertise, and sustainable practices to every project we undertake.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-3 mb-10">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <stat.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="font-serif text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
