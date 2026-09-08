import Link from "next/link";
import { ChevronRight, Coffee, Moon, Sun, Utensils } from "lucide-react";
import { mealPlan } from "@/data/demo";
import { Card, PageHeader } from "@/components/ui";
const icons = [Sun, Coffee, Utensils, Moon];
export default function MyProgramPage() {
  return <>
    <PageHeader title="Programım" description="21 Günlük Beslenme Kampı" />
    <section>
      <div className="flex items-center justify-between"><h2 className="dh-heading text-2xl font-bold">Bu Hafta</h2><span className="text-sm text-[#696c66]">Mayıs 2024</span></div>
      <div className="mt-4 flex gap-2 overflow-x-auto pb-2">{["Pzt 13", "Sal 14", "Çar 15", "Per 16", "Cum 17"].map((date, index) => <Link key={date} href={`/danisan/programim/${index + 13}`} className={`dh-focus min-w-[64px] rounded-2xl px-3 py-3 text-center ${index === 2 ? "bg-[#2d4f3d] text-white" : "bg-white shadow-[0_4px_20px_rgba(45,79,61,.05)]"}`}><span className="block text-xs">{date.split(" ")[0]}</span><span className="mt-1 block text-xl font-bold">{date.split(" ")[1]}</span></Link>)}</div>
    </section>
    <section className="mt-8">
      <h2 className="dh-heading text-2xl font-bold">15 Mayıs Çarşamba</h2>
      <p className="mt-1 text-sm text-[#696c66]">Günlük Beslenme Planı</p>
      <div className="mt-5 space-y-5">
        {mealPlan.map((meal, index) => { const Icon = icons[index]; return <Card key={meal.meal} className="overflow-hidden border-l-4 border-l-[#2d4f3d] p-4 sm:p-5"><div className="flex gap-4"><span className="rounded-full bg-[#f0eeea] p-3 text-[#2d4f3d]"><Icon size={23} /></span><div className="min-w-0 flex-1"><div className="flex flex-wrap items-center justify-between gap-2"><h3 className="dh-heading text-xl font-bold">{meal.meal}</h3><span className="rounded-full bg-[#f0eeea] px-3 py-1 text-xs font-semibold">{meal.time}</span></div><p className="mt-3 font-semibold">{meal.title}</p><p className="mt-2 text-[#555a54]">{meal.detail}</p><div className="mt-4 rounded-xl border border-[#e2e0da] bg-[#fcfbf9] p-3"><p className="text-xs font-bold text-[#2d4f3d]">DİYETİSYEN NOTU</p><p className="mt-1 text-sm italic text-[#5d615b]">Öğününü mümkünse sakin bir ortamda ve yavaşça tüketmeyi unutma.</p></div><Link href={`/danisan/tarifler/${meal.recipeId}`} className="dh-focus mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#2d4f3d] hover:text-[#163827]">Tarife Git <ChevronRight size={16} /></Link></div></div></Card>; })}
      </div>
    </section>
  </>;
}
