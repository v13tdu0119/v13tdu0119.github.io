import { getSocialLinks, siteConfig } from "@/config/site";

export function JsonLd() {
  const socialUrls = getSocialLinks(siteConfig).map((s) => s.href);

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.author.name,
    url: siteConfig.url,
    jobTitle: siteConfig.author.jobTitle,
    email: siteConfig.author.email,
    sameAs: socialUrls,
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: siteConfig.locale.replace("_", "-"),
    author: {
      "@type": "Person",
      name: siteConfig.author.name,
    },
  };

  const projectsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Projects by " + siteConfig.author.name,
    itemListElement: siteConfig.projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "CreativeWork",
        name: project.title,
        description: project.description,
        url: project.href ?? project.github ?? `${siteConfig.url}/#${project.slug}`,
      },
    })),
  };

  const schemas = [personSchema, websiteSchema, projectsSchema];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
