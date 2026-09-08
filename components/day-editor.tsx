"use client";
import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Clock3, Edit3, Plus } from "lucide-react";
import { Card, PageHeader } from "./ui";

type Meal = { meal: string; time: string; title: string; detail: string };

export function DayEditor({ campId, day, meals }: { campId: string; day: string; meals: Meal[] }) {
  const [saved, setSaved] = useState(false);
  return <>
    <Link href={`/diyetisyen/kamplar/${campId}`} className="dh-focus mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><ArrowLeft size={17} />Kampa dön</Link>
    <PageHeader eyebrow="21 günlük beslenme kampı" title={`${day}. Gün Programı`} description="Öğünleri, saatleri ve danışan notlarını düzenleyin." action={<button onClick={() => setSaved(true)} className="dh-focus inline-flex items-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3 font-semibold text-white hover:bg-[#163827]"><Edit3 size={18} />Değişiklikleri Kaydet</button>} />
    {saved && <p role="status" className="-mt-4 mb-7 rounded-xl bg-[#e8f2ec] px-4 py-3 text-sm font-medium text-[#2d4f3d]">{day}. gün için değişiklikler demo olarak kaydedildi.</p>}
    <div className="grid gap-4 xl:grid-cols-4">
      {meals.map((meal) => <Card className="p-5" key={meal.meal}>
        <div className="flex items-center justify-between"><h2 className="dh-heading text-xl font-bold">{meal.meal}</h2><Clock3 size={18} className="text-[#2d4f3d]" /></div>
        <p className="mt-3 inline-flex rounded-full bg-[#f0eeea] px-3 py-1 text-xs font-semibold">{meal.time}</p>
        <div className="mt-5 rounded-xl border border-[#e3e1db] bg-[#fcfbf9] p-4"><p className="font-semibold">{meal.title}</p><p className="mt-2 text-sm text-[#656861]">{meal.detail}</p></div>
        <label className="mt-5 block text-sm font-semibold">Diyetisyen Notu<textarea className="dh-textarea mt-2 min-h-24 text-sm" defaultValue="Bol su içmeyi ve öğününü sakin bir ortamda tüketmeyi unutma." /></label>
        <button onClick={() => setSaved(true)} type="button" className="dh-focus mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-[#bfc9c1] py-3 text-sm font-semibold text-[#2d4f3d] hover:bg-[#f3f6f4]"><Plus size={17} />Tarif Ekle</button>
      </Card>)}
    </div>
  </>;
}
