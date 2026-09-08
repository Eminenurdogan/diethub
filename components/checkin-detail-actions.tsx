"use client";
import { useState } from "react";
import { CalendarDays, History } from "lucide-react";
import { Card } from "./ui";
import { Modal } from "./modal";

const pastCheckins = [
  { date: "13 Mayıs", summary: "Programa büyük ölçüde uyum sağladı, su hedefini tamamladı." },
  { date: "11 Mayıs", summary: "Kendini yorgun hissettiğini paylaştı, ara öğünü atladı." },
  { date: "9 Mayıs", summary: "Tüm öğünleri planına uygun tamamladı." },
];

export function HistoryButton({ clientName }: { clientName: string }) {
  const [open, setOpen] = useState(false);
  return <>
    <button type="button" onClick={() => setOpen(true)} className="dh-focus inline-flex items-center gap-2 rounded-xl bg-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#163827] hover:bg-[#ddd6c9]"><History size={18} />Geçmiş</button>
    <Modal open={open} onClose={() => setOpen(false)} title={`${clientName} · Check-in Geçmişi`}>
      <div className="space-y-3">{pastCheckins.map((item) => <div key={item.date} className="rounded-xl bg-[#f6f4ef] p-4"><p className="flex items-center gap-2 text-sm font-semibold text-[#163827]"><CalendarDays size={15} />{item.date}</p><p className="mt-1.5 text-sm text-[#5e625d]">{item.summary}</p></div>)}</div>
    </Modal>
  </>;
}

export function DietitianNoteCard() {
  const [savedAs, setSavedAs] = useState<"draft" | "final" | null>(null);
  return <Card className="flex flex-1 flex-col p-6">
    <h3 className="dh-heading border-b border-[#e7e5e0] pb-3 text-xl font-bold">Diyetisyen Notu</h3>
    <textarea onChange={() => setSavedAs(null)} className="dh-textarea mt-4 flex-1" defaultValue="Gayet iyi ilerliyorsun. Yarın su tüketimine biraz daha dikkat edelim." placeholder="Danışan için notlarınızı buraya yazın..." />
    {savedAs && <p role="status" className="mt-3 rounded-xl bg-[#e8f2ec] px-4 py-2.5 text-sm font-medium text-[#2d4f3d]">{savedAs === "final" ? "Notunuz kaydedildi." : "Taslak olarak kaydedildi."}</p>}
    <div className="mt-4 flex justify-end gap-2">
      <button onClick={() => setSavedAs("draft")} type="button" className="dh-focus rounded-xl bg-[#f0eeea] px-4 py-2.5 text-sm font-semibold text-[#383b37] hover:bg-[#e7e2d8]">Taslak Kaydet</button>
      <button onClick={() => setSavedAs("final")} type="button" className="dh-focus rounded-xl bg-[#2d4f3d] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#163827]">Notu Kaydet</button>
    </div>
  </Card>;
}
