import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClassName =
  "w-full rounded-md border border-white/20 bg-[#282828] px-3 py-2 text-sm text-white outline-none focus:ring-2 focus:ring-spotify-green";

export function AdminField({
  label,
  hint,
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  hint?: string;
}) {
  return (
    <label className={cn("block space-y-1.5", className)}>
      <span className="text-sm font-bold">{label}</span>
      {hint && <span className="block text-xs text-muted-foreground">{hint}</span>}
      <input className={fieldClassName} {...props} />
    </label>
  );
}

export function AdminTextarea({
  label,
  hint,
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  hint?: string;
}) {
  return (
    <label className={cn("block space-y-1.5", className)}>
      <span className="text-sm font-bold">{label}</span>
      {hint && <span className="block text-xs text-muted-foreground">{hint}</span>}
      <textarea className={cn(fieldClassName, "min-h-24 resize-y")} {...props} />
    </label>
  );
}

export function AdminSection({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-lg border border-white/10 bg-[#181818] shadow-lg">
      <div className="border-b border-white/10 bg-[#282828] px-4 py-3">
        <h2 className="font-head text-lg font-bold">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="grid gap-4 p-4">{children}</div>
    </section>
  );
}
