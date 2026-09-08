import { redirect } from "next/navigation";
export default async function ProgramDayPage({ params }: { params: Promise<{ day: string }> }) { await params; redirect("/danisan/programim"); }
