import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import Script from "next/script"

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQItem[]
  className?: string
}

export function FAQSection({ title, description, faqs, className = "" }: FAQSectionProps) {
  // Preparar datos estructurados para FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">{title}</h2>
          {description && <p className="text-zinc-400 text-center mb-12">{description}</p>}

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-zinc-800">
                <AccordionTrigger className="text-left font-medium py-4 hover:text-blue-400 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-400 pb-4">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>

      {/* Schema.org para FAQ */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  )
}
