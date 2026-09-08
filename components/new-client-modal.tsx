"use client";
import { useState } from "react";
import { Check, Plus, UserPlus } from "lucide-react";
import { camps } from "@/data/demo";
import { Modal } from "./modal";

export function NewClientModal({ variant = "cta" }: { variant?: "cta" | "sidebar" | "outline" }) {
  const [open, setOpen] = useState(false);
  const [saved, setSaved] = useState(false);

  const close = () => { setOpen(false); setSaved(false); };

  const triggerClass =
    variant === "sidebar"
      ? "dh-focus flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3.5 font-semibold text-white hover:bg-[#163827]"
      : variant === "outline"
      ? "dh-focus inline-flex items-center gap-3 rounded-xl bg-[#e7e2d8] px-4 py-4 font-semibold text-[#163827] hover:bg-[#ddd6c9]"
      : "dh-focus inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163827]";

  return <>
    <button type="button" onClick={() => setOpen(true)} className={triggerClass}>
      {variant === "outline" ? <Plus size={18} /> : <UserPlus size={variant === "sidebar" ? 19 : 18} />}
      Danışan Ekle
    </button>
    <Modal open={open} onClose={close} title="Yeni Danışan Ekle">
      {saved ? (
        <div className="rounded-xl bg-[#e8f2ec] px-4 py-4 text-sm font-medium text-[#2d4f3d]">
          Demo danışan davetiniz gönderildi. Bu bir örnek etkileşimdir, gerçek bir hesap oluşturulmaz.
        </div>
      ) : (
        <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }} className="space-y-4">
          <label className="block text-sm font-semibold">Ad Soyad<input required className="dh-input mt-2" placeholder="Örn. Ayşe Yılmaz" /></label>
          <label className="block text-sm font-semibold">E-posta<input required type="email" className="dh-input mt-2" placeholder="ornek@diethub.com" /></label>
          <label className="block text-sm font-semibold">Telefon Numarası<input required type="tel" className="dh-input mt-2" placeholder="05XX XXX XX XX" /></label>
          <label className="block text-sm font-semibold">Kamp<select className="dh-select mt-2" defaultValue={camps[0]?.name}>{camps.map((camp) => <option key={camp.id}>{camp.name}</option>)}</select></label>
          <label className="block text-sm font-semibold">Durum<select className="dh-select mt-2" defaultValue="Yeni"><option>Yeni</option><option>Aktif</option><option>Beklemede</option></select></label>
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={close} className="dh-focus flex-1 rounded-xl border border-[#c6c9c3] py-3 font-semibold text-[#383b37]">Vazgeç</button>
            <button type="submit" className="dh-focus flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] py-3 font-semibold text-white hover:bg-[#163827]"><Check size={18} />Davet Gönder</button>
          </div>
        </form>
      )}
    </Modal>
  </>;
}
