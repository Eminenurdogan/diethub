"use client";
import { useState } from "react";
import { Camera, CirclePlus, FileText, Send } from "lucide-react";

type ChatMessage = { id: number; text: string; mine: boolean; time: string; file?: string };
const initialMessages: ChatMessage[] = [
  { id: 1, text: "Merhaba Emine! Dünkü besin günlüğünü inceledim. Öğünlerin harika görünüyor, özellikle akşam yemeğindeki protein dengesi çok iyi.", mine: false, time: "09:41" },
  { id: 2, text: "Su tüketimini nasıl hissediyorsun? Havalar ısındıkça biraz daha artırmamız gerekebilir.", mine: false, time: "09:42" },
  { id: 3, text: "Teşekkür ederim Elif Hanım! Su içmeyi bazen çalışırken unutuyorum maalesef. Dün 1.5 litrede kaldım.", mine: true, time: "10:15" },
  { id: 4, text: "Telefonuma hatırlatıcı kurmayı deneyeceğim bugün.", mine: true, time: "10:16" },
  { id: 5, text: "Harika bir fikir. Bu arada, geçen haftaki kan tahlili sonuçların çıkmış olmalı. Buradan fotoğrafını veya PDF olarak yükleyebilir misin?", mine: false, time: "10:30" },
  { id: 6, text: "", mine: true, time: "11:05", file: "Tahlil_Sonuclari_Ekim.pdf" },
];
const quickReplies = ["👍 Tamamdır", "Şimdi gönderiyorum", "Teşekkürler"];

export function ClientChat() {
  const [messages, setMessages] = useState(initialMessages);
  const [draft, setDraft] = useState("");
  const send = (text: string) => {
    if (!text.trim()) return;
    setMessages((items) => [...items, { id: items.length + 1, text: text.trim(), mine: true, time: "Şimdi" }]);
    setDraft("");
  };
  return <div className="flex flex-col">
    <div className="flex flex-col gap-4 pb-3">
      <div className="flex justify-center"><span className="rounded-full bg-[#f0eeea] px-3 py-1 text-xs font-semibold text-[#8b8e87]">Bugün</span></div>
      {messages.map((message) => <div key={message.id} className={`flex flex-col gap-1 ${message.mine ? "items-end self-end" : "items-start"} max-w-[85%]`}>
        {message.file ? (
          <div className="flex items-center gap-3 rounded-2xl rounded-tr-sm bg-[#2d4f3d] py-1.5 pl-1.5 pr-4 text-white shadow-sm">
            <span className="rounded-xl bg-white/20 p-3"><FileText size={20} /></span>
            <div className="flex flex-col"><span className="max-w-[150px] truncate text-sm font-semibold">{message.file}</span><span className="text-xs text-white/75">1.2 MB</span></div>
          </div>
        ) : (
          <div className={`rounded-2xl px-4 py-3 shadow-sm ${message.mine ? "rounded-tr-sm bg-[#2d4f3d] text-white" : "rounded-tl-sm bg-[#eae8e7] text-[#1b1c1c]"}`}><p>{message.text}</p></div>
        )}
        <span className={`text-xs text-[#8b8e87] ${message.mine ? "mr-1" : "ml-1"}`}>{message.time}</span>
      </div>)}
    </div>

    <div className="sticky bottom-[calc(64px+env(safe-area-inset-bottom))] -mx-5 mt-3 flex flex-col gap-2 border-t border-[#ece9e4] bg-[#fbf9f8]/95 px-5 pb-2 pt-2 backdrop-blur md:-mx-8 md:px-8 lg:static lg:mx-0 lg:border-t-0 lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-4 lg:backdrop-blur-none">
      <div className="dh-scrollbar flex gap-2 overflow-x-auto pb-1">{quickReplies.map((reply) => <button key={reply} onClick={() => send(reply)} className="dh-focus whitespace-nowrap rounded-full border border-[#d8d9d4] px-4 py-1.5 text-sm font-medium text-[#5e625d] hover:bg-[#f0eeea]">{reply}</button>)}</div>
      <form onSubmit={(event) => { event.preventDefault(); send(draft); }} className="flex items-end gap-1.5">
        <button type="button" className="dh-focus mb-1 shrink-0 rounded-full p-2 text-[#5e625d] hover:text-[#2d4f3d]" aria-label="Dosya ekle"><CirclePlus size={21} /></button>
        <button type="button" className="dh-focus mb-1 hidden shrink-0 rounded-full p-2 text-[#5e625d] hover:text-[#2d4f3d] sm:inline-flex" aria-label="Fotoğraf çek"><Camera size={21} /></button>
        <div className="flex min-h-[48px] flex-1 items-center rounded-3xl bg-[#e7e2d8] px-4 focus-within:bg-white focus-within:ring-1 focus-within:ring-[#2d4f3d]">
          <input value={draft} onChange={(event) => setDraft(event.target.value)} className="w-full bg-transparent py-3 text-[15px] outline-none placeholder:text-[#8b8e87]" placeholder="Mesaj yazın..." aria-label="Mesajınız" />
        </div>
        <button type="submit" className="dh-focus mb-1 shrink-0 rounded-full bg-[#2d4f3d] p-3 text-white shadow-md hover:bg-[#163827]" aria-label="Mesaj gönder"><Send size={19} /></button>
      </form>
    </div>
  </div>;
}
