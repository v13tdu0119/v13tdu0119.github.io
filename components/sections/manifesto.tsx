"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function Manifesto() {
  const { content } = useSiteContent();

  return (
    <section
      id="manifesto"
      className="border-b-2 border-black scroll-mt-20"
      aria-labelledby="manifesto-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <Text as="h2" id="manifesto-heading" className="mb-3">
            Dobby&apos;s manifesto
          </Text>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            4 quy tắc mình code theo — không phải corporate values slide, là
            thật.
          </p>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {content.manifesto.map((item, index) => (
            <ScrollReveal
              key={item.title}
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <Card className="h-full w-full border-black bg-card brutal-shadow transition-transform hover:-translate-y-1">
                <Card.Header>
                  <Card.Title>
                    {index + 1}. {item.title}
                  </Card.Title>
                  <Card.Description className="text-base leading-relaxed">
                    {item.body}
                  </Card.Description>
                </Card.Header>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
