import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";

export function About() {
  return (
    <section
      id="about"
      className="section-peach border-b-2 border-black scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <Text as="h2" id="about-heading" className="mb-8">
            Về mình
          </Text>
        </ScrollReveal>

        <div className="grid gap-8 lg:grid-cols-2">
          <ScrollReveal direction="left" delay={100}>
            <Card className="w-full border-black bg-white brutal-shadow transition-transform hover:-rotate-1 hover:scale-[1.02]">
              <Card.Header>
                <Card.Title>Hey, mình là {siteConfig.author.name} 👋</Card.Title>
                <Card.Description className="text-base leading-relaxed">
                  {siteConfig.bio} Based in {siteConfig.location}.
                </Card.Description>
              </Card.Header>
            </Card>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <Card className="w-full border-black bg-muted brutal-shadow transition-transform hover:rotate-1 hover:scale-[1.02]">
              <Card.Header>
                <Card.Title>Stack yêu thích</Card.Title>
                <Card.Description className="text-base leading-relaxed">
                  Android/Kotlin, Jetpack Compose, React Native cho mobile — Spring
                  Boot cho backend. Luôn học, luôn ship, luôn 1% better.
                </Card.Description>
              </Card.Header>
              <Card.Content>
                <ul className="grid grid-cols-2 gap-2 text-sm font-medium">
                  {siteConfig.techStack.map((tech, i) => (
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
      </div>
    </section>
  );
}
