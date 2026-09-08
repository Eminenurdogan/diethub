import type { ReactNode } from "react";
import { ClientShell } from "@/components/shells";

export default function ClientLayout({ children }: { children: ReactNode }) { return <ClientShell>{children}</ClientShell>; }
