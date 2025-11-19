import { Badge } from "@/components/ui/badge";

const faqs = [
  {
    question: "What is Sushi Software?",
    answer: "Sushi Software crafts elegant solutions using design and system thinking.",
  },
  {
    question: "How does Sushi approach software?",
    answer: "We believe great software should be as simple and refined as sushi.",
  },
  {
    question: "What makes Sushi different?",
    answer: "We combine deep technical expertise with award-winning design.",
  },
  {
    question: "What services does Sushi offer?",
    answer: "From strategy to execution, we build software that scales.",
  },
  {
    question: "Who works with Sushi?",
    answer: "Teams seeking thoughtful, elegant software solutions partner with us.",
  },
  {
    question: "How do I start with Sushi?",
    answer: "Reach out and let's craft something beautiful together.",
  },
];

const FaqSection = () => {
  return (
    <section className="py-32 w-full bg-[url('https://salient.tailwindui.com/_next/static/media/background-faqs.55d2e36a.jpg')] bg-cover bg-no-repeat">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center">
          <Badge className="text-xs font-medium">FAQ</Badge>
          <h1 className="mt-4 text-4xl font-semibold">
            Frequently Asked About Sushi
          </h1>
          <p className="mt-6 font-medium text-muted-foreground">
            Simple software. Elegant design. Built with care and precision.
          </p>
        </div>
        <div className="mx-auto mt-14 grid gap-8 md:grid-cols-2 md:gap-12">
          {faqs.map((faq, index) => (
            <div key={index} className="flex gap-4">
              <span className="flex size-6 shrink-0 items-center justify-center rounded-sm bg-secondary font-mono text-xs text-primary">
                {index + 1}
              </span>
              <div>
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-medium">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FaqSection };