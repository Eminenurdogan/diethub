"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useState } from "react";
import { ArrowLeft, Bell, BookOpen, CalendarCheck, ChevronDown, ClipboardCheck, CookingPot, Home, LayoutDashboard, Menu, MessageCircle, Phone, Plus, Settings, Users, Video, X } from "lucide-react";
import { Avatar } from "./ui";
import { NewClientModal } from "./new-client-modal";

type NavItem = { href: string; label: string; icon: typeof LayoutDashboard };
const dietitianNav: NavItem[] = [
  { href: "/diyetisyen", label: "Genel Bakış", icon: LayoutDashboard },
  { href: "/diyetisyen/danisanlar", label: "Danışanlar", icon: Users },
  { href: "/diyetisyen/kamplar", label: "Kamplar", icon: CalendarCheck },
  { href: "/diyetisyen/tarifler", label: "Tarifler", icon: CookingPot },
  { href: "/diyetisyen/topluluk", label: "Topluluk", icon: MessageCircle },
  { href: "/diyetisyen/mesajlar", label: "Mesajlar", icon: MessageCircle },
  { href: "/diyetisyen/checkinler", label: "Check-inler", icon: ClipboardCheck },
];

function isCurrentPath(pathname: string, href: string) { return href === "/diyetisyen" ? pathname === href : pathname.startsWith(href); }
function DietitianNavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return <>{dietitianNav.map(({ href, label, icon: Icon }) => <Link key={href} onClick={onNavigate} href={href} className={`dh-focus flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium transition ${isCurrentPath(pathname, href) ? "border-r-4 border-[#163827] bg-[#e7e2d8] text-[#163827]" : "text-[#5e605b] hover:bg-[#f3f0ea]"}`}><Icon size={21} strokeWidth={1.9} />{label}</Link>)}</>;
}

export function DietitianShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="min-h-screen bg-[#fbf9f8] lg:flex">
    <aside className="hidden w-[280px] shrink-0 flex-col border-r border-[#ece9e4] bg-white px-5 py-8 lg:fixed lg:inset-y-0 lg:left-0 lg:flex"><Link href="/diyetisyen" className="dh-focus dh-heading px-2 text-[44px] font-bold leading-none">DietHub</Link><p className="mt-14 px-2 text-xs font-bold uppercase tracking-[.12em] text-[#66665f]">Profesyonel alan</p><nav className="mt-5 flex flex-1 flex-col gap-1.5" aria-label="Diyetisyen menüsü"><DietitianNavLinks pathname={pathname} /><div className="mt-auto border-t border-[#e5e3de] pt-4"><Link href="/diyetisyen/bildirimler" className={`dh-focus flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium ${isCurrentPath(pathname, "/diyetisyen/bildirimler") ? "bg-[#e7e2d8] text-[#163827]" : "text-[#5e605b] hover:bg-[#f3f0ea]"}`}><Bell size={21} />Bildirimler</Link><Link href="/diyetisyen/ayarlar" className={`dh-focus flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium ${isCurrentPath(pathname, "/diyetisyen/ayarlar") ? "bg-[#e7e2d8] text-[#163827]" : "text-[#5e605b] hover:bg-[#f3f0ea]"}`}><Settings size={21} />Ayarlar</Link></div></nav><div className="mt-5"><NewClientModal variant="sidebar" /></div></aside>
    {menuOpen && <div className="fixed inset-0 z-50 bg-[#163827]/30 lg:hidden"><aside className="h-full w-[min(320px,85vw)] overflow-y-auto bg-white p-5 shadow-xl"><div className="flex items-center justify-between"><Link onClick={() => setMenuOpen(false)} href="/diyetisyen" className="dh-heading text-3xl font-bold">DietHub</Link><button onClick={() => setMenuOpen(false)} className="dh-focus rounded-lg p-2" aria-label="Menüyü kapat"><X size={23} /></button></div><p className="mt-10 text-xs font-bold uppercase tracking-[.12em] text-[#66665f]">Profesyonel alan</p><nav className="mt-4 flex flex-col gap-1.5" aria-label="Diyetisyen mobil menüsü"><DietitianNavLinks pathname={pathname} onNavigate={() => setMenuOpen(false)} /><div className="mt-3 border-t border-[#e5e3de] pt-3"><Link onClick={() => setMenuOpen(false)} href="/diyetisyen/bildirimler" className="dh-focus flex items-center gap-4 rounded-xl px-4 py-3 font-medium text-[#5e605b]"><Bell size={21} />Bildirimler</Link><Link onClick={() => setMenuOpen(false)} href="/diyetisyen/ayarlar" className="dh-focus flex items-center gap-4 rounded-xl px-4 py-3 font-medium text-[#5e605b]"><Settings size={21} />Ayarlar</Link></div><div className="mt-4"><NewClientModal variant="sidebar" /></div></nav></aside></div>}
    <div className="min-w-0 flex-1 lg:ml-[280px]"><header className="sticky top-0 z-20 flex h-[76px] items-center justify-between border-b border-[#efede9] bg-[#fbf9f8]/95 px-5 backdrop-blur sm:px-8 lg:h-[110px] lg:px-16"><button onClick={() => setMenuOpen(true)} className="dh-focus rounded-lg p-2 text-[#163827] lg:hidden" aria-label="Menüyü aç"><Menu size={24} /></button><div className="hidden w-full max-w-[480px] items-center gap-3 rounded-full border border-[#e0dfda] bg-[#f8f6f2] px-5 py-3 lg:flex"><Menu size={20} className="text-[#747771]" /><input aria-label="Genel arama" className="w-full bg-transparent outline-none placeholder:text-[#b0b2ac]" placeholder="Danışan, kamp veya tarif ara..." /></div><div className="ml-auto flex items-center gap-4"><Link className="dh-focus rounded-full p-2 text-[#163827] hover:bg-[#f0ede7]" href="/diyetisyen/bildirimler" aria-label="Bildirimler"><Bell size={21} /></Link><Link href="/diyetisyen/ayarlar" className="dh-focus flex items-center gap-2" aria-label="Profil ve ayarlar"><Avatar initials="EN" size="sm" /><ChevronDown size={15} className="hidden text-[#71736e] sm:block" /></Link></div></header><main className="mx-auto w-full max-w-[1480px] px-5 py-7 sm:px-8 lg:px-16 lg:py-12">{children}</main></div>
  </div>;
}

const clientNav: NavItem[] = [{ href: "/danisan", label: "Ana Sayfa", icon: Home }, { href: "/danisan/programim", label: "Programım", icon: CalendarCheck }, { href: "/danisan/tarifler", label: "Tarifler", icon: CookingPot }, { href: "/danisan/kampim", label: "Kamp", icon: BookOpen }, { href: "/danisan/topluluk", label: "Topluluk", icon: Users }, { href: "/danisan/mesajlar", label: "Mesajlar", icon: MessageCircle }];
function ClientNavLinks({ pathname, onNavigate }: { pathname: string; onNavigate?: () => void }) {
  return <>{clientNav.map(({ href, label, icon: Icon }) => { const active = href === "/danisan" ? pathname === href : pathname.startsWith(href); return <Link key={href} onClick={onNavigate} href={href} className={`dh-focus flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium transition ${active ? "border-r-4 border-[#163827] bg-[#e7e2d8] text-[#163827]" : "text-[#5e605b] hover:bg-[#f3f0ea]"}`}><Icon size={21} strokeWidth={active ? 2.2 : 1.8} />{label}</Link>; })}</>;
}
function ChatHeader() { return <div className="mx-auto flex max-w-[1180px] items-center justify-between gap-3 lg:mx-0 lg:max-w-none"><div className="flex items-center gap-3"><Link href="/danisan" className="dh-focus rounded-full p-1.5 text-[#5e625d] hover:bg-[#f0eeea] lg:hidden" aria-label="Geri dön"><ArrowLeft size={21} /></Link><span className="relative"><Avatar initials="EN" tone="pink" size="sm" /><span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#fbf9f8] bg-[#4CAF50]" /></span><div><p className="text-sm font-semibold">Dyt. Elif Nur</p><p className="text-xs font-medium text-[#2d4f3d]">Çevrimiçi</p></div></div><div className="flex items-center gap-2"><button className="dh-focus rounded-full bg-[#e7e2d8]/60 p-2.5 text-[#2d4f3d]" aria-label="Sesli ara"><Phone size={18} /></button><button className="dh-focus rounded-full bg-[#e7e2d8]/60 p-2.5 text-[#2d4f3d]" aria-label="Görüntülü ara"><Video size={18} /></button></div></div>; }
export function ClientShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isChat = pathname === "/danisan/mesajlar";
  return <div className="min-h-screen bg-[#fbf9f8] pb-24 lg:flex lg:pb-0">
    {/* Masaüstü sidebar — mobilde alt menü kullanılıyor */}
    <aside className="hidden w-[280px] shrink-0 flex-col border-r border-[#ece9e4] bg-white px-5 py-8 lg:fixed lg:inset-y-0 lg:left-0 lg:flex">
      <Link href="/danisan" className="dh-focus dh-heading px-2 text-[40px] font-bold leading-none">DietHub</Link>
      <p className="mt-12 px-2 text-xs font-bold uppercase tracking-[.12em] text-[#66665f]">Kişisel alanım</p>
      <nav className="mt-5 flex flex-1 flex-col gap-1.5" aria-label="Danışan menüsü">
        <ClientNavLinks pathname={pathname} />
        <div className="mt-auto border-t border-[#e5e3de] pt-4"><Link href="/danisan/bildirimler" className={`dh-focus flex items-center gap-4 rounded-xl px-4 py-3 text-[15px] font-medium ${isCurrentPath(pathname, "/danisan/bildirimler") ? "bg-[#e7e2d8] text-[#163827]" : "text-[#5e605b] hover:bg-[#f3f0ea]"}`}><Bell size={21} />Bildirimler</Link></div>
      </nav>
      <Link href="/danisan/profil" className="dh-focus mt-5 flex items-center gap-3 rounded-xl bg-[#f6f4ef] px-3 py-3 hover:bg-[#f0eeea]"><Avatar initials="E" size="sm" /><div className="min-w-0"><p className="truncate text-sm font-semibold">Emine Yılmaz</p><p className="text-xs text-[#767973]">Profili görüntüle</p></div></Link>
    </aside>

    <div className="min-w-0 flex-1 lg:ml-[280px]">
      <header className="sticky top-0 z-20 border-b border-transparent bg-[#fbf9f8]/95 px-5 pb-3 pt-4 backdrop-blur md:px-8 lg:border-b lg:border-[#efede9] lg:px-10 lg:py-6">
        {isChat ? <ChatHeader /> : <div className="mx-auto flex max-w-[1180px] items-center justify-between lg:mx-0 lg:max-w-none"><Link href="/danisan/profil" className="dh-focus lg:hidden"><Avatar initials="E" size="sm" /></Link><div className="text-center lg:text-left"><p className="dh-heading text-lg font-bold lg:text-2xl">Merhaba, Emine</p><p className="text-xs text-[#6d716b] lg:text-sm">Bugün kendin için güzel bir gün.</p></div><Link href="/danisan/bildirimler" className="dh-focus rounded-full p-2 text-[#163827] hover:bg-[#f0ede7] lg:hidden" aria-label="Bildirimler"><Bell size={21} /></Link></div>}
      </header>
      <main className="mx-auto w-full max-w-[1180px] px-5 pt-5 md:px-8 md:pt-8 lg:max-w-[1040px] lg:px-10 lg:py-10">{children}</main>
    </div>

    <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-[#ece9e4] bg-white px-1 pb-[max(10px,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_rgba(45,79,61,.04)] lg:hidden" aria-label="Danışan alt menüsü"><div className="mx-auto grid max-w-[720px] grid-cols-6">{clientNav.map(({ href, label, icon: Icon }) => { const active = href === "/danisan" ? pathname === href : pathname.startsWith(href); return <Link href={href} key={href} className={`dh-focus flex flex-col items-center gap-1 rounded-lg px-0.5 py-1 text-[9.5px] font-medium leading-tight ${active ? "text-[#163827]" : "text-[#6e706b]"}`}><Icon size={19} strokeWidth={active ? 2.5 : 1.8} /><span>{label}</span></Link>; })}</div></nav>
  </div>;
}
export function SmallPageAction({ href, children }: { href: string; children: ReactNode }) { return <Link href={href} className="dh-focus inline-flex items-center justify-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#163827]"><Plus size={18} />{children}</Link>; }
