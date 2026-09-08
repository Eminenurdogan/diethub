"use client";
import Link from "next/link";
import { ClipboardX, RotateCcw, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { clients } from "@/data/demo";
import { Avatar, Badge, EmptyState, ProgressBar } from "./ui";

const filters = ["Tümü", "Aktif", "Yeni", "Beklemede", "Check-in Bekleyen"] as const;
function matchesFilter(client: (typeof clients)[number], filter: (typeof filters)[number]) {
  if (filter === "Tümü") return true;
  if (filter === "Check-in Bekleyen") return !client.lastCheckin.toLocaleLowerCase("tr").includes("bugün");
  return client.status === filter;
}

export function ClientDirectory() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tümü");
  const filtered = useMemo(() => clients.filter((client) => matchesFilter(client, filter) && client.name.toLocaleLowerCase("tr").includes(query.toLocaleLowerCase("tr"))), [filter, query]);
  return <><div className="mb-8 flex flex-col gap-4 xl:flex-row xl:items-center"><label className="relative block max-w-[480px] flex-1"><span className="sr-only">Danışan ara</span><Search className="absolute left-4 top-3.5 text-[#73766f]" size={21} /><input value={query} onChange={(e) => setQuery(e.target.value)} className="dh-input pl-12" placeholder="Danışan ara..." /></label><div className="flex flex-wrap gap-2" aria-label="Danışan filtreleri">{filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`dh-focus inline-flex items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-semibold ${filter === item ? "bg-[#2d4f3d] text-white" : "border border-[#c6c9c3] bg-white text-[#383b37] hover:bg-[#f3f0ea]"}`}>{item === "Check-in Bekleyen" && <ClipboardX size={16} />}{item}</button>)}<button className="dh-focus inline-flex items-center gap-2 rounded-full border border-[#c6c9c3] bg-white px-4 py-2.5 text-sm font-semibold hover:bg-[#f3f0ea]"><SlidersHorizontal size={16} />Filtrele</button></div></div>
    {filtered.length ? <div className="grid gap-5 xl:grid-cols-2">{filtered.map((client) => <article key={client.id} className="dh-card p-6"><div className="flex items-start justify-between gap-3"><div className="flex items-center gap-4"><Avatar initials={client.initials} tone={client.tone} size="lg" /><div><h2 className="dh-heading text-2xl font-bold">{client.name}</h2><p className="mt-1 text-[#5e625c]">{client.program}</p></div></div><Badge tone={client.status === "Aktif" ? "success" : client.status === "Yeni" ? "warning" : "neutral"}>● {client.status}</Badge></div><div className="mt-7"><ProgressBar value={client.progress} label={`İlerleme: ${client.day}`} /></div><div className="mt-6 flex items-center justify-between border-t border-[#e7e5e0] pt-4"><p className="text-[#5e625c]">Son check-in: <span className="font-medium text-[#202923]">{client.lastCheckin}</span></p><Link href={`/diyetisyen/danisanlar/${client.id}`} className="dh-focus rounded-xl bg-[#f0eeea] px-5 py-2.5 font-semibold text-[#163827] hover:bg-[#e7e2d8]">Detay</Link></div></article>)}</div> : <EmptyState title="Danışan bulunamadı" description="Arama veya filtre kriterlerinizi değiştirerek tekrar deneyin." action={<button onClick={() => { setFilter("Tümü"); setQuery(""); }} className="dh-focus inline-flex items-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-2.5 font-semibold text-white"><RotateCcw size={18} />Tüm danışanları göster</button>} />}</>;
}
