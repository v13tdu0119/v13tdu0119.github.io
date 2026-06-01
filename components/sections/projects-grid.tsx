import { siteConfig } from "@/config/site";
import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { Badge } from "@/components/retroui/Badge";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { ExternalLinkIcon, GitHubIcon } from "@/components/sections/social-icons";

export function ProjectsGrid() {
  return (
    <section
      id="projects"
      className="border-b-2 border-black scroll-mt-20"
      aria-labelledby="projects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal>
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Text as="h2" id="projects-heading">
                {siteConfig.projectsIntro.title}
              </Text>
              <p className="mt-2 max-w-xl leading-relaxed text-muted-foreground">
                {siteConfig.projectsIntro.description}
              </p>
              <p className="mt-3 max-w-xl text-sm font-medium">
                {siteConfig.projectsIntro.footnote}
              </p>
            </div>
            <Badge
              variant="outline"
              className="w-fit -rotate-2 border-2 border-black bg-accent animate-cartoon-bounce"
            >
              {siteConfig.projects.length} projects
            </Badge>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2">
          {siteConfig.projects.map((project, index) => (
            <ScrollReveal
              key={project.slug}
              delay={index * 80}
              direction={index % 2 === 0 ? "left" : "right"}
            >
              <article id={project.slug} className="scroll-mt-28">
                <Card
                  className={`flex h-full w-full flex-col border-black bg-card transition-all duration-300 hover:-translate-y-2 hover:rotate-1 ${
                    project.featured ? "brutal-shadow-lg" : "brutal-shadow"
                  }`}
                >
                  <Card.Header>
                    <div className="mb-2 flex items-start justify-between gap-2">
                      <Card.Title>{project.title}</Card.Title>
                      {project.featured && (
                        <Badge
                          variant="surface"
                          size="sm"
                          className="shrink-0 border-2 border-black"
                        >
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Card.Description className="text-base leading-relaxed">
                      {project.description}
                    </Card.Description>
                  </Card.Header>

                  <Card.Content className="mt-auto flex flex-col gap-4 pt-0">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="default"
                          size="sm"
                          className="border border-black/20"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.href && (
                        <Button
                          size="sm"
                          render={
                            <a
                              href={project.href}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          }
                        >
                          <ExternalLinkIcon />
                          Live demo
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white"
                          render={
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                            />
                          }
                        >
                          <GitHubIcon />
                          GitHub
                        </Button>
                      )}
                    </div>
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
