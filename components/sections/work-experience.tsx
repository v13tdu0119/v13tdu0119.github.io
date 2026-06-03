"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { ExternalLinkIcon } from "@/components/sections/social-icons";

export function WorkExperienceSection() {
  const { content } = useSiteContent();
  const { experienceIntro, workExperience } = content;

  return (
    <section
      id="experience"
      className="section-sky border-b-2 border-black scroll-mt-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <Text as="h2" id="experience-heading" className="mb-3">
            {experienceIntro.title}
          </Text>
          <p className="mb-10 max-w-2xl text-muted-foreground">
            {experienceIntro.description}
          </p>
        </ScrollReveal>

        <div className="relative space-y-8">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-4 top-0 hidden w-0.5 bg-black md:block"
          />

          {workExperience.map((item, index) => (
            <ScrollReveal key={item.id} delay={index * 80} direction="left">
              <article className="relative md:pl-12">
                <div
                  aria-hidden="true"
                  className="absolute left-2.5 top-6 hidden size-4 border-2 border-black bg-primary md:block"
                />

                <Card
                  className={`w-full border-black bg-white brutal-shadow transition-transform hover:-translate-y-1 ${
                    item.type === "leadership" ? "bg-secondary/40" : ""
                  }`}
                >
                  <Card.Header>
                    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <Card.Title>{item.company}</Card.Title>
                        <p className="mt-1 text-base font-semibold">{item.role}</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {item.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="outline"
                          className="w-fit border-2 border-black bg-muted"
                        >
                          {item.period}
                        </Badge>
                        {item.type === "leadership" && (
                          <Badge
                            variant="surface"
                            className="w-fit border-2 border-black"
                          >
                            Leadership
                          </Badge>
                        )}
                      </div>
                    </div>
                  </Card.Header>

                  <Card.Content className="space-y-6 pt-0">
                    {item.projects?.map((project) => (
                      <div
                        key={project.name}
                        className="border-2 border-black bg-background/60 p-4"
                      >
                        <div className="mb-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                          <h3 className="font-head text-base font-bold">
                            {project.name}
                          </h3>
                          {project.link && (
                            <Button
                              size="sm"
                              variant="outline"
                              className="bg-white"
                              render={
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                />
                              }
                            >
                              <ExternalLinkIcon />
                              Live app
                            </Button>
                          )}
                        </div>
                        <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-2">
                              <span aria-hidden="true" className="font-bold text-foreground">
                                →
                              </span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {item.highlights && (
                      <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                        {item.highlights.map((highlight) => (
                          <li key={highlight} className="flex gap-2">
                            <span aria-hidden="true" className="font-bold text-foreground">
                              →
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card.Content>
                </Card>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
