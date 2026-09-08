/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { ArrowLeft, CalendarDays, Camera, Check, CheckCircle2, Droplet, Moon, Quote, Send, Sun, Utensils } from "lucide-react";
import { clients } from "@/data/demo";
import { Card, PageHeader } from "@/components/ui";
import { DietitianNoteCard, HistoryButton } from "@/components/checkin-detail-actions";

const todaysMeals = [
  { time: "08:00", label: "Kahvaltı", title: "Badem Unlu Pankek" },
  { time: "15:30", label: "Ara Öğün", title: "Yaban Mersini & Badem" },
  { time: "19:00", label: "Akşam", title: "Fırın Balık & Yeşillikli Salata" },
];
const mealPhotos = [
  { icon: Sun, label: "Kahvaltı (08:42)", src: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=600&q=80" },
  { icon: Moon, label: "Akşam (19:35)", src: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=600&q=80" },
];
const statusCards = [
  { icon: Utensils, label: "Program", value: "Tamamlandı" },
  { icon: Droplet, label: "Su (2.5L)", value: "Tamamlandı" },
  { icon: Camera, label: "Fotoğraf", value: "Gönderildi" },
  { icon: CheckCircle2, label: "Check-in", value: "Tamamlandı" },
];

export default async function CheckinDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const client = clients.find((item) => item.id === id) ?? clients[0];
  return <>
    <Link href="/diyetisyen/checkinler" className="dh-focus mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><ArrowLeft size={17} />Check-in Listesine Dön</Link>
    <PageHeader title={client.name} action={<HistoryButton clientName={client.name} />} />
    <p className="-mt-6 mb-8 flex items-center gap-2 text-[#5e625c]"><CalendarDays size={18} />Bugün · {client.day}</p>

    <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
      {statusCards.map(({ icon: Icon, label, value }) => <Card key={label} className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#c5ecd3] text-[#2d4f3d]"><Icon size={19} /></span><CheckCircle2 size={20} className="text-[#2d4f3d]" /></div>
        <div><p className="text-xs font-bold uppercase tracking-[.1em] text-[#73766f]">{label}</p><p className="dh-heading mt-1 text-lg font-bold">{value}</p></div>
      </Card>)}
    </div>

    <div className="mt-6 grid gap-6 lg:grid-cols-3">
      <div className="space-y-6 lg:col-span-2">
        <Card className="p-6">
          <h3 className="dh-heading border-b border-[#e7e5e0] pb-3 text-xl font-bold">Günün Programı</h3>
          <div className="mt-5 flex flex-col gap-5">
            {todaysMeals.map((meal) => <div key={meal.label} className="flex items-start gap-4"><div className="flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-xl bg-[#f0eeea]"><span className="text-xs font-semibold text-[#6b6e68]">{meal.time}</span></div>
              <div className="flex-1"><div className="flex items-start justify-between gap-3"><h4 className="font-semibold">{meal.label}</h4><span className="inline-flex items-center gap-1 rounded-full bg-[#c5ecd3] px-2.5 py-1 text-xs font-semibold text-[#163827]"><Check size={13} />Tamamlandı</span></div><p className="mt-1 text-[#5e625c]">{meal.title}</p></div>
            </div>)}
          </div>
        </Card>
        <Card className="p-6">
          <h3 className="dh-heading border-b border-[#e7e5e0] pb-3 text-xl font-bold">Öğün Fotoğrafları</h3>
          <div className="mt-5 grid grid-cols-2 gap-3">
            {mealPhotos.map(({ icon: Icon, label, src }) => <div key={label} className="group relative overflow-hidden rounded-xl"><img src={src} alt={`${label} örnek öğün fotoğrafı`} className="aspect-square w-full object-cover" /><span className="absolute bottom-2 left-2 inline-flex items-center gap-1 rounded-md bg-white/90 px-2 py-1 text-xs font-semibold backdrop-blur-sm"><Icon size={13} />{label}</span></div>)}
          </div>
        </Card>
      </div>
      <div className="flex flex-col gap-6">
        <Card className="border border-[#e7e2d8] bg-[#f6f4ee] p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold text-[#163827]"><Quote size={17} />Danışanın Notu</h3>
          <p className="mt-3 italic text-[#5c6058]">&ldquo;Bugün ara öğünü biraz geç yaptım ama programı tamamladım.&rdquo;</p>
        </Card>
        <DietitianNoteCard />
        <Link href="/diyetisyen/mesajlar" className="dh-focus flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-4 font-semibold text-white shadow-sm hover:bg-[#163827]"><Send size={19} />Danışana Mesaj Gönder</Link>
      </div>
    </div>
  </>;
}
