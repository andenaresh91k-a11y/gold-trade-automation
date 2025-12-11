import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi",
    location: "Delhi",
    rating: 5,
    text: "I started with just 10,000 cents and the robot did amazing work in XAUUSD trading. Ran it on VPS and it traded 24/5 non-stop. Completely stress-free profits!",
  },
  {
    name: "Pooja",
    location: "Surat",
    rating: 5,
    text: "I didn't have time to watch charts. I set up the forex robot on VPS and now it trades automatically. I just need to monitor occasionally.",
  },
  {
    name: "Ankit",
    location: "Mumbai",
    rating: 5,
    text: "I always had losses in manual trading before. Now with the robot, I'm seeing stable profits. It gives great results even with a small account.",
  },
  {
    name: "Sandeep",
    location: "Lucknow",
    rating: 4,
    text: "Catching XAUUSD's fast moves isn't easy. But the robot made trading simple and smart. It also manages risk properly.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            What Traders Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real feedback from our community of traders
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-5 h-5 ${
                      i < testimonial.rating
                        ? "text-primary fill-primary"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <p className="text-foreground mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-gold flex items-center justify-center">
                  <span className="text-primary-foreground font-bold">
                    {testimonial.name[0]}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;