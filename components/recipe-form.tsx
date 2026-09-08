"use client";
import { useMemo, useState } from "react";
import { Check, Clock, Flame, ImagePlus, Plus, Trash2 } from "lucide-react";

export function RecipeForm() {
  const [name, setName] = useState("Badem Unlu Pankek");
  const [category, setCategory] = useState("Kahvaltı");
  const [duration, setDuration] = useState("15 dk");
  const [ingredients, setIngredients] = useState(["2 yemek kaşığı badem unu", "1 yumurta", "Yarım muz"]);
  const [instructions, setInstructions] = useState("Yumurtaları derin bir kapta çırpın.\nÜzerine badem ununu ekleyip pürüzsüz olana dek karıştırın.\nYapışmaz tavada kısık ateşte iki tarafını pişirin ve ılık servis edin.");
  const [saved, setSaved] = useState(false);
  const update = (index: number, value: string) => setIngredients((items) => items.map((item, itemIndex) => itemIndex === index ? value : item));
  const steps = useMemo(() => instructions.split("\n").map((step) => step.trim()).filter(Boolean), [instructions]);

  return <div className="grid gap-6 lg:grid-cols-12">
    <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="dh-card space-y-9 p-6 sm:p-9 lg:col-span-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div><h2 className="dh-heading text-2xl font-bold">Tarif Bilgileri</h2><p className="mt-1 text-[#686b65]">Danışanlara göstereceğiniz örnek tarifi hazırlayın.</p></div>
        <button type="submit" className="dh-focus inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-5 py-3 font-semibold text-white hover:bg-[#163827]"><Check size={18} />Tarifi Kaydet</button>
      </div>
      {saved && <p className="rounded-xl bg-[#e8f2ec] px-4 py-3 font-medium text-[#2d4f3d]">Demo tarifi kaydedildi. Listeye dönerek mevcut tarifleri keşfedebilirsiniz.</p>}
      <div className="grid gap-6 lg:grid-cols-[1fr_.8fr]">
        <div className="space-y-5">
          <label className="block text-sm font-semibold">Tarif Adı<input className="dh-input mt-2" value={name} onChange={(event) => setName(event.target.value)} required /></label>
          <label className="block text-sm font-semibold">Kısa Açıklama<textarea className="dh-textarea mt-2" defaultValue="Güne dengeli bir başlangıç için pratik örnek tarif." /></label>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold">Kategori<select className="dh-select mt-2" value={category} onChange={(event) => setCategory(event.target.value)}><option>Kahvaltı</option><option>Öğle</option><option>Akşam</option><option>Ara Öğün</option></select></label>
            <label className="block text-sm font-semibold">Hazırlama Süresi<input className="dh-input mt-2" value={duration} onChange={(event) => setDuration(event.target.value)} /></label>
          </div>
        </div>
        <div className="flex min-h-60 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#c6cec6] bg-[#fcfbf9] p-6 text-center">
          <span className="rounded-full bg-[#e8f2ec] p-4 text-[#2d4f3d]"><ImagePlus size={28} /></span>
          <h3 className="mt-4 font-semibold">Tarif görseli</h3>
          <p className="mt-1 text-sm text-[#6b6e68]">Bu demo ekranında görsel yükleme simüle edilir.</p>
          <button type="button" className="dh-focus mt-4 rounded-xl bg-[#e7e2d8] px-4 py-2.5 text-sm font-semibold text-[#163827]">Görsel Seç</button>
        </div>
      </div>
      <div className="grid gap-8 border-t border-[#e2dfd9] pt-8 lg:grid-cols-2">
        <div>
          <div className="flex items-center justify-between"><h3 className="dh-heading text-xl font-bold">Malzemeler</h3><button type="button" onClick={() => setIngredients((items) => [...items, ""])} className="dh-focus inline-flex items-center gap-1 text-sm font-semibold text-[#2d4f3d]"><Plus size={16} />Ekle</button></div>
          <div className="mt-4 space-y-2">{ingredients.map((ingredient, index) => <div key={index} className="flex gap-2"><input className="dh-input py-2.5" value={ingredient} onChange={(event) => update(index, event.target.value)} aria-label={`${index + 1}. malzeme`} /><button type="button" onClick={() => setIngredients((items) => items.filter((_, itemIndex) => itemIndex !== index))} className="dh-focus rounded-xl p-3 text-[#8d4136] hover:bg-[#fde0dd]" aria-label="Malzemeyi sil"><Trash2 size={18} /></button></div>)}</div>
        </div>
        <label className="block text-sm font-semibold">Hazırlanışı<span className="ml-2 font-normal text-[#8b8e87]">(her adımı yeni satıra yazın)</span><textarea className="dh-textarea mt-3" value={instructions} onChange={(event) => setInstructions(event.target.value)} /></label>
      </div>
    </form>

    <aside className="lg:col-span-4">
      <div className="sticky top-8">
        <p className="mb-3 px-2 text-xs font-bold uppercase tracking-[.14em] text-[#73766f]">Tarif Önizleme</p>
        <div className="mx-auto flex h-[600px] w-full max-w-[300px] flex-col overflow-hidden rounded-[32px] border-4 border-[#eae7e0] bg-white shadow-lg">
          <div className="relative h-44 shrink-0 bg-[#e7e2d8]">
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white to-transparent p-4">
              <span className="inline-block rounded-full bg-[#2d4f3d] px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{category}</span>
              <h4 className="dh-heading mt-1.5 text-lg font-bold leading-tight">{name || "Tarif adı"}</h4>
            </div>
          </div>
          <div className="flex shrink-0 justify-between border-b border-[#eae7e0] px-4 py-2.5">
            <span className="flex items-center gap-1.5 text-xs text-[#6b6e68]"><Clock size={14} />{duration || "-"}</span>
            <span className="flex items-center gap-1.5 text-xs text-[#6b6e68]"><Flame size={14} />~320 kcal</span>
          </div>
          <div className="dh-scrollbar flex-1 overflow-y-auto p-4">
            <h5 className="text-sm font-semibold">Malzemeler</h5>
            <ul className="mt-2 space-y-1 border-l-2 border-[#c5ecd3] pl-3">{ingredients.filter(Boolean).map((ingredient, index) => <li key={index} className="text-[13px] text-[#5e625c]">{ingredient}</li>)}</ul>
            <h5 className="mt-4 text-sm font-semibold">Hazırlanışı</h5>
            <ol className="mt-2 space-y-2">{steps.map((step, index) => <li key={index} className="flex gap-2"><span className="text-[13px] font-bold text-[#2d4f3d]">{index + 1}.</span><p className="text-[13px] leading-relaxed text-[#5e625c]">{step}</p></li>)}</ol>
          </div>
        </div>
      </div>
    </aside>
  </div>;
}
