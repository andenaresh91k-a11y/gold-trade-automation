import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ravi",
    location: "Delhi",
    rating: 5,
    text: "Maine sirf 10,000 cent se start kiya aur XAUUSD trading me robot ne kamaal kar diya. VPS par chalaya toh bina rukhe 24/5 trade hua. Bilkul tension-free profit!",
  },
  {
    name: "Pooja",
    location: "Surat",
    rating: 5,
    text: "Mere paas charts dekhne ka time nahi tha. Ye forex robot set karke VPS par chala diya, ab wo khud hi trade karta hai. Just monitoring karna padta hai.",
  },
  {
    name: "Ankit",
    location: "Mumbai",
    rating: 5,
    text: "Pehle manual trading me hamesha loss hota tha. Ab robot ke saath stable profit dekh raha hoon. Small account me bhi mast result deta hai.",
  },
  {
    name: "Sandeep",
    location: "Lucknow",
    rating: 4,
    text: "XAUUSD ki fast moves pakadna easy nahi hota. Lekin robot ne trading simple aur smart bana di. Risk bhi properly manage karta hai.",
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