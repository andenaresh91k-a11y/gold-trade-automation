import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Which market does this code trade in?",
    answer: "This code is specially designed to trade the XAUUSD (Gold vs USD) pair and is optimized for Cent Accounts.",
  },
  {
    question: "What is the minimum investment required?",
    answer: "You can start with just 10,000 cents (approximately $100).",
  },
  {
    question: "Does the code run 24/7?",
    answer: "This code auto-trades from Monday to Friday (24/5). The forex market is closed on weekends (Saturday-Sunday).",
  },
  {
    question: "Do I need to keep my laptop/PC on all the time?",
    answer: "No, you can run the robot on a VPS (Virtual Private Server). It will run 24 hours without needing to keep your laptop on.",
  },
  {
    question: "Does the code guarantee profits?",
    answer: "The forex market is risky, so there's no 100% guarantee. However, the code is built to deliver consistent results with proper risk management.",
  },
  {
    question: "Is the setup difficult?",
    answer: "Not at all. You only need to set it up once, and then the robot runs fully automated. We provide a video tutorial showing exactly how to set it up.",
  },
  {
    question: "Can I do manual trading alongside this?",
    answer: "Yes, but we recommend letting the robot do its work. Manual trading may affect the results.",
  },
  {
    question: "Will this code work with any broker?",
    answer: "This code works best with brokers that support Cent Accounts.",
  },
  {
    question: "What if my internet disconnects?",
    answer: "This is why VPS is recommended. The robot continues running on VPS even if your internet goes off.",
  },
  {
    question: "Does the code receive updates?",
    answer: "Yes, updates are provided from time to time to improve performance.",
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