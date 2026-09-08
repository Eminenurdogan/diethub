import { ClientCheckinForm } from "@/components/client-checkin-form";
import { PageHeader } from "@/components/ui";
export default function ClientCheckinPage() { return <><PageHeader title="Günlük Check-in" description="Bugünün nasıl geçtiğini diyetisyeninle paylaş." /><div className="mx-auto max-w-2xl"><ClientCheckinForm /></div></>; }
