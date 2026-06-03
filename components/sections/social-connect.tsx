"use client";

import { ScrollReveal } from "@/components/animations/scroll-reveal";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { getSocialLinks } from "@/lib/site-content-utils";
import { Button } from "@/components/retroui/Button";
import { Card } from "@/components/retroui/Card";
import { Text } from "@/components/retroui/Text";
import { SocialIcons } from "@/components/sections/social-icons";

export function SocialConnect() {
  const { content } = useSiteContent();
  const socialLinks = getSocialLinks(content);
  const primarySocial = socialLinks[0];
  const { connect } = content;

  return (
    <section
      id="connect"
      className="section-sky border-b-2 border-black scroll-mt-20"
      aria-labelledby="connect-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <ScrollReveal direction="scale">
          <Card className="w-full border-black bg-white brutal-shadow-lg transition-transform hover:scale-[1.01]">
            <Card.Header className="items-center text-center sm:p-8">
              <Text as="h2" id="connect-heading">
                {connect.title}
              </Text>
              <Card.Description className="mx-auto mt-3 max-w-lg text-base leading-relaxed">
                {connect.description}
              </Card.Description>
              <p className="mt-4 text-sm font-semibold">{connect.hireLine}</p>
            </Card.Header>

            <Card.Content className="flex flex-col items-center gap-8 pb-8 sm:pb-10">
              <SocialIcons
                links={socialLinks}
                className="flex-wrap justify-center gap-4"
              />

              {primarySocial && (
                <Button
                  size="lg"
                  render={
                    <a
                      href={primarySocial.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  Follow Dobby trên {primarySocial.key}
                </Button>
              )}

              <p className="text-sm text-muted-foreground">
                {connect.emailNote}{" "}
                <a
                  href={`mailto:${content.author.email}`}
                  className="font-medium text-foreground underline underline-offset-2"
                >
                  {content.author.email}
                </a>
              </p>
            </Card.Content>
          </Card>
        </ScrollReveal>
      </div>
    </section>
  );
}
