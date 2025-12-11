import { Button } from "@/components/ui/button";
import { QrCode, Download, CheckCircle2 } from "lucide-react";

const PaymentSection = () => {
  return (
    <section id="payment" className="py-24 bg-gradient-to-b from-secondary/30 to-background">
      <div className="container px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            Get Royal Gold Algo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Instant access after payment confirmation
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* QR Code Section */}
            <div className="bg-card rounded-2xl border border-primary/30 p-8 glow-gold">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30 mb-6">
                  <QrCode className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-primary">Scan to Pay</span>
                </div>

                {/* QR Code Placeholder */}
                <div className="w-64 h-64 mx-auto mb-6 rounded-xl bg-foreground flex items-center justify-center">
                  <div className="text-center p-4">
                    <QrCode className="w-32 h-32 text-background mx-auto mb-2" />
                    <p className="text-xs text-background/70">QR Code Here</p>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">
                  Scan the QR code to complete your payment.<br />
                  After payment, your download link appears automatically.
                </p>
              </div>
            </div>

            {/* Payment Details */}
            <div className="bg-card rounded-2xl border border-border/50 p-8">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Payment Details
              </h3>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-display font-bold text-primary">₹3,499</span>
                  <span className="text-xl text-muted-foreground line-through">₹10,000</span>
                </div>
                <span className="inline-block px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium">
                  65% OFF - Limited Time
                </span>
              </div>

              {/* What's included */}
              <div className="space-y-3 mb-8">
                <p className="font-medium text-foreground mb-3">What's included:</p>
                {[
                  "EA Code Files (MT4/MT5)",
                  "PDF Setup Guide",
                  "Optimization Presets",
                  "Video Tutorial",
                  "Lifetime Access to Updates",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>

              {/* Download Button */}
              <Button
                size="lg"
                className="w-full gradient-gold text-primary-foreground font-display font-bold text-lg py-6 glow-gold hover:glow-gold-intense transition-all"
              >
                <Download className="w-5 h-5 mr-2" />
                Download After Payment
              </Button>

              <p className="text-xs text-muted-foreground text-center mt-4">
                One-time payment • Instant delivery • Lifetime access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentSection;