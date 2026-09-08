"use client";
import { useState } from "react";
import { AlertTriangle, MoreHorizontal, Pencil, UserX } from "lucide-react";
import { Modal } from "./modal";

export function ClientActionsMenu({ clientName }: { clientName: string }) {
  const [open, setOpen] = useState(false);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [result, setResult] = useState<"edited" | "removed" | null>(null);
  const close = () => { setOpen(false); setConfirmRemove(false); setResult(null); };

  return <>
    <button type="button" onClick={() => setOpen(true)} className="dh-focus rounded-xl border border-[#d8d9d4] p-3 hover:bg-[#f3f0ea]" aria-label="Diğer işlemler"><MoreHorizontal size={20} /></button>
    <Modal open={open} onClose={close} title="Diğer İşlemler">
      {result ? (
        <p role="status" className="rounded-xl bg-[#e8f2ec] px-4 py-3 text-sm font-medium text-[#2d4f3d]">{result === "removed" ? `${clientName} demo olarak listeden kaldırıldı.` : "Düzenleme formu bu demoda örnek olarak gösterilir; değişiklikler kaydedilmez."}</p>
      ) : confirmRemove ? (
        <div className="rounded-xl border border-[#f3c9c3] bg-[#fdf1ef] p-4">
          <p className="flex items-center gap-2 text-sm font-semibold text-[#9b2c25]"><AlertTriangle size={18} />{clientName} danışanlıktan çıkarılsın mı?</p>
          <p className="mt-1 text-sm text-[#8a6f6b]">Bu işlem geri alınamaz.</p>
          <div className="mt-4 flex gap-3"><button onClick={() => setConfirmRemove(false)} className="dh-focus flex-1 rounded-xl border border-[#c6c9c3] py-2.5 text-sm font-semibold text-[#383b37]">Vazgeç</button><button onClick={() => setResult("removed")} className="dh-focus flex-1 rounded-xl bg-[#9b2c25] py-2.5 text-sm font-semibold text-white">Evet, Kaldır</button></div>
        </div>
      ) : (
        <div className="space-y-2">
          <button onClick={() => setResult("edited")} className="dh-focus flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-[#242724] hover:bg-[#f3f0ea]"><Pencil size={18} className="text-[#2d4f3d]" />Danışan Bilgilerini Düzenle</button>
          <button onClick={() => setConfirmRemove(true)} className="dh-focus flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left font-semibold text-[#9b2c25] hover:bg-[#fdf1ef]"><UserX size={18} />Danışanı Kaldır</button>
        </div>
      )}
    </Modal>
  </>;
}
