import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Ye code kis market me trade karta hai?",
    answer: "Ye code specially XAUUSD (Gold vs USD) pair me trade karta hai, aur Cent Account ke liye optimized hai.",
  },
  {
    question: "Minimum investment kitni chahiye?",
    answer: "Aap sirf 10,000 cent (≈ $100) se start kar sakte ho.",
  },
  {
    question: "Kya code 24/7 chalta hai?",
    answer: "Ye code Monday to Friday (24/5) auto trade karta hai. Weekend (Saturday-Sunday) me forex market band hota hai.",
  },
  {
    question: "Kya mujhe hamesha laptop/PC on rakhna padega?",
    answer: "Nahi, aap robot ko VPS (Virtual Private Server) par chala sakte ho. Fir wo 24 hours chalti rahegi bina laptop on rakhe.",
  },
  {
    question: "Profit guarantee karta ha kya code?",
    answer: "Forex market risky hota hai, isliye koi 100% guarantee nahi. Lekin code risk management ke saath consistent results dene ke liye bana hai.",
  },
  {
    question: "Setup karna mushkil hai kya?",
    answer: "Bilkul nahi. Sirf ek baar setup karna hota hai, fir robot fully automated chalti hai. Jiske liye hum aapko video bana kar dete hai ki kaise setup karna hai.",
  },
  {
    question: "Kya main manual trading bhi kar sakta hoon iske sath?",
    answer: "Haan, lekin recommend yahi hai ki robot ko apna kaam karne do. Manual trade karoge toh results effect ho sakte hain.",
  },
  {
    question: "Kya ye code har broker ke sath chalega?",
    answer: "Ye code Cent Account supported brokers par hi best work karta hai.",
  },
  {
    question: "Agar internet disconnect ho gaya toh?",
    answer: "Isliye VPS recommended hai. VPS par robot bina rukhe chalta hai chahe aapka internet off ho.",
  },
  {
    question: "Code ka update aata hai kya?",
    answer: "Haan, time-to-time updates diye jaate hain taaki performance aur better ho.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gold-gradient mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We've got answers.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left font-display font-medium text-foreground hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;