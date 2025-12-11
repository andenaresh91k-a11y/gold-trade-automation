import { Laptop, Wifi, BookOpen, Monitor } from "lucide-react";

const requirements = [
  {
    icon: Laptop,
    title: "Laptop/Computer",
    description: "Required for setup and monitoring",
  },
  {
    icon: Monitor,
    title: "MT4 or MT5 Platform",
    description: "MetaTrader trading platform",
  },
  {
    icon: Wifi,
    title: "Internet Connection",
    description: "Stable connection for trading",
  },
  {
    icon: BookOpen,
    title: "Basic Forex Knowledge",
    description: "Understanding of forex basics",
  },
];

const RequirementsSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            Requirements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What you need to get started with Royal Gold Algo
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {requirements.map((req, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mb-4">
                <req.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">
                {req.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {req.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary/10 border border-primary/30">
            <Laptop className="w-5 h-5 text-primary" />
            <span className="text-foreground font-medium">
              VPS (Virtual Private Server) recommended for 24/7 operation
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequirementsSection;