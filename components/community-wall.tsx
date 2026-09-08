/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { AlertTriangle, MessagesSquare, MoonStar, Paperclip, Send, Trash2, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { Avatar, EmptyState } from "./ui";
import { Modal } from "./modal";
import { DEFAULT_QUIET_HOURS, getQuietHours, isWithinQuietHours } from "@/lib/community-settings";

type Tone = "green" | "beige" | "pink" | "blue";
type ChatMessage = { id: number; name: string; initials: string; tone: Tone; time: string; text: string; image?: string };
const nameColor: Record<Tone, string> = { green: "text-[#2d4f3d]", beige: "text-[#8a6a2e]", pink: "text-[#a43d6b]", blue: "text-[#2f6b8a]" };

const ME = "Emine";
const DIETITIAN = "Diyetisyen Elif Nur";

const startMessages: ChatMessage[] = [
  { id: 1, name: DIETITIAN, initials: "EN", tone: "pink", time: "5 saat önce", text: "Yeni haftaya sakin ve sürdürülebilir hedeflerle başlıyoruz. Herkese güzel bir gün dilerim 🌿" },
  { id: 2, name: "Ayşe Yılmaz", initials: "AY", tone: "green", time: "2 saat önce", text: "Bugünkü öğünümü planıma uygun hazırladım. Küçük adımların iyi hissettirmesi çok güzel!", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Zeynep Kaya", initials: "ZK", tone: "blue", time: "1 saat 40 dk önce", text: "Harika görünüyor Ayşe! 👏" },
  { id: 4, name: "Mehmet Demir", initials: "MD", tone: "beige", time: "1 saat önce", text: "Bugün yürüyüşe çıktım, hava çok güzeldi." },
];

export function CommunityWall({ manager = false }: { manager?: boolean }) {
  const [messages, setMessages] = useState(startMessages);
  const [draft, setDraft] = useState("");
  const [openMessageId, setOpenMessageId] = useState<number | null>(null);
  const [confirmRemove, setConfirmRemove] = useState(false);
  const [quiet, setQuiet] = useState(DEFAULT_QUIET_HOURS);

  // localStorage yalnızca istemcide okunabilir; SSR ile aynı ilk render'ı koruyup
  // hydration sonrası gerçek değeri almak için kasıtlı olarak effect içinde setState kullanılıyor.
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => { setQuiet(getQuietHours()); }, []);
  const isQuietNow = !manager && quiet.enabled && isWithinQuietHours(new Date(), quiet.start, quiet.end);

  const viewerName = manager ? DIETITIAN : ME;
  const send = () => {
    if (!draft.trim() || isQuietNow) return;
    setMessages((items) => [...items, { id: items.length ? Math.max(...items.map((i) => i.id)) + 1 : 1, name: viewerName, initials: manager ? "EN" : "E", tone: manager ? "pink" : "green", time: "Şimdi", text: draft.trim() }]);
    setDraft("");
  };
  const removeMessage = (id: number) => { setMessages((items) => items.filter((item) => item.id !== id)); setOpenMessageId(null); setConfirmRemove(false); };
  const openMessage = messages.find((item) => item.id === openMessageId) ?? null;

  return <div className="mx-auto flex max-w-2xl flex-col">
    <div className="mb-5 flex items-center gap-3 rounded-2xl bg-[#e7e2d8]/50 px-4 py-3 text-sm text-[#5e625d]"><Users size={17} className="text-[#2d4f3d]" /><span>21 Günlük Beslenme Kampı grubu · 48 katılımcı</span></div>

    {messages.length ? <div className="flex flex-col gap-1">
      <div className="mb-2 flex justify-center"><span className="rounded-full bg-[#f0eeea] px-3 py-1 text-xs font-semibold text-[#8b8e87]">Bugün</span></div>
      {messages.map((message, index) => {
        const mine = message.name === viewerName;
        const prevSameSender = index > 0 && messages[index - 1].name === message.name;
        return <div key={message.id} className={`group flex items-end gap-2 ${mine ? "flex-row-reverse" : ""} ${prevSameSender ? "mt-0.5" : "mt-3"}`}>
          {!mine && (prevSameSender ? <div className="w-8 shrink-0" /> : <Avatar initials={message.initials} tone={message.tone} size="sm" />)}
          <div className={`flex max-w-[78%] flex-col ${mine ? "items-end" : "items-start"}`}>
            {!mine && !prevSameSender && <span className={`mb-0.5 ml-1 text-xs font-bold ${nameColor[message.tone]}`}>{message.name}</span>}
            <div className={`rounded-2xl px-3.5 py-2.5 shadow-sm ${mine ? "rounded-br-sm bg-[#2d4f3d] text-white" : "rounded-bl-sm bg-white text-[#242724]"}`}>
              {message.image && <img src={message.image} alt="Topluluk mesajındaki örnek öğün görseli" className="mb-2 max-h-64 w-full rounded-xl object-cover" />}
              <p className="text-[15px] leading-snug">{message.text}</p>
              <p className={`mt-1 text-right text-[11px] ${mine ? "text-white/70" : "text-[#9a9c96]"}`}>{message.time}</p>
            </div>
          </div>
          {manager && !mine && <button onClick={() => { setOpenMessageId(message.id); setConfirmRemove(false); }} className="dh-focus self-center rounded-full p-1.5 text-[#a9aca4] opacity-0 hover:bg-[#f0eeea] hover:text-[#9b2c25] group-hover:opacity-100" aria-label="Mesajı yönet"><Trash2 size={15} /></button>}
        </div>;
      })}
    </div> : <EmptyState icon={<MessagesSquare size={26} />} title="Henüz topluluk mesajı bulunmuyor." description={manager ? "Danışanlarınız grup içinde yazdıkça mesajlar burada görünecek." : "Toplulukla ilk mesajı sen yaz, arkadaşların da katılsın."} />}

    <div className="sticky bottom-[calc(64px+env(safe-area-inset-bottom))] -mx-5 mt-4 flex flex-col gap-2 border-t border-[#ece9e4] bg-[#fbf9f8]/95 px-5 pb-2 pt-3 backdrop-blur md:-mx-8 md:px-8 lg:static lg:mx-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-4 lg:backdrop-blur-none">
      {isQuietNow ? (
        <p className="flex items-center gap-2 rounded-xl bg-[#f0eeea] px-4 py-3 text-sm text-[#6b6e68]"><MoonStar size={17} className="text-[#2d4f3d]" />Sessiz saatler aktif ({quiet.start}–{quiet.end}). Mesajın sabah gönderilebilir.</p>
      ) : (
        <form onSubmit={(event) => { event.preventDefault(); send(); }} className="flex items-end gap-1.5">
          <Link href="/danisan/topluluk/yeni" className="dh-focus mb-1 shrink-0 rounded-full p-2 text-[#5e625d] hover:text-[#2d4f3d]" aria-label="Fotoğraf paylaş"><Paperclip size={20} /></Link>
          <div className="flex min-h-[46px] flex-1 items-center rounded-3xl bg-[#e7e2d8] px-4 focus-within:bg-white focus-within:ring-1 focus-within:ring-[#2d4f3d]"><input value={draft} onChange={(event) => setDraft(event.target.value)} className="w-full bg-transparent py-2.5 text-[15px] outline-none placeholder:text-[#8b8e87]" placeholder="Gruba mesaj yaz..." aria-label="Gruba mesaj yaz" /></div>
          <button type="submit" className="dh-focus mb-1 shrink-0 rounded-full bg-[#2d4f3d] p-2.5 text-white shadow-md hover:bg-[#163827]" aria-label="Gönder"><Send size={18} /></button>
        </form>
      )}
    </div>

    <Modal open={!!openMessage} onClose={() => { setOpenMessageId(null); setConfirmRemove(false); }} title="Mesajı Yönet">
      {openMessage && <div className="space-y-5">
        <div className="flex items-center gap-3"><Avatar initials={openMessage.initials} tone={openMessage.tone} size="sm" /><div><p className="font-semibold">{openMessage.name}</p><p className="text-xs text-[#757871]">{openMessage.time}</p></div></div>
        <p className="rounded-xl bg-[#f6f4ef] p-4 leading-6 text-[#343734]">&ldquo;{openMessage.text}&rdquo;</p>
        {confirmRemove ? (
          <div className="rounded-xl border border-[#f3c9c3] bg-[#fdf1ef] p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-[#9b2c25]"><AlertTriangle size={18} />Bu mesajı kaldırmak istediğinize emin misiniz?</p>
            <p className="mt-1 text-sm text-[#8a6f6b]">Bu işlem geri alınamaz.</p>
            <div className="mt-4 flex gap-3"><button onClick={() => setConfirmRemove(false)} className="dh-focus flex-1 rounded-xl border border-[#c6c9c3] py-2.5 text-sm font-semibold text-[#383b37]">Vazgeç</button><button onClick={() => removeMessage(openMessage.id)} className="dh-focus flex-1 rounded-xl bg-[#9b2c25] py-2.5 text-sm font-semibold text-white">Evet, Kaldır</button></div>
          </div>
        ) : <button onClick={() => setConfirmRemove(true)} className="dh-focus flex w-full items-center justify-center gap-2 rounded-xl border border-[#e7a29b] py-3 text-sm font-semibold text-[#9b2c25] hover:bg-[#fdf1ef]"><Trash2 size={17} />Mesajı Kaldır</button>}
      </div>}
    </Modal>
  </div>;
}
