import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, ShieldCheck, Sparkles, LockKeyhole } from "lucide-react";

export function LoginScreen({ role }: { role: "diyetisyen" | "danisan" }) {
  const isDietitian = role === "diyetisyen";
  const target = isDietitian ? "/diyetisyen" : "/danisan";
  const title = isDietitian ? "Profesyonel alanınıza hoş geldiniz." : "Kişisel alanınıza hoş geldiniz.";
  const otherRoleHref = isDietitian ? "/giris/danisan" : "/giris/diyetisyen";
  const otherRoleLabel = isDietitian ? "Danışan olarak giriş yap" : "Diyetisyen olarak giriş yap";

  return <main className="grid min-h-screen bg-[#fbf9f8] lg:grid-cols-2">
    <section className="relative flex flex-col justify-between overflow-hidden bg-gradient-to-br from-[#2d4f3d] via-[#23422f] to-[#152a1e] p-7 text-white sm:p-12">
      <div className="pointer-events-none absolute inset-0 opacity-[.08] [background-image:radial-gradient(circle,_#ffffff_1px,_transparent_1px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e7c99a] opacity-20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 -left-16 h-64 w-64 rounded-full bg-[#c5ecd3] opacity-20 blur-3xl" />

      <Link href="/" className="dh-focus relative font-[family-name:var(--font-heading)] text-4xl font-bold">DietHub</Link>

      <div className="relative max-w-md py-14">
        <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-sm font-semibold backdrop-blur-sm"><Sparkles size={15} />Demo deneyimi</span>
        <h1 className="mt-6 font-[family-name:var(--font-heading)] text-4xl font-bold leading-tight sm:text-5xl">{isDietitian ? "İyi takip, güçlü danışan ilişkileriyle başlar." : "Kendi ritminizde, daha düzenli günler."}</h1>
        <div className="mt-10 space-y-4 text-white/85">
          <Feature text="Örnek verilerle keşfedebileceğiniz çalışan arayüz" />
          <Feature text="Program, tarif, mesaj ve check-in akışları" />
          <Feature text="Gerçek hesap ve sağlık verisi içermez" />
        </div>

        <div className="mt-10 flex -rotate-2 items-center gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 shadow-[0_20px_50px_-20px_rgba(0,0,0,.5)] backdrop-blur-md">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#c5ecd3] text-[#163827]"><ShieldCheck size={19} /></span>
          <div><p className="text-sm font-semibold leading-tight">Verilerin güvende</p><p className="text-xs text-white/65">Demo ortamında hiçbir bilgi saklanmaz.</p></div>
        </div>
      </div>

      <p className="relative text-sm text-white/65">DietHub frontend ürün demosu</p>
    </section>

    <section className="mx-auto flex w-full max-w-xl items-center px-5 py-12 sm:px-10">
      <div className="w-full">
        <Link href="/" className="dh-focus text-sm font-semibold text-[#2d4f3d]">← Ana sayfaya dön</Link>
        <div className="dh-card-elevated mt-8 p-7 sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[.12em] text-[#73766f]">{isDietitian ? "Diyetisyen girişi" : "Danışan girişi"}</p>
          <h2 className="dh-heading mt-3 text-4xl font-bold">{title}</h2>
          <p className="mt-3 text-[#666963]">Bu demo için bilgilerinizi girmeniz gerekmiyor. İsterseniz alanları deneyip doğrudan devam edebilirsiniz.</p>
          <form className="mt-8 space-y-5" action={target}>
            <label className="block text-sm font-semibold">E-posta adresi<div className="relative mt-2"><input className="dh-input pl-12" type="email" placeholder="ornek@diethub.com" /><Mail className="absolute left-4 top-3.5 text-[#8a8d86]" size={18} /></div></label>
            <label className="block text-sm font-semibold">Şifre<div className="relative mt-2"><input className="dh-input pl-12 pr-4" type="password" placeholder="••••••••" /><LockKeyhole className="absolute left-4 top-3.5 text-[#8a8d86]" size={18} /></div></label>
            <button className="dh-focus flex w-full items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-5 py-3.5 font-semibold text-white shadow-[0_10px_26px_-10px_rgba(45,79,61,.6)] transition hover:-translate-y-0.5 hover:bg-[#163827]" type="submit">Demo olarak devam et <ArrowRight size={19} /></button>
          </form>
        </div>
        <p className="mt-6 text-center text-sm text-[#6e716b]">Bu demo ekranında gerçek kimlik doğrulama yapılmaz.</p>
        <Link href={otherRoleHref} className="dh-focus mt-3 block text-center text-sm font-semibold text-[#2d4f3d] hover:underline">{otherRoleLabel}</Link>
      </div>
    </section>
  </main>;
}
function Feature({ text }: { text: string }) { return <p className="flex gap-3"><CheckCircle2 className="mt-0.5 shrink-0 text-[#c5ecd3]" size={20} />{text}</p>; }
