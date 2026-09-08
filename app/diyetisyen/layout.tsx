import type { ReactNode } from "react";
import { DietitianShell } from "@/components/shells";

export default function DietitianLayout({ children }: { children: ReactNode }) { return <DietitianShell>{children}</DietitianShell>; }
