import Link from "next/link";
import { CalendarDays, CheckCircle2, ClipboardCheck, MessageCircle, Plus, Salad, Users } from "lucide-react";
import { camps, clients } from "@/data/demo";
import { Avatar, Badge, Card, PageHeader, ProgressBar, SectionTitle } from "@/components/ui";

const metrics = [
  { label: "Aktif danışan", value: "48", icon: Users, tone: "bg-[#c5ecd3] text-[#2d4f3d]" },
  { label: "Aktif kamp", value: "3", icon: CalendarDays, tone: "bg-[#e7e2d8] text-[#615e57]" },
  { label: "Bugün check-in yapan", value: "35", icon: ClipboardCheck, tone: "bg-[#c5ecd3] text-[#2d4f3d]" },
  { label: "Bekleyen mesaj", value: "7", icon: MessageCircle, tone: "bg-[#f9d7d3] text-[#8d4136]" },
];

export default function DietitianDashboard() {
  return <><PageHeader eyebrow="24 Ekim 2023, Salı" title="Merhaba, Diyetisyen Elif Nur" description="Bugün danışanlarının durumuna göz at." />
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{metrics.map(({ label, value, icon: Icon, tone }) => <Card key={label} className="flex items-center gap-4 p-5"><span className={`rounded-full p-3 ${tone}`}><Icon size={24} /></span><div><p className="dh-heading text-3xl font-bold">{value}</p><p className="text-sm text-[#565a54]">{label}</p></div></Card>)}</section>
    <section className="mt-8 grid gap-7 xl:grid-cols-[minmax(0,1.65fr)_360px]"><div className="space-y-7"><Card className="p-6 sm:p-8"><SectionTitle title="Kamplarım" href="/diyetisyen/kamplar" />{camps.slice(0, 1).map((camp) => <div key={camp.id} className="rounded-xl border border-[#e0ded9] p-5"><div className="flex flex-wrap items-start justify-between gap-4"><div><h3 className="text-lg font-semibold">{camp.name}</h3><p className="mt-1 flex items-center gap-2 text-sm text-[#676a65]"><Users size={16} />{camp.participants} danışan</p></div><Badge tone="success">{camp.status}</Badge></div><div className="mt-6"><ProgressBar value={camp.progress} label="İlerleme: 7/21 gün" /></div><div className="mt-5 flex justify-end"><Link href={`/diyetisyen/kamplar/${camp.id}`} className="dh-focus rounded-xl bg-[#e7e2d8] px-5 py-2.5 text-sm font-semibold text-[#163827] hover:bg-[#ddd6c9]">Kampı Yönet</Link></div></div>)}</Card>
      <Card className="p-6 sm:p-8"><SectionTitle title="Bugünkü Aktivite" href="/diyetisyen/danisanlar" /> <div className="divide-y divide-[#e6e4df]">{clients.slice(0, 3).map((client, i) => <div key={client.id} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0"><Avatar initials={client.initials} tone={client.tone} size="sm" /><div className="min-w-0 flex-1"><p className="font-medium">{client.name} {i === 0 ? "günlük programını tamamladı." : i === 1 ? "öğün fotoğrafı gönderdi." : "yeni mesaj gönderdi."}</p><p className="mt-0.5 text-sm text-[#72756f]">{i === 0 ? "10 dk önce" : i === 1 ? "25 dk önce" : "1 saat önce"}</p></div>{i === 0 ? <CheckCircle2 className="text-[#2d4f3d]" size={23} /> : i === 1 ? <Salad className="text-[#2d4f3d]" size={23} /> : <MessageCircle className="text-[#b3aea4]" size={23} />}</div>)}</div></Card></div>
      <Card className="h-fit p-6"><SectionTitle title="Hızlı İşlemler" /> <div className="space-y-3"><QuickLink href="/diyetisyen/kamplar/yeni" label="Yeni Kamp" icon={<CalendarDays size={20} />} /><QuickLink href="/diyetisyen/tarifler/yeni" label="Tarif Ekle" icon={<Salad size={20} />} /><QuickLink href="/diyetisyen/danisanlar" label="Danışan Ekle" icon={<Users size={20} />} /><Link href="/diyetisyen/mesajlar" className="dh-focus mt-3 flex items-center justify-center gap-2 rounded-xl border border-[#2d4f3d] px-4 py-3.5 font-semibold text-[#163827] hover:bg-[#e8f2ec]"><MessageCircle size={20} />Mesajları Gör</Link></div></Card>
    </section></>;
}
function QuickLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) { return <Link href={href} className="dh-focus flex items-center gap-3 rounded-xl bg-[#e7e2d8] px-4 py-4 font-semibold text-[#163827] hover:bg-[#ddd6c9]"><Plus size={18} />{icon}<span>{label}</span></Link>; }
