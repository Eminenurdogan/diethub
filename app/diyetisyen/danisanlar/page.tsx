import { PageHeader } from "@/components/ui";
import { ClientDirectory } from "@/components/client-directory";
import { SmallPageAction } from "@/components/shells";
export default function ClientsPage() { return <><PageHeader title="Danışanlar" description="48 aktif danışanın" action={<SmallPageAction href="/diyetisyen/danisanlar">Danışan Ekle</SmallPageAction>} /><ClientDirectory /></>; }
