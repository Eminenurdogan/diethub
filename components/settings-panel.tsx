"use client";
import { useEffect, useState } from "react";
import { Check, MoonStar } from "lucide-react";
import { Card } from "./ui";
import { DEFAULT_QUIET_HOURS, getQuietHours, setQuietHours as persistQuietHours } from "@/lib/community-settings";

export function SettingsPanel() {
  const [saved, setSaved] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [checkinNotifications, setCheckinNotifications] = useState(true);
  const [quietHours, setQuietHoursEnabled] = useState(DEFAULT_QUIET_HOURS.enabled);
  const [quietStart, setQuietStart] = useState(DEFAULT_QUIET_HOURS.start);
  const [quietEnd, setQuietEnd] = useState(DEFAULT_QUIET_HOURS.end);

  // localStorage sadece tarayıcıda var — diyetisyenin en son kaydettiği ayarı, SSR ile aynı ilk
  // render'ı bozmadan hydration sonrası yüklemek için kasıtlı olarak effect içinde setState kullanılıyor.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const stored = getQuietHours();
    setQuietHoursEnabled(stored.enabled);
    setQuietStart(stored.start);
    setQuietEnd(stored.end);
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  return <form onSubmit={(event) => { event.preventDefault(); persistQuietHours({ enabled: quietHours, start: quietStart, end: quietEnd }); setSaved(true); }} className="space-y-6">
    <Card className="p-6 sm:p-8">
      <h2 className="dh-heading text-2xl font-bold">Profil Bilgileri</h2>
      <p className="mt-1 text-[#686b65]">Diyetisyen profilinizde görünecek bilgiler.</p>
      <div className="mt-6 grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Ad Soyad<input className="dh-input mt-2" defaultValue="Diyetisyen Elif Nur" /></label>
        <label className="text-sm font-semibold">E-posta adresi<input className="dh-input mt-2" defaultValue="elif@diethub.com" type="email" /></label>
        <label className="text-sm font-semibold">Unvan<input className="dh-input mt-2" defaultValue="Uzman Diyetisyen" /></label>
        <label className="text-sm font-semibold">Telefon<input className="dh-input mt-2" defaultValue="+90 555 000 00 00" /></label>
      </div>
      <label className="mt-5 block text-sm font-semibold">Kısa tanıtım<textarea className="dh-textarea mt-2" defaultValue="Danışanlarıma sürdürülebilir ve sakin bir beslenme deneyiminde eşlik ediyorum." /></label>
    </Card>

    <Card className="p-6 sm:p-8">
      <h2 className="dh-heading text-2xl font-bold">Bildirim Tercihleri</h2>
      <div className="mt-5 divide-y divide-[#e5e3de]">
        <Toggle label="E-posta bildirimleri" description="Önemli gelişmeleri e-posta ile al." checked={emailNotifications} onChange={setEmailNotifications} />
        <Toggle label="Check-in bildirimleri" description="Yeni bir check-in gönderildiğinde haber ver." checked={checkinNotifications} onChange={setCheckinNotifications} />
        <Toggle label="Kamp güncellemeleri" description="Kamp akışındaki değişiklikleri hatırlat." checked={true} onChange={() => undefined} />
      </div>
    </Card>

    <Card className="p-6 sm:p-8">
      <h2 className="dh-heading flex items-center gap-2 text-2xl font-bold"><MoonStar size={22} />Topluluk Sessiz Saatleri</h2>
      <p className="mt-1 text-[#686b65]">Danışanlar bu saat aralığında topluluğa mesaj gönderemez; siz değiştirene kadar bu ayar geçerli kalır.</p>
      <label className="mt-5 flex cursor-pointer items-center justify-between gap-5 border-b border-[#e5e3de] py-5">
        <span><span className="block font-semibold">Gece sessiz saatlerini uygula</span><span className="mt-1 block text-sm text-[#6b6e68]">Kapalıyken topluluk 7/24 açık kalır.</span></span>
        <input className="h-5 w-5 accent-[#2d4f3d]" type="checkbox" checked={quietHours} onChange={(event) => setQuietHoursEnabled(event.target.checked)} />
      </label>
      {quietHours && <div className="grid gap-4 pt-5 sm:grid-cols-2">
        <label className="text-sm font-semibold">Başlangıç<input type="time" className="dh-input mt-2" value={quietStart} onChange={(event) => setQuietStart(event.target.value)} /></label>
        <label className="text-sm font-semibold">Bitiş<input type="time" className="dh-input mt-2" value={quietEnd} onChange={(event) => setQuietEnd(event.target.value)} /></label>
        <p className="text-sm text-[#6b6e68] sm:col-span-2">Şu an: her gece <strong className="text-[#163827]">{quietStart}</strong> – <strong className="text-[#163827]">{quietEnd}</strong> arası topluluk mesajlaşması kapalı.</p>
      </div>}
    </Card>

    <Card className="p-6 sm:p-8">
      <h2 className="dh-heading text-2xl font-bold">Görünüm</h2>
      <p className="mt-2 text-[#686b65]">DietHub demo deneyimi açık ve sakin görünümle sunulur.</p>
      <div className="mt-5 flex gap-3">
        <button type="button" className="dh-focus rounded-xl border-2 border-[#2d4f3d] bg-[#fbf9f8] px-5 py-3 font-semibold text-[#163827]">Açık görünüm</button>
        <button type="button" className="dh-focus rounded-xl border border-[#deded9] bg-white px-5 py-3 text-[#747771]">Sistem tercihi</button>
      </div>
    </Card>

    {saved && <p role="status" className="rounded-xl bg-[#e8f2ec] px-5 py-3 font-medium text-[#2d4f3d]">Demo ayarlarınız kaydedildi.</p>}
    <button className="dh-focus inline-flex items-center gap-2 rounded-xl bg-[#2d4f3d] px-6 py-3.5 font-semibold text-white hover:bg-[#163827]"><Check size={18} />Değişiklikleri Kaydet</button>
  </form>;
}
function Toggle({ label, description, checked, onChange }: { label: string; description: string; checked: boolean; onChange: (value: boolean) => void }) { return <label className="flex cursor-pointer items-center justify-between gap-5 py-5"><span><span className="block font-semibold">{label}</span><span className="mt-1 block text-sm text-[#6b6e68]">{description}</span></span><input className="h-5 w-5 accent-[#2d4f3d]" type="checkbox" checked={checked} onChange={(event) => onChange(event.target.checked)} /></label>; }
