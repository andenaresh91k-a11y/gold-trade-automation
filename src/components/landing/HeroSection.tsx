import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  const scrollToPayment = () => {
    document.getElementById("payment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary" />
      
      {/* Gold accent lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 px-4 py-20 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse-gold" />
          <span className="text-sm font-medium text-primary">100% Automated Trading</span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold tracking-tight mb-6">
          <span className="text-gold-gradient">Royal Gold Algo</span>
        </h1>

        <p className="text-xl sm:text-2xl md:text-3xl font-display text-foreground/90 mb-4">
          Fully Automated Trading Coding Guide
        </p>

        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10">
          Set up your automated gold trading system once — let it trade 24/5. 
          Transform your trading with the ultimate SMART TRADING CODING GUIDE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            size="lg"
            onClick={scrollToPayment}
            className="gradient-gold text-primary-foreground font-display font-bold text-lg px-8 py-6 glow-gold hover:glow-gold-intense transition-all duration-300"
          >
            Get Access Now
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })}
            className="border-primary/50 text-primary hover:bg-primary/10 font-display px-8 py-6"
          >
            Learn More
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { value: "24/5", label: "Trading Hours" },
            { value: "$100", label: "Min. Investment" },
            { value: "MT4/MT5", label: "Platform" },
            { value: "XAUUSD", label: "Gold Trading" },
          ].map((stat, i) => (
            <div key={i} className="text-center p-4 rounded-lg bg-card/50 border border-border/50">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary/50" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;