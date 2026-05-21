"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { resolveContradiction } from "@/app/(dashboard)/actions";

interface ResolveFormProps {
  contradictionId: string;
}

export function ResolveForm({ contradictionId }: ResolveFormProps) {
  const [resolution, setResolution] = useState("");
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!resolution.trim()) return;

    startTransition(async () => {
      await resolveContradiction(contradictionId, resolution.trim());
      router.refresh();
    });
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 space-y-2">
      <textarea
        value={resolution}
        onChange={(e) => setResolution(e.target.value)}
        placeholder="Describe how this contradiction was resolved..."
        rows={3}
        className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/50 resize-y"
        required
      />
      <button
        type="submit"
        disabled={isPending || !resolution.trim()}
        className="inline-flex items-center rounded-md bg-brand-blue px-3 py-1.5 text-sm font-medium text-white hover:bg-brand-blue/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        {isPending ? "Resolving..." : "Resolve"}
      </button>
    </form>
  );
}
