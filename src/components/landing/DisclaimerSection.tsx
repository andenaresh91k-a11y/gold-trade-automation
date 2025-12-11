import { AlertTriangle } from "lucide-react";

const DisclaimerSection = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <div className="p-8 rounded-xl bg-card border border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold text-foreground mb-3">
                  Important Disclaimer
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Royal Gold Algo is an automated trading code designed to assist users in executing 
                  their trading strategies more efficiently. Please note that this code does not 
                  guarantee profits or eliminate the risks associated with trading financial markets. 
                  Trading involves market risk, including the potential loss of capital. Users are 
                  solely responsible for their trading decisions, and Royal Gold Algo, its developers, 
                  and affiliates shall not be held liable for any financial losses. We strongly 
                  recommend users to practice responsible trading and, if needed, seek advice from
                  a certified financial advisor before using our product.
                </p>
                <p className="text-primary mt-4 font-medium">
                  "Trading involves risk. This code does not guarantee any profit or returns. Results may vary."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DisclaimerSection;