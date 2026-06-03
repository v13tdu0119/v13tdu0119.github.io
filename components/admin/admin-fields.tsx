import { cn } from "@/lib/utils";
import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const fieldClassName =
  "w-full border-2 border-black bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-primary";

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
    <section className="border-2 border-black bg-white brutal-shadow">
      <div className="border-b-2 border-black bg-secondary px-4 py-3">
        <h2 className="font-head text-lg font-bold">{title}</h2>
        {description && (
          <p className="mt-1 text-sm text-muted-foreground">{description}</p>
        )}
      </div>
      <div className="grid gap-4 p-4">{children}</div>
    </section>
  );
}
