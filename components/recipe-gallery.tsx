/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { Clock3, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { recipes } from "@/data/demo";
import { Badge, EmptyState } from "./ui";

export function RecipeGallery({ hrefBase = "/danisan/tarifler", manage = false }: { hrefBase?: string; manage?: boolean }) {
  const [query, setQuery] = useState(""); const [category, setCategory] = useState("Tümü");
  const view = useMemo(() => recipes.filter((recipe) => (category === "Tümü" || recipe.category === category) && recipe.name.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))), [category, query]);
  return <><div className="mb-7 flex flex-col gap-4 lg:flex-row lg:items-center"><label className="relative block max-w-lg flex-1"><span className="sr-only">Tarif ara</span><Search size={20} className="absolute left-4 top-3.5 text-[#73766f]" /><input className="dh-input pl-12" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Tarif ara..." /></label><div className="flex flex-wrap gap-2">{["Tümü", "Kahvaltı", "Öğle", "Akşam"].map((item) => <button onClick={() => setCategory(item)} key={item} className={`dh-focus rounded-full px-4 py-2.5 text-sm font-semibold ${category === item ? "bg-[#2d4f3d] text-white" : "border border-[#d1d2cd] bg-white hover:bg-[#f3f0ea]"}`}>{item}</button>)}<button className="dh-focus rounded-full border border-[#d1d2cd] bg-white p-2.5" aria-label="Tarif filtreleri"><SlidersHorizontal size={18} /></button></div></div>
    {view.length ? <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">{view.map((recipe) => <article key={recipe.id} className="dh-card overflow-hidden"><img src={recipe.image} alt={`${recipe.name} örnek tarif görseli`} className="h-48 w-full object-cover" /><div className="p-5"><div className="flex items-center justify-between gap-3"><Badge tone="success">{recipe.category}</Badge><span className="flex items-center gap-1 text-sm text-[#6b6d67]"><Clock3 size={15} />{recipe.duration}</span></div><h2 className="dh-heading mt-4 text-xl font-bold">{recipe.name}</h2><p className="mt-2 min-h-10 text-sm text-[#666963]">{recipe.description}</p><Link href={`${hrefBase}/${recipe.id}`} className="dh-focus mt-5 inline-flex rounded-xl bg-[#e7e2d8] px-4 py-2.5 text-sm font-semibold text-[#163827] hover:bg-[#ddd6c9]">{manage ? "Tarifi Düzenle" : "Tarifi Gör"}</Link></div></article>)}</div> : <EmptyState title="Tarif bulunamadı" description="Arama veya kategori seçimini değiştirerek tekrar deneyin." />}</>;
}
