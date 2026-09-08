import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PostComposer } from "@/components/post-composer";
export default function NewPostPage() { return <><Link href="/danisan/topluluk" className="dh-focus mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d4f3d]"><ArrowLeft size={17} />Topluluğa dön</Link><div className="mx-auto max-w-2xl"><PostComposer /></div></>; }
