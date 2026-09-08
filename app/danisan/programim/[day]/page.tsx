import Link from "next/link";
import { ArrowLeft, ChevronRight, Coffee, Moon, Sun, Utensils } from "lucide-react";
import { mealPlan } from "@/data/demo";
import { Card, PageHeader } from "@/components/ui";

const dayLabels: Record<string, string> = { "13": "13 Mayıs Pazartesi", "14": "14 Mayıs Salı", "15": "15 Mayıs Çarşamba", "16": "16 Mayıs Perşembe", "17": "17 Mayıs Cuma" };
const icons = [Sun, Coffee, Utensils, Moon];

export default async function ProgramDayPage({ params }: { params: Promise<{ day: string }> }) {
  const { day } = await params;
  const label = dayLabels[day] ?? `${day}. Gün`;
  return <>
    <Link href="/danisan/programim" className="dh-focus mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><ArrowLeft size={17} />Programıma dön</Link>
    <PageHeader title={label} description="Günlük Beslenme Planı" />
    <div className="space-y-5">
      {mealPlan.map((meal, index) => { const Icon = icons[index]; return <Card key={meal.meal} className="overflow-hidden border-l-4 border-l-[#2d4f3d] p-4 sm:p-5"><div className="flex gap-4"><span className="rounded-full bg-[#f0eeea] p-3 text-[#2d4f3d]"><Icon size={23} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="dh-heading text-xl font-bold">{meal.meal}</h3><span className="rounded-full bg-[#f0eeea] px-3 py-1 text-xs font-semibold">{meal.time}</span></div><p className="mt-3 font-semibold">{meal.title}</p><p className="mt-2 text-[#555a54]">{meal.detail}</p><div className="mt-4 rounded-xl border border-[#e2e0da] bg-[#fcfbf9] p-3"><p className="text-xs font-bold text-[#2d4f3d]">DİYETİSYEN NOTU</p><p className="mt-1 text-sm italic text-[#5d615b]">Öğününü mümkünse sakin bir ortamda ve yavaşça tüketmeyi unutma.</p></div><Link href={`/danisan/tarifler/${meal.recipeId}`} className="dh-focus mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2d4f3d] hover:text-[#163827]">Tarife Git <ChevronRight size={16} /></Link></div></div></Card>; })}
    </div>
  </>;
}
