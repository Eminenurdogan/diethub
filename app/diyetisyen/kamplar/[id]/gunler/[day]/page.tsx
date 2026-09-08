import { mealPlan } from "@/data/demo";
import { DayEditor } from "@/components/day-editor";
export default async function CampDayPage({ params }: { params: Promise<{ id: string; day: string }> }) {
  const { id, day } = await params;
  return <DayEditor campId={id} day={day} meals={mealPlan} />;
}
