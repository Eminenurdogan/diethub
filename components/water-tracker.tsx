"use client";
import { useState } from "react";
import { Droplet, Minus, Plus } from "lucide-react";
import { Card } from "./ui";

const GOAL_ML = 2500;
const GLASS_ML = 250;
const GLASS_COUNT = GOAL_ML / GLASS_ML;

export function WaterTracker() {
  const [glasses, setGlasses] = useState(6);
  const totalMl = glasses * GLASS_ML;
  const percent = Math.min(100, Math.round((totalMl / GOAL_ML) * 100));

  return <Card className="p-5">
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#dce9ed] text-[#315765]"><Droplet size={20} /></span>
        <div><p className="dh-heading text-lg font-bold">Su Takibi</p><p className="text-sm text-[#696d66]">Günlük hedefin 2.5L</p></div>
      </div>
      <p className="dh-heading text-xl font-bold">{(totalMl / 1000).toFixed(1)}L</p>
    </div>

    <div className="mt-4 h-2 overflow-hidden rounded-full bg-[#e5eef1]"><div className="h-full rounded-full bg-[#315765] transition-all" style={{ width: `${percent}%` }} /></div>

    <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Bardak seçimi">
      {Array.from({ length: GLASS_COUNT }, (_, index) => {
        const filled = index < glasses;
        return <button
          key={index}
          type="button"
          onClick={() => setGlasses(index + 1 === glasses ? index : index + 1)}
          aria-label={`${index + 1}. bardak${filled ? ", içildi" : ""}`}
          aria-pressed={filled}
          className={`dh-focus flex h-9 w-9 items-center justify-center rounded-full border transition ${filled ? "border-[#315765] bg-[#dce9ed] text-[#315765]" : "border-[#dcdfd9] bg-white text-[#c3c6c0] hover:border-[#a9b6ba]"}`}
        ><Droplet size={16} fill={filled ? "currentColor" : "none"} /></button>;
      })}
    </div>

    <div className="mt-4 flex items-center justify-between">
      <p className="text-sm text-[#696d66]">{glasses}/{GLASS_COUNT} bardak · 250 ml</p>
      <div className="flex gap-2">
        <button type="button" onClick={() => setGlasses((count) => Math.max(0, count - 1))} className="dh-focus rounded-full border border-[#d8d9d4] p-2 text-[#5e625d] hover:bg-[#f3f0ea]" aria-label="Bir bardak çıkar"><Minus size={16} /></button>
        <button type="button" onClick={() => setGlasses((count) => Math.min(GLASS_COUNT, count + 1))} className="dh-focus rounded-full bg-[#2d4f3d] p-2 text-white hover:bg-[#163827]" aria-label="Bir bardak ekle"><Plus size={16} /></button>
      </div>
    </div>

    {percent >= 100 && <p className="mt-3 text-sm font-semibold text-[#2d4f3d]">Bugünkü su hedefine ulaştın! 🎉</p>}
  </Card>;
}
