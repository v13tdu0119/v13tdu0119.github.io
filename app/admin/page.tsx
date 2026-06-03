"use client";

import Link from "next/link";
import { AdminDashboard } from "@/components/admin/admin-dashboard";
import { AdminLogin } from "@/components/admin/admin-login";
import { AuthProvider, useAuth } from "@/components/providers/auth-provider";
import { Button } from "@/components/retroui/Button";

function AdminPageContent() {
  const { user, loading, isAdmin, signOutUser } = useAuth();

  if (loading) {
    return (
      <div className="mx-auto max-w-md border-2 border-black bg-white brutal-shadow-lg p-6 text-center">
        <p className="font-head font-bold">Loading admin...</p>
      </div>
    );
  }

  if (!user) {
    return <AdminLogin />;
  }

  if (!isAdmin) {
    return (
      <div className="mx-auto max-w-lg border-2 border-black bg-white brutal-shadow-lg p-6 text-center">
        <h1 className="font-head text-xl font-bold">Access denied</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Account <strong>{user.email}</strong> is not allowed. Set{" "}
          <code>NEXT_PUBLIC_ADMIN_UID</code> to your Firebase UID and update{" "}
          <code>firestore.rules</code>.
        </p>
        <div className="mt-4 flex justify-center gap-2">
          <Button variant="outline" className="bg-white" render={<Link href="/" />}>
            Back to site
          </Button>
          <Button onClick={() => signOutUser()}>Sign out</Button>
        </div>
      </div>
    );
  }

  return <AdminDashboard />;
}

export default function AdminPage() {
  return (
    <AuthProvider>
      <AdminPageContent />
    </AuthProvider>
  );
}
