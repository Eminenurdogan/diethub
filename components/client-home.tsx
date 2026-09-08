"use client";
import Link from "next/link";
/* eslint-disable @next/next/no-img-element */
import { Camera, ChevronRight, CircleCheck, Flag, MessageCircle, Moon, Sun, Utensils } from "lucide-react";
import { useState } from "react";
import { recipes } from "@/data/demo";
import { Card, ProgressBar } from "./ui";
import { WaterTracker } from "./water-tracker";

const tasks = ["Programımı tamamladım", "Su hedefimi tamamladım", "Öğün fotoğrafımı paylaştım"];
const meals = [
  { icon: <Sun size={22} />, label: "Kahvaltı", title: "Badem Unlu Pankek", detail: "2 yumurta · badem unu · tahin" },
  { icon: <span className="text-xl">●</span>, label: "Ara Öğün", title: "Yaban Mersini & Badem", detail: "1 avuç" },
  { icon: <Moon size={22} />, label: "Akşam", title: "Fırın Balık & Yeşillikli Salata", detail: "1 porsiyon" },
];

export function ClientHome() {
  const [done, setDone] = useState<number[]>([0]);
  const [mealsDone, setMealsDone] = useState<number[]>([0]);
  return <div className="space-y-8">
    <section className="rounded-[22px] bg-[#2d4f3d] p-5 text-white"><div className="flex items-start justify-between"><span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#2d4f3d]">15. GÜN</span><Flag size={21} className="text-[#c5ecd3]" /></div><h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold">21 Günlük<br />Beslenme Kampı</h1></section>
    <Card className="p-5"><div className="flex items-end justify-between"><div><p className="dh-heading text-xl font-bold">Bugünkü ilerlemen</p><p className="mt-1 text-sm text-[#696d66]">Harika gidiyorsun!</p></div><p className="dh-heading text-2xl font-bold">%{Math.round((done.length / tasks.length) * 100)}</p></div><div className="mt-4"><ProgressBar value={Math.round((done.length / tasks.length) * 100)} /></div></Card>
    <WaterTracker />
    <section>
      <h2 className="dh-heading text-2xl font-bold">Bugünün Programı</h2>
      <div className="mt-4 space-y-3">
        {meals.map((meal, index) => {
          const completed = mealsDone.includes(index);
          return <MealCard key={meal.label} icon={meal.icon} label={meal.label} title={meal.title} detail={meal.detail} completed={completed}>
            {!completed && (index === meals.length - 1
              ? <Link href="/danisan/programim/15" className="dh-focus mt-3 inline-block rounded-lg bg-[#2d4f3d] px-4 py-2 text-xs font-semibold text-white hover:bg-[#163827]">Detay</Link>
              : <button type="button" onClick={() => setMealsDone((items) => [...items, index])} className="dh-focus mt-3 inline-block rounded-lg bg-[#2d4f3d] px-4 py-2 text-xs font-semibold text-white hover:bg-[#163827]">Tamamla</button>)}
          </MealCard>;
        })}
      </div>
    </section>
    <Card className="p-5"><h2 className="dh-heading text-xl font-bold">Bugünün Görevleri</h2><div className="mt-4 space-y-4">{tasks.map((task, index) => <label key={task} className="flex cursor-pointer items-center gap-3"><input checked={done.includes(index)} onChange={() => setDone((items) => items.includes(index) ? items.filter((item) => item !== index) : [...items, index])} className="h-5 w-5 accent-[#2d4f3d]" type="checkbox" /><span className={done.includes(index) ? "text-[#757871] line-through" : ""}>{task}</span></label>)}</div><button className="dh-focus mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-[#2d4f3d] py-3 text-sm font-semibold text-[#163827] hover:bg-[#e8f2ec]"><Camera size={18} />Fotoğraf Ekle</button></Card>
    <Card className="overflow-hidden"><div className="p-5"><p className="text-xs font-bold uppercase tracking-[.1em] text-[#73766f]">Bugünün tarifi</p><h2 className="dh-heading mt-2 text-xl font-bold">{recipes[0].name}</h2></div><img className="h-52 w-full object-cover" src={recipes[0].image} alt={`${recipes[0].name} örnek tarif görseli`} /><Link className="dh-focus m-5 block rounded-xl bg-[#f0eeea] py-3 text-center text-sm font-semibold text-[#163827] hover:bg-[#e7e2d8]" href={`/danisan/tarifler/${recipes[0].id}`}>Tarifi Gör</Link></Card>
    <section><div className="flex items-center justify-between"><h2 className="dh-heading text-2xl font-bold">Kamp Topluluğu</h2><Link className="dh-focus flex items-center gap-1 text-sm font-semibold text-[#2d4f3d]" href="/danisan/topluluk">Topluluğa Git <ChevronRight size={16} /></Link></div><div className="mt-4 space-y-3"><Card className="flex items-center gap-3 p-4"><span className="rounded-full bg-[#e8f2ec] p-2 text-[#2d4f3d]"><Utensils size={18} /></span><p className="text-sm"><strong>Ayşe</strong> bugün öğün fotoğrafını paylaştı.<br /><span className="text-xs text-[#777a73]">2 saat önce</span></p></Card><Card className="flex items-center gap-3 p-4"><span className="rounded-full bg-[#2d4f3d] p-2 text-white"><MessageCircle size={18} /></span><p className="text-sm"><strong>Diyetisyenin</strong> yeni bir duyuru paylaştı.<br /><span className="text-xs text-[#777a73]">5 saat önce</span></p></Card></div></section>
  </div>;
}

function MealCard({ icon, label, title, detail, completed, children }: { icon: React.ReactNode; label: string; title: string; detail: string; completed?: boolean; children?: React.ReactNode }) {
  return <Card className={`relative overflow-hidden p-4 ${completed ? "border-l-4 border-l-[#2d4f3d]" : ""}`}>
    <div className="flex gap-3">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#f3f0ea] text-[#2d4f3d]">{icon}</span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-bold uppercase tracking-[.1em] text-[#626660]">{label}</p>
        <p className="mt-1 font-semibold">{title}</p>
        <p className="mt-1 text-xs text-[#626660]">{detail}</p>
        {completed ? <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-[#2d4f3d]"><CircleCheck size={15} />Tamamlandı</p> : children}
      </div>
    </div>
  </Card>;
}
