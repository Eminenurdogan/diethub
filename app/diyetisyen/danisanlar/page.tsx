import { PageHeader } from "@/components/ui";
import { ClientDirectory } from "@/components/client-directory";
import { NewClientModal } from "@/components/new-client-modal";
export default function ClientsPage() { return <><PageHeader title="Danışanlar" description="48 aktif danışanın" action={<NewClientModal />} /><ClientDirectory /></>; }
