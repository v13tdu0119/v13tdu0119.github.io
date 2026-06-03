"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function About() {
  const { content } = useSiteContent();

  return (
    <section
      id="about"
      className="section-peach border-b-2 border-black scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <Text as="h2" id="about-heading" className="mb-3">
            Về Dobby (aka {content.author.name})
          </Text>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            Dobby trên GitHub — dev mobile tại {content.location}.
          </p>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={100}>
            <Card className="w-full border-black bg-white brutal-shadow transition-transform hover:-rotate-1 hover:scale-[1.02]">
              <Card.Header>
                <Card.Title>
                  Hey, mình là {content.nickname} 👋
                </Card.Title>
                <Card.Description className="space-y-4 text-base leading-relaxed">
                  <span className="block">{content.bio}</span>
                  <span className="block">{content.bioExtra}</span>
                </Card.Description>
              </Card.Header>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <Card className="w-full border-black bg-muted brutal-shadow transition-transform hover:rotate-1 hover:scale-[1.02]">
              <Card.Header>
                <Card.Title>Stack & vibe code</Card.Title>
                <Card.Description className="text-base leading-relaxed">
                  {content.stackIntro}
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
                  {content.techStack.map((tech, i) => (
                    <li
                      key={tech}
                      className="border-2 border-black bg-white px-3 py-2 text-center transition-transform hover:-translate-y-1 hover:shadow-sm"
                      style={{ transitionDelay: `${i * 40}ms` }}
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card.Content>
            </Card>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={300}>
          <Card className="mt-8 w-full border-black bg-white brutal-shadow">
            <Card.Header>
              <Card.Title>Fun facts về Dobby 🥡</Card.Title>
              <Card.Description className="text-base">
                Random nhưng authentic — đúng kiểu Gen Z portfolio.
              </Card.Description>
            </Card.Header>
            <Card.Content>
              <ul className="grid gap-3 sm:grid-cols-2">
                {content.funFacts.map((fact) => (
                  <li
                    key={fact}
                    className="border-2 border-black bg-secondary px-4 py-3 text-sm leading-relaxed"
                  >
                    {fact}
                  </li>
                ))}
              </ul>
            </Card.Content>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
