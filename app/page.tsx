import Link from "next/link";
import { ArrowRight, CalendarCheck, CheckCircle2, ChefHat, MessageCircleHeart, Sparkles, Users2, UsersRound } from "lucide-react";

const stats = [
  { value: "500+", label: "Diyetisyen" },
  { value: "12.000+", label: "Danışan" },
  { value: "%98", label: "Memnuniyet" },
  { value: "40+", label: "Kamp şablonu" },
];

const features = [
  { icon: Users2, title: "Danışan Takibi", description: "Tüm danışanlarını, programlarını ve ilerlemelerini tek ekrandan izle." },
  { icon: CalendarCheck, title: "Kamp Yönetimi", description: "Günlük öğün planlarını oluştur, danışanlarına birlikte kamp deneyimi sun." },
  { icon: ChefHat, title: "Tarif Kütüphanesi", description: "Kendi tariflerini oluştur, danışanlarınla paylaş, kategorilere ayır." },
  { icon: MessageCircleHeart, title: "Mesajlaşma", description: "Danışanlarınla check-in üzerinden sakin ve düzenli bir iletişim kur." },
];

export default function Home() {
  return <main className="relative min-h-screen overflow-hidden bg-[#fbf9f8]">
    {/* Dekoratif mesh gradient — sadece hero bölgesini yumuşak bir renk dokusuyla besliyor */}
    <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden">
      <div className="absolute -left-40 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,_#c5ecd3_0%,_transparent_70%)] opacity-70 blur-2xl" />
      <div className="absolute -right-32 top-10 h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,_#e7c99a_0%,_transparent_70%)] opacity-40 blur-3xl" />
      <div className="absolute left-1/3 top-64 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,_#2d4f3d_0%,_transparent_70%)] opacity-[.06] blur-3xl" />
    </div>

    <div className="px-5 sm:px-8 lg:px-12">
      <header className="mx-auto flex max-w-[1320px] items-center justify-between py-6">
        <Link className="dh-heading text-3xl font-bold sm:text-4xl" href="/">DietHub</Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold text-[#4f524d] md:flex">
          <a className="dh-focus rounded-md hover:text-[#163827]" href="#ozellikler">Özellikler</a>
          <a className="dh-focus rounded-md hover:text-[#163827]" href="#nasil-calisir">Nasıl çalışır</a>
        </nav>
        <Link href="/giris" className="dh-focus rounded-xl border border-[#163827] px-4 py-2 text-sm font-semibold text-[#163827] hover:bg-[#e8f2ec]">Demo girişi</Link>
      </header>

      <section className="mx-auto grid max-w-[1320px] items-center gap-12 py-10 lg:grid-cols-[1.05fr_.95fr] lg:py-20">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f2ec] px-3 py-1.5 text-sm font-semibold text-[#2d4f3d] shadow-[0_1px_0_rgba(45,79,61,.08)]"><Sparkles size={16} />Diyetisyenler için profesyonel alan</span>
          <h1 className="dh-heading mt-6 text-5xl font-bold leading-[1.03] sm:text-6xl lg:text-[5.2rem] lg:leading-[1.02]">
            Beslenme takibini <span className="bg-gradient-to-r from-[#2d4f3d] via-[#3d6b52] to-[#b98a4e] bg-clip-text text-transparent">tek ve sakin</span> bir deneyimde yönetin.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5e625d]">Danışanlarınızı, programlarınızı, kamplarınızı ve iletişimi DietHub&apos;ın demo deneyiminde bir arada görün.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/giris/diyetisyen" className="dh-focus group inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-6 py-3.5 font-semibold text-white shadow-[0_10px_30px_-8px_rgba(45,79,61,.55)] transition hover:-translate-y-0.5 hover:bg-[#163827] hover:shadow-[0_14px_34px_-8px_rgba(45,79,61,.6)]">Diyetisyen olarak devam et <ArrowRight size={19} className="transition group-hover:translate-x-0.5" /></Link>
            <Link href="/giris/danisan" className="dh-focus inline-flex items-center justify-center rounded-xl bg-[#e7e2d8] px-6 py-3.5 font-semibold text-[#163827] transition hover:-translate-y-0.5 hover:bg-[#ddd6c9]">Danışan olarak devam et</Link>
          </div>
          <p className="mt-4 text-sm text-[#8a8d86]">Bu alan yalnızca örnek verilerle çalışan bir frontend demosudur.</p>

          <dl className="mt-12 grid grid-cols-2 gap-6 border-t border-[#e7e5df] pt-8 sm:grid-cols-4">
            {stats.map((stat) => <div key={stat.label}><dt className="sr-only">{stat.label}</dt><dd className="dh-heading text-2xl font-bold sm:text-3xl">{stat.value}</dd><p className="mt-1 text-xs font-semibold uppercase tracking-[.08em] text-[#8a8d86]">{stat.label}</p></div>)}
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -right-10 top-8 h-44 w-44 rounded-full bg-[#c5ecd3]/70 blur-md" />
          <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#e7c99a]/50 blur-md" />
          <div className="dh-card-elevated relative overflow-hidden p-5 transition duration-500 hover:-translate-y-1 sm:p-7">
            <div className="rounded-[20px] bg-gradient-to-br from-[#2d4f3d] to-[#1b3527] p-6 text-white">
              <p className="text-xs font-bold uppercase tracking-[.12em] text-[#c5ecd3]">Bugünün özeti</p>
              <h2 className="mt-3 font-[family-name:var(--font-heading)] text-3xl font-bold">Her adım yerli yerinde.</h2>
              <div className="mt-7 h-2 overflow-hidden rounded-full bg-white/20"><div className="h-full w-[72%] rounded-full bg-[#c5ecd3]" /></div>
              <div className="mt-2 flex justify-between text-sm text-white/80"><span>Günlük ilerleme</span><span>%72</span></div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <Metric icon={<UsersRound size={21} />} label="Aktif danışan" value="48" />
              <Metric icon={<CheckCircle2 size={21} />} label="Bekleyen check-in" value="7" />
            </div>
            <div className="mt-5 rounded-2xl border border-[#ebe8e2] p-4"><div className="flex items-center gap-3"><span className="rounded-full bg-[#e8f2ec] p-2 text-[#2d4f3d]"><MessageCircleHeart size={20} /></span><div><p className="font-semibold">Ayşe&apos;den yeni mesaj</p><p className="mt-0.5 text-sm text-[#6c706a]">Programı tamamladığını paylaştı.</p></div></div></div>
          </div>
          {/* Yüzen küçük onay kartı — derinlik hissi için */}
          <div className="dh-card-elevated absolute -bottom-6 -right-4 hidden w-48 -rotate-3 items-center gap-3 p-3.5 sm:flex">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#c5ecd3] text-[#163827]"><CheckCircle2 size={18} /></span>
            <div><p className="text-xs font-semibold leading-tight">Check-in tamamlandı</p><p className="text-[11px] text-[#8a8d86]">Zeynep K.</p></div>
          </div>
        </div>
      </section>

      <section id="ozellikler" className="mx-auto max-w-[1320px] py-16 sm:py-24">
        <div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.14em] text-[#b98a4e]">Neler sunuyor</p><h2 className="dh-heading mt-3 text-3xl font-bold sm:text-4xl">Dağınık araçlar yerine tek bir sakin alan.</h2></div>
        <div id="nasil-calisir" className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, description }) => <div key={title} className="dh-card group p-6 transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_-14px_rgba(45,79,61,.25)]">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e8f2ec] text-[#2d4f3d] transition group-hover:bg-[#2d4f3d] group-hover:text-white"><Icon size={22} /></span>
            <h3 className="dh-heading mt-5 text-lg font-bold">{title}</h3>
            <p className="mt-2 text-sm leading-6 text-[#6b6e68]">{description}</p>
          </div>)}
        </div>
      </section>

      <footer className="mx-auto max-w-[1320px] border-t border-[#e7e5df] py-10">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link className="dh-heading text-2xl font-bold" href="/">DietHub</Link>
          <p className="text-center text-sm text-[#8a8d86] sm:text-right">Bu alan yalnızca örnek verilerle çalışan bir frontend demosudur. Gerçek hesap veya sağlık verisi içermez.</p>
        </div>
      </footer>
    </div>
  </main>;
}

function Metric({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="rounded-2xl bg-[#f7f5f0] p-4"><span className="text-[#2d4f3d]">{icon}</span><p className="dh-heading mt-3 text-2xl font-bold">{value}</p><p className="mt-0.5 text-sm text-[#656761]">{label}</p></div>; }
