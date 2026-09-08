"use client";
import { useMemo, useState } from "react";
import { Check, Leaf, Plus, Save, Sun, Utensils } from "lucide-react";

const participantOptions = ["Tüm Aktif Danışanlar (48 Kişi)", "Sadece Yeni Danışanlar (12 Kişi)", "Elle Seç"];

export function CampForm() {
  const [saved, setSaved] = useState(false);
  const [day, setDay] = useState(1);
  const [days, setDays] = useState([1, 2, 3, 4, 5]);
  const [name, setName] = useState("21 Günlük Dengeli Yaşam Kampı");
  const [duration, setDuration] = useState(21);
  const [participants, setParticipants] = useState(participantOptions[0]);
  const participantCount = useMemo(() => {
    const match = participants.match(/\((\d+)/);
    return match ? Number(match[1]) : 0;
  }, [participants]);

  return <div className="grid gap-6 lg:grid-cols-12">
    <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="dh-card space-y-9 p-6 sm:p-9 lg:col-span-8">
      <div><h2 className="dh-heading flex items-center gap-3 text-2xl font-bold"><Leaf size={26} />Kamp Detayları</h2>
        {saved && <p className="mt-5 rounded-xl bg-[#e8f2ec] px-4 py-3 text-sm font-medium text-[#2d4f3d]">Demo kamp bilgileri kaydedildi.</p>}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <label className="text-sm font-semibold">Kamp Adı<input required className="dh-input mt-2" value={name} onChange={(event) => setName(event.target.value)} /></label>
          <label className="text-sm font-semibold">Kamp Açıklaması<textarea className="dh-textarea mt-2" defaultValue="Danışanların günlük küçük adımlarla düzenli beslenme rutinleri oluşturmasına eşlik eden örnek kamp." /></label>
          <label className="text-sm font-semibold">Başlangıç Tarihi<input className="dh-input mt-2" type="date" defaultValue="2024-05-13" /></label>
          <label className="text-sm font-semibold">Süre (gün)<input className="dh-input mt-2" type="number" value={duration} onChange={(event) => setDuration(Number(event.target.value) || 0)} min="1" /></label>
          <label className="text-sm font-semibold lg:col-span-2">Danışan Seçimi<select className="dh-select mt-2" value={participants} onChange={(event) => setParticipants(event.target.value)}>{participantOptions.map((option) => <option key={option}>{option}</option>)}</select></label>
        </div>
      </div>
      <div className="border-t border-[#e2dfd9] pt-8">
        <h2 className="dh-heading text-2xl font-bold">Günlük Program Kurgusu</h2>
        <div className="mt-5 flex gap-2 overflow-x-auto pb-2">{days.map((item) => <button type="button" key={item} onClick={() => setDay(item)} className={`dh-focus shrink-0 rounded-full px-6 py-3 font-semibold ${day === item ? "bg-[#2d4f3d] text-white" : "bg-[#f0eeea] text-[#333631]"}`}>{item}. Gün</button>)}<button type="button" onClick={() => setDays((items) => [...items, items.length + 1])} className="dh-focus rounded-full bg-[#f0eeea] p-3 text-[#163827]" aria-label="Yeni gün ekle"><Plus size={20} /></button></div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          <MealSetup icon={<Sun size={23} />} title="Kahvaltı" note="Güne limonlu su ile başla" />
          <MealSetup icon={<Utensils size={23} />} title="Ara Öğün" content="Yeşil Çay & Çiğ Badem" />
          <MealSetup icon={<Utensils size={23} />} title="Öğle" note="Bol yeşillik tercih et" />
          <MealSetup icon={<Sun size={23} />} title="Akşam" note="En geç 19:30'da" />
        </div>
      </div>
      <button type="submit" className="hidden">Kaydet</button>
    </form>

    <aside className="lg:col-span-4">
      <div className="sticky top-8 flex flex-col gap-4">
        <div className="dh-card p-6">
          <h3 className="dh-heading text-lg font-bold">Kamp Özeti</h3>
          <div className="mt-4 flex flex-col gap-3 border-b border-[#eae7e0] pb-4 text-sm">
            <div className="flex items-center justify-between"><span className="text-[#6b6e68]">Adı</span><span className="max-w-[60%] truncate text-right font-semibold">{name}</span></div>
            <div className="flex items-center justify-between"><span className="text-[#6b6e68]">Süre</span><span className="font-semibold">{duration} Gün</span></div>
            <div className="flex items-center justify-between"><span className="text-[#6b6e68]">Katılımcı</span><span className="font-semibold">{participantCount} Danışan</span></div>
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center justify-between rounded-lg bg-[#f5f0e6] p-3"><span className="flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><Utensils size={16} />Toplam Öğün</span><span className="dh-heading text-lg font-bold">{days.length * 4}</span></div>
            <div className="flex items-center justify-between rounded-lg bg-[#f5f0e6] p-3"><span className="flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><Leaf size={16} />Toplam Gün</span><span className="dh-heading text-lg font-bold">{days.length}</span></div>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <button type="button" onClick={() => setSaved(true)} className="dh-focus flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3.5 font-semibold text-white hover:bg-[#163827]"><Check size={18} />Kampı Yayınla</button>
          <button type="button" onClick={() => setSaved(true)} className="dh-focus flex items-center justify-center gap-2 rounded-xl bg-[#f5f0e6] px-4 py-3.5 font-semibold text-[#2d4f3d] hover:bg-[#e7e2d8]"><Save size={18} />Taslak Olarak Kaydet</button>
        </div>
      </div>
    </aside>
  </div>;
}
function MealSetup({ icon, title, note, content }: { icon: React.ReactNode; title: string; note?: string; content?: string }) { return <div className="rounded-2xl border border-[#dedbd4] p-5"><p className="flex items-center gap-3 font-semibold uppercase tracking-[.08em] text-[#163827]">{icon}{title}</p>{content ? <div className="mt-6 rounded-xl border border-[#dfddd7] bg-white p-3"><p className="font-semibold">{content}</p><p className="mt-1 text-sm text-[#696c66]">Porsiyon: 1 fincan / 10 adet</p></div> : <button type="button" className="dh-focus mt-6 flex w-full flex-col items-center rounded-xl border-2 border-dashed border-[#c7cec6] px-3 py-5 text-sm text-[#555954]"><Plus size={22} />Tarif Ekle</button>}<label className="mt-5 block text-xs font-bold uppercase tracking-[.08em] text-[#656861]">Diyetisyen Notu<input className="dh-input mt-2 text-sm" defaultValue={note} placeholder="Not ekleyin" /></label></div>; }
