"use client";
import type { ReactNode } from "react";
import { useEffect } from "react";
import { X } from "lucide-react";

export function Modal({ open, onClose, title, children }: { open: boolean; onClose: () => void; title: string; children: ReactNode }) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") onClose(); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return <div className="fixed inset-0 z-[60] flex items-end justify-center bg-[#1b1c1c]/45 p-0 sm:items-center sm:p-6" onClick={onClose}>
    <div role="dialog" aria-modal="true" aria-labelledby="dh-modal-title" onClick={(event) => event.stopPropagation()} className="dh-card-elevated max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-b-none p-6 sm:rounded-b-[24px] sm:p-7">
      <div className="flex items-center justify-between gap-4"><h2 id="dh-modal-title" className="dh-heading text-xl font-bold">{title}</h2><button onClick={onClose} className="dh-focus rounded-full p-2 text-[#5e625d] hover:bg-[#f0eeea]" aria-label="Kapat"><X size={20} /></button></div>
      <div className="mt-5">{children}</div>
    </div>
  </div>;
}
