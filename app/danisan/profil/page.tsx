"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { Bell, ChevronRight, LogOut, Save, ShieldCheck } from "lucide-react";
import { Avatar, Card, PageHeader } from "@/components/ui";
import { Modal } from "@/components/modal";

export default function ClientProfilePage() {
  const [saved, setSaved] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const nameInputRef = useRef<HTMLInputElement>(null);

  return <>
    <PageHeader title="Profil ve Ayarlar" description="Kişisel bilgilerini ve tercihlerini yönet." />
    <div className="mx-auto max-w-2xl space-y-5">
      <Card className="flex items-center gap-4 p-5">
        <Avatar initials="E" size="lg" />
        <div className="flex-1"><h2 className="dh-heading text-xl font-bold">Emine Yılmaz</h2><p className="mt-1 text-[#696c66]">21 Günlük Beslenme Kampı</p></div>
        <button onClick={() => nameInputRef.current?.focus()} className="dh-focus rounded-xl bg-[#e7e2d8] px-4 py-2.5 text-sm font-semibold text-[#163827] hover:bg-[#ddd6c9]">Düzenle</button>
      </Card>
      <form onSubmit={(event) => { event.preventDefault(); setSaved(true); }}>
        <Card className="p-5">
          <h2 className="dh-heading text-xl font-bold">Kişisel Bilgiler</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <label className="text-sm font-semibold">Ad Soyad<input ref={nameInputRef} className="dh-input mt-2" defaultValue="Emine Yılmaz" /></label>
            <label className="text-sm font-semibold">E-posta<input className="dh-input mt-2" defaultValue="emine@ornek.com" /></label>
          </div>
          {saved && <p className="mt-4 rounded-xl bg-[#e8f2ec] px-4 py-3 text-sm font-medium text-[#2d4f3d]">Profil bilgilerin demo olarak kaydedildi.</p>}
          <button className="dh-focus mt-5 inline-flex items-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3 font-semibold text-white hover:bg-[#163827]"><Save size={18} />Kaydet</button>
        </Card>
      </form>
      <Card className="overflow-hidden">
        <Link href="/danisan/bildirimler" className="dh-focus flex items-center gap-3 border-b border-[#e7e5e0] p-5"><Bell size={20} className="text-[#2d4f3d]" /><span className="flex-1 font-semibold">Bildirim tercihleri</span><ChevronRight size={18} /></Link>
        <button onClick={() => setPrivacyOpen(true)} className="dh-focus flex w-full items-center gap-3 border-b border-[#e7e5e0] p-5 text-left"><ShieldCheck size={20} className="text-[#2d4f3d]" /><span className="flex-1 font-semibold">Gizlilik ve güvenlik</span><ChevronRight size={18} /></button>
        <Link href="/" className="dh-focus flex items-center gap-3 p-5 text-[#9b2c25]"><LogOut size={20} /><span className="font-semibold">Demo alanından çık</span></Link>
      </Card>
    </div>
    <Modal open={privacyOpen} onClose={() => setPrivacyOpen(false)} title="Gizlilik ve Güvenlik">
      <div className="space-y-4 text-[#5e625d]">
        <p>Bu, gerçek verilerle çalışmayan bir frontend demosudur. Herhangi bir sağlık veya kimlik verisi saklanmaz.</p>
        <p>Gerçek üründe burada iki adımlı doğrulama, oturum yönetimi ve veri indirme/silme talepleri yer alacaktır.</p>
        <button onClick={() => setPrivacyOpen(false)} className="dh-focus mt-2 w-full rounded-xl bg-[#2d4f3d] py-3 font-semibold text-white hover:bg-[#163827]">Anladım</button>
      </div>
    </Modal>
  </>;
}
