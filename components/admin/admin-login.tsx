"use client";

import { useState } from "react";
import { Button } from "@/components/retroui/Button";
import { useAuth } from "@/components/providers/auth-provider";
import { AdminField } from "@/components/admin/admin-fields";

export function AdminLogin() {
  const { signIn, configured } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setSubmitting(true);
    setError(null);

    try {
      await signIn(email, password);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Login failed. Check your credentials.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (!configured) {
    return (
      <div className="mx-auto max-w-lg border-2 border-black bg-white brutal-shadow-lg p-6">
        <h1 className="font-head text-2xl font-bold">Firebase chưa được cấu hình</h1>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          Thêm biến môi trường Firebase vào <code>.env.local</code>, rebuild, rồi
          quay lại trang này. Xem hướng dẫn trong README.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-md border-2 border-black bg-white brutal-shadow-lg">
      <div className="border-b-2 border-black bg-primary px-6 py-4">
        <h1 className="font-head text-2xl font-bold">Dobby Admin</h1>
        <p className="mt-1 text-sm">Đăng nhập để chỉnh sections trên portfolio.</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4 p-6">
        <AdminField
          label="Email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <AdminField
          label="Password"
          type="password"
          autoComplete="current-password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        {error && (
          <p className="border-2 border-black bg-destructive/10 px-3 py-2 text-sm text-destructive">
            {error}
          </p>
        )}

        <Button type="submit" size="lg" className="w-full" disabled={submitting}>
          {submitting ? "Đang đăng nhập..." : "Đăng nhập"}
        </Button>
      </form>
    </div>
  );
}
