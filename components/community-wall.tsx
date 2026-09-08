/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { Heart, ImagePlus, MessageCircle, MoreHorizontal, Send } from "lucide-react";
import { useState } from "react";
import { Avatar, Card } from "./ui";

type Post = { id: number; name: string; initials: string; tone: "green" | "beige" | "pink" | "blue"; time: string; text: string; likes: number; comments: number; image?: string };
const startPosts: Post[] = [
  { id: 1, name: "Ayşe Yılmaz", initials: "AY", tone: "green", time: "2 saat önce", text: "Bugünkü öğünümü planıma uygun hazırladım. Küçük adımların iyi hissettirmesi çok güzel!", likes: 12, comments: 3, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=1000&q=80" },
  { id: 2, name: "Diyetisyen Elif Nur", initials: "EN", tone: "pink", time: "5 saat önce", text: "Yeni haftaya sakin ve sürdürülebilir hedeflerle başlıyoruz. Herkese güzel bir gün dilerim.", likes: 24, comments: 7 },
];

export function CommunityWall({ manager = false }: { manager?: boolean }) {
  const [posts, setPosts] = useState(startPosts);
  const [liked, setLiked] = useState<number[]>([]);
  const [comment, setComment] = useState("");
  const addComment = (id: number) => {
    if (!comment.trim()) return;
    setPosts((items) => items.map((item) => item.id === id ? { ...item, comments: item.comments + 1 } : item));
    setComment("");
  };
  return <div className="mx-auto max-w-3xl space-y-5">
    <Card className="p-5"><div className="flex items-center gap-3"><Avatar initials={manager ? "EN" : "E"} size="sm" /><Link href="/danisan/topluluk/yeni" className="dh-focus flex-1 rounded-xl bg-[#f0eeea] px-4 py-3 text-[#71746d] hover:bg-[#e7e2d8]">Toplulukla bir şey paylaş...</Link><Link href="/danisan/topluluk/yeni" className="dh-focus rounded-xl p-3 text-[#2d4f3d] hover:bg-[#e8f2ec]" aria-label="Fotoğraf paylaş"><ImagePlus size={20} /></Link></div></Card>
    {posts.map((post) => <Card key={post.id} className="overflow-hidden"><div className="p-5"><div className="flex items-start gap-3"><Avatar initials={post.initials} tone={post.tone} size="sm" /><div className="flex-1"><p className="font-semibold">{post.name}</p><p className="text-xs text-[#757871]">{post.time}</p></div>{manager && <button className="dh-focus rounded-lg p-2 hover:bg-[#f0eeea]" aria-label="Gönderi seçenekleri"><MoreHorizontal size={19} /></button>}</div><p className="mt-4 leading-6 text-[#343734]">{post.text}</p></div>{post.image && <img src={post.image} className="max-h-[380px] w-full object-cover" alt="Topluluk gönderisindeki örnek öğün görseli" />}<div className="p-5"><div className="flex gap-5"><button onClick={() => setLiked((items) => items.includes(post.id) ? items.filter((item) => item !== post.id) : [...items, post.id])} className={`dh-focus flex items-center gap-2 text-sm font-semibold ${liked.includes(post.id) ? "text-[#a43d36]" : "text-[#5f625d]"}`}><Heart size={19} fill={liked.includes(post.id) ? "currentColor" : "none"} />{post.likes + (liked.includes(post.id) ? 1 : 0)}</button><span className="flex items-center gap-2 text-sm text-[#5f625d]"><MessageCircle size={19} />{post.comments} yorum</span></div><form onSubmit={(event) => { event.preventDefault(); addComment(post.id); }} className="mt-4 flex gap-2"><input value={comment} onChange={(event) => setComment(event.target.value)} className="dh-input py-2.5 text-sm" placeholder="Yorum yaz..." aria-label="Yorum yaz" /><button className="dh-focus rounded-xl bg-[#e8f2ec] px-3 text-[#2d4f3d]" aria-label="Yorum gönder"><Send size={17} /></button></form></div></Card>)}
  </div>;
}
