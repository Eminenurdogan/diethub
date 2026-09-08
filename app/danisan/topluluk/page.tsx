import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/ui";
import { CommunityWall } from "@/components/community-wall";
export default function ClientCommunityPage() { return <><PageHeader title="Kamp Topluluğu" description="Birbirinizden ilham alın ve küçük anları paylaşın." action={<Link href="/danisan/topluluk/yeni" className="dh-focus inline-flex items-center gap-2 rounded-xl bg-[#2d4f3d] px-4 py-3 text-sm font-semibold text-white"><Plus size={18} />Paylaş</Link>} /><CommunityWall /></>; }
