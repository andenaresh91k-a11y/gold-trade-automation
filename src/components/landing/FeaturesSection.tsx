import { Clock, DollarSign, Monitor, Zap, Settings, Shield } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "24/5 Automated Trading",
    description: "Trade anytime from Monday to Friday—maximize your potential with round-the-clock automation.",
  },
  {
    icon: DollarSign,
    title: "Start With Only $100",
    description: "Begin with just $100 in a cent account (10,000 cents) and watch your trading journey unfold.",
  },
  {
    icon: Monitor,
    title: "Unlimited Demo Testing",
    description: "Practice, refine, and perfect your strategies—no limits on demo testing!",
  },
  {
    icon: Zap,
    title: "Live Trading Access",
    description: "Dive into the real market with one powerful account for live trading.",
  },
  {
    icon: Settings,
    title: "One-Time Setup",
    description: "Forget the hassle—our system sets you up for automated success from day one!",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description: "Built-in risk management features to help protect your capital while trading.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            What You'll Master
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to set up and run a fully automated gold trading system
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 hover:glow-gold"
            >
              <div className="w-14 h-14 rounded-lg gradient-gold flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;