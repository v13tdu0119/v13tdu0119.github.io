"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { defaultSiteContent } from "@/config/site";
import {
  AdminField,
  AdminSection,
  AdminTextarea,
} from "@/components/admin/admin-fields";
import { useAuth } from "@/components/providers/auth-provider";
import { useSiteContent } from "@/components/providers/site-content-provider";
import { saveSiteContent } from "@/lib/firebase/content-service";
import { cloneSiteContent, slugify } from "@/lib/site-content-utils";
import { Button } from "@/components/retroui/Button";
import type { Project, SiteContent, WorkExperience } from "@/types/site-content";

const tabs = [
  { id: "general", label: "General" },
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "connect", label: "Connect" },
  { id: "social", label: "Social" },
] as const;

type TabId = (typeof tabs)[number]["id"];

function linesToList(value: string) {
  return value
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function listToLines(values: string[]) {
  return values.join("\n");
}

export function AdminDashboard() {
  const { user, isAdmin, signOutUser } = useAuth();
  const { content, source } = useSiteContent();
  const [draft, setDraft] = useState<SiteContent>(() => cloneSiteContent(content));
  const [activeTab, setActiveTab] = useState<TabId>("general");
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setDraft(cloneSiteContent(content));
  }, [content]);

  function updateDraft(updater: (current: SiteContent) => SiteContent) {
    setDraft((current) => updater(cloneSiteContent(current)));
  }

  async function handleSave() {
    if (!user) return;

    setSaving(true);
    setMessage(null);
    setError(null);

    try {
      await saveSiteContent(draft, user.uid);
      setMessage("Saved! Changes should appear on the site within a few seconds.");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save content.");
    } finally {
      setSaving(false);
    }
  }

  function resetDraft() {
    setDraft(cloneSiteContent(defaultSiteContent));
    setMessage("Draft reset to defaults from config/site.ts (not saved yet).");
  }

  if (!user || !isAdmin) {
    return null;
  }

  return (
    <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 sm:px-6">
      <header className="flex flex-col gap-4 border-2 border-black bg-white brutal-shadow-lg p-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-head text-2xl font-bold">Dobby CMS</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Signed in as {user.email} · Source: {source}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" className="bg-white" render={<Link href="/" />}>
            View site
          </Button>
          <Button variant="secondary" onClick={resetDraft}>
            Reset draft
          </Button>
          <Button onClick={handleSave} disabled={saving}>
            {saving ? "Saving..." : "Save changes"}
          </Button>
          <Button variant="outline" className="bg-white" onClick={() => signOutUser()}>
            Sign out
          </Button>
        </div>
      </header>

      {(message || error) && (
        <div
          className={`border-2 border-black px-4 py-3 text-sm ${
            error ? "bg-destructive/10 text-destructive" : "bg-secondary"
          }`}
        >
          {error ?? message}
        </div>
      )}

      <div className="flex flex-wrap gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`border-2 border-black px-3 py-1.5 text-sm font-bold transition-transform hover:-translate-y-0.5 ${
              activeTab === tab.id ? "bg-primary brutal-shadow-sm" : "bg-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "general" && (
        <AdminSection title="General" description="Profile info & SEO copy">
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField
              label="Name"
              value={draft.name}
              onChange={(e) =>
                updateDraft((c) => ({ ...c, name: e.target.value }))
              }
            />
            <AdminField
              label="Nickname"
              value={draft.nickname}
              onChange={(e) =>
                updateDraft((c) => ({ ...c, nickname: e.target.value }))
              }
            />
            <AdminField
              label="Public handle"
              hint="Tên hiển thị công khai (vd: Dobby)"
              value={draft.username}
              onChange={(e) =>
                updateDraft((c) => ({ ...c, username: e.target.value }))
              }
            />
            <AdminField
              label="Location"
              value={draft.location}
              onChange={(e) =>
                updateDraft((c) => ({ ...c, location: e.target.value }))
              }
            />
            <AdminField
              label="Author email"
              value={draft.author.email}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  author: { ...c.author, email: e.target.value },
                }))
              }
            />
            <AdminField
              label="Job title"
              value={draft.author.jobTitle}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  author: { ...c.author, jobTitle: e.target.value },
                }))
              }
            />
          </div>
          <AdminField
            label="Tagline"
            value={draft.tagline}
            onChange={(e) =>
              updateDraft((c) => ({ ...c, tagline: e.target.value }))
            }
          />
          <AdminTextarea
            label="SEO description"
            value={draft.description}
            onChange={(e) =>
              updateDraft((c) => ({ ...c, description: e.target.value }))
            }
          />
          <AdminTextarea
            label="Hero tags (one per line)"
            value={listToLines(draft.heroTags)}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                heroTags: linesToList(e.target.value),
              }))
            }
          />
          <AdminTextarea
            label="Tech stack (one per line)"
            value={listToLines(draft.techStack)}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                techStack: linesToList(e.target.value),
              }))
            }
          />
        </AdminSection>
      )}

      {activeTab === "hero" && (
        <AdminSection title="Hero">
          <AdminField
            label="Badge"
            value={draft.hero.badge}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                hero: { ...c.hero, badge: e.target.value },
              }))
            }
          />
          <AdminField
            label="Headline"
            value={draft.hero.headline}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                hero: { ...c.hero, headline: e.target.value },
              }))
            }
          />
          <AdminField
            label="Headline highlight"
            value={draft.hero.headlineHighlight}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                hero: { ...c.hero, headlineHighlight: e.target.value },
              }))
            }
          />
          <AdminTextarea
            label="Subheadline"
            value={draft.hero.subheadline}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                hero: { ...c.hero, subheadline: e.target.value },
              }))
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField
              label="Primary CTA"
              value={draft.hero.ctaPrimary}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  hero: { ...c.hero, ctaPrimary: e.target.value },
                }))
              }
            />
            <AdminField
              label="Secondary CTA"
              value={draft.hero.ctaSecondary}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  hero: { ...c.hero, ctaSecondary: e.target.value },
                }))
              }
            />
          </div>
        </AdminSection>
      )}

      {activeTab === "about" && (
        <AdminSection title="About">
          <AdminTextarea
            label="Bio"
            value={draft.bio}
            onChange={(e) =>
              updateDraft((c) => ({ ...c, bio: e.target.value }))
            }
          />
          <AdminTextarea
            label="Bio extra"
            value={draft.bioExtra}
            onChange={(e) =>
              updateDraft((c) => ({ ...c, bioExtra: e.target.value }))
            }
          />
          <AdminTextarea
            label="Stack intro"
            value={draft.stackIntro}
            onChange={(e) =>
              updateDraft((c) => ({ ...c, stackIntro: e.target.value }))
            }
          />
          <AdminTextarea
            label="Fun facts (one per line)"
            value={listToLines(draft.funFacts)}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                funFacts: linesToList(e.target.value),
              }))
            }
          />
        </AdminSection>
      )}

      {activeTab === "experience" && (
        <AdminSection title="Work experience">
          <AdminField
            label="Section title"
            value={draft.experienceIntro.title}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                experienceIntro: {
                  ...c.experienceIntro,
                  title: e.target.value,
                },
              }))
            }
          />
          <AdminTextarea
            label="Section description"
            value={draft.experienceIntro.description}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                experienceIntro: {
                  ...c.experienceIntro,
                  description: e.target.value,
                },
              }))
            }
          />

          {draft.workExperience.map((item, index) => (
            <ExperienceEditor
              key={item.id}
              item={item}
              onChange={(next) =>
                updateDraft((c) => {
                  const workExperience = [...c.workExperience];
                  workExperience[index] = next;
                  return { ...c, workExperience };
                })
              }
              onRemove={() =>
                updateDraft((c) => ({
                  ...c,
                  workExperience: c.workExperience.filter((_, i) => i !== index),
                }))
              }
            />
          ))}

          <Button
            variant="outline"
            className="bg-white"
            onClick={() =>
              updateDraft((c) => ({
                ...c,
                workExperience: [
                  ...c.workExperience,
                  {
                    id: `exp-${c.workExperience.length + 1}`,
                    company: "New company",
                    role: "Role",
                    location: "City",
                    period: "MM/YYYY — MM/YYYY",
                    highlights: [""],
                  },
                ],
              }))
            }
          >
            Add experience
          </Button>
        </AdminSection>
      )}

      {activeTab === "projects" && (
        <AdminSection title="Projects">
          <AdminField
            label="Section title"
            value={draft.projectsIntro.title}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                projectsIntro: { ...c.projectsIntro, title: e.target.value },
              }))
            }
          />
          <AdminTextarea
            label="Section description"
            value={draft.projectsIntro.description}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                projectsIntro: {
                  ...c.projectsIntro,
                  description: e.target.value,
                },
              }))
            }
          />
          <AdminField
            label="Footnote"
            value={draft.projectsIntro.footnote}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                projectsIntro: { ...c.projectsIntro, footnote: e.target.value },
              }))
            }
          />

          {draft.projects.map((project, index) => (
            <ProjectEditor
              key={`${project.slug}-${index}`}
              project={project}
              onChange={(next) =>
                updateDraft((c) => {
                  const projects = [...c.projects];
                  projects[index] = next;
                  return { ...c, projects };
                })
              }
              onRemove={() =>
                updateDraft((c) => ({
                  ...c,
                  projects: c.projects.filter((_, i) => i !== index),
                }))
              }
            />
          ))}

          <Button
            variant="outline"
            className="bg-white"
            onClick={() =>
              updateDraft((c) => ({
                ...c,
                projects: [
                  ...c.projects,
                  {
                    slug: `project-${c.projects.length + 1}`,
                    title: "New project",
                    description: "",
                    tags: [],
                    featured: false,
                  },
                ],
              }))
            }
          >
            Add project
          </Button>
        </AdminSection>
      )}

      {activeTab === "connect" && (
        <AdminSection title="Connect & sticky bubble">
          <AdminField
            label="Connect title"
            value={draft.connect.title}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                connect: { ...c.connect, title: e.target.value },
              }))
            }
          />
          <AdminTextarea
            label="Connect description"
            value={draft.connect.description}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                connect: { ...c.connect, description: e.target.value },
              }))
            }
          />
          <AdminField
            label="Hire line"
            value={draft.connect.hireLine}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                connect: { ...c.connect, hireLine: e.target.value },
              }))
            }
          />
          <AdminField
            label="Email note"
            value={draft.connect.emailNote}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                connect: { ...c.connect, emailNote: e.target.value },
              }))
            }
          />
          <AdminField
            label="Sticky greeting"
            value={draft.stickyBubble.greeting}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                stickyBubble: { ...c.stickyBubble, greeting: e.target.value },
              }))
            }
          />
          <AdminTextarea
            label="Sticky message"
            value={draft.stickyBubble.message}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                stickyBubble: { ...c.stickyBubble, message: e.target.value },
              }))
            }
          />
          <div className="grid gap-4 md:grid-cols-2">
            <AdminField
              label="Sticky email CTA"
              value={draft.stickyBubble.ctaEmail}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  stickyBubble: { ...c.stickyBubble, ctaEmail: e.target.value },
                }))
              }
            />
            <AdminField
              label="Sticky Facebook CTA"
              value={draft.stickyBubble.ctaFacebook}
              onChange={(e) =>
                updateDraft((c) => ({
                  ...c,
                  stickyBubble: {
                    ...c.stickyBubble,
                    ctaFacebook: e.target.value,
                  },
                }))
              }
            />
          </div>
        </AdminSection>
      )}

      {activeTab === "social" && (
        <AdminSection title="Social links">
          <AdminField
            label="GitHub"
            value={draft.social.github ?? ""}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                social: { ...c.social, github: e.target.value },
              }))
            }
          />
          <AdminField
            label="Facebook"
            value={draft.social.facebook ?? ""}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                social: { ...c.social, facebook: e.target.value },
              }))
            }
          />
          <AdminField
            label="Instagram"
            value={draft.social.instagram ?? ""}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                social: { ...c.social, instagram: e.target.value },
              }))
            }
          />
          <AdminField
            label="LinkedIn"
            value={draft.social.linkedin ?? ""}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                social: { ...c.social, linkedin: e.target.value },
              }))
            }
          />
          <AdminField
            label="X / Twitter"
            value={draft.social.twitter ?? ""}
            onChange={(e) =>
              updateDraft((c) => ({
                ...c,
                social: { ...c.social, twitter: e.target.value },
              }))
            }
          />
        </AdminSection>
      )}
    </div>
  );
}

function ExperienceEditor({
  item,
  onChange,
  onRemove,
}: {
  item: WorkExperience;
  onChange: (item: WorkExperience) => void;
  onRemove: () => void;
}) {
  return (
    <div className="grid gap-3 border-2 border-black bg-white p-4 brutal-shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-head font-bold">{item.company || "Untitled"}</h3>
        <Button size="sm" variant="outline" className="bg-white" onClick={onRemove}>
          Remove
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <AdminField
          label="Company"
          value={item.company}
          onChange={(e) => onChange({ ...item, company: e.target.value })}
        />
        <AdminField
          label="Role"
          value={item.role}
          onChange={(e) => onChange({ ...item, role: e.target.value })}
        />
        <AdminField
          label="Location"
          value={item.location}
          onChange={(e) => onChange({ ...item, location: e.target.value })}
        />
        <AdminField
          label="Period"
          value={item.period}
          onChange={(e) => onChange({ ...item, period: e.target.value })}
        />
      </div>
      <AdminTextarea
        label="Highlights (one per line)"
        hint="Dùng cho role không có sub-projects"
        value={listToLines(item.highlights ?? [])}
        onChange={(e) =>
          onChange({
            ...item,
            highlights: linesToList(e.target.value),
          })
        }
      />
      <AdminTextarea
        label="Projects JSON"
        hint='Optional: [{"name":"Project","highlights":["..."],"link":"https://..."}]'
        value={JSON.stringify(item.projects ?? [], null, 2)}
        onChange={(e) => {
          try {
            const projects = JSON.parse(e.target.value);
            onChange({ ...item, projects });
          } catch {
            // ignore invalid JSON while typing
          }
        }}
      />
    </div>
  );
}

function ProjectEditor({
  project,
  onChange,
  onRemove,
}: {
  project: Project;
  onChange: (project: Project) => void;
  onRemove: () => void;
}) {
  return (
    <div className="grid gap-3 border-2 border-black bg-white p-4 brutal-shadow-sm">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-head font-bold">{project.title || "Untitled project"}</h3>
        <Button size="sm" variant="outline" className="bg-white" onClick={onRemove}>
          Remove
        </Button>
      </div>
      <AdminField
        label="Title"
        value={project.title}
        onChange={(e) => {
          const title = e.target.value;
          onChange({
            ...project,
            title,
            slug: project.slug.startsWith("project-") ? slugify(title) || project.slug : project.slug,
          });
        }}
      />
      <AdminField
        label="Slug"
        value={project.slug}
        onChange={(e) => onChange({ ...project, slug: e.target.value })}
      />
      <AdminTextarea
        label="Description"
        value={project.description}
        onChange={(e) => onChange({ ...project, description: e.target.value })}
      />
      <AdminTextarea
        label="Tags (one per line)"
        value={listToLines(project.tags)}
        onChange={(e) => onChange({ ...project, tags: linesToList(e.target.value) })}
      />
      <AdminField
        label="GitHub URL"
        value={project.github ?? ""}
        onChange={(e) => onChange({ ...project, github: e.target.value })}
      />
      <AdminField
        label="Live demo URL"
        value={project.href ?? ""}
        onChange={(e) => onChange({ ...project, href: e.target.value })}
      />
      <label className="flex items-center gap-2 text-sm font-bold">
        <input
          type="checkbox"
          checked={Boolean(project.featured)}
          onChange={(e) => onChange({ ...project, featured: e.target.checked })}
          className="size-4 border-2 border-black"
        />
        Featured project
      </label>
    </div>
  );
}
