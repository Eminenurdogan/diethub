import { PageHeader } from "@/components/ui";
import { SmallPageAction } from "@/components/shells";
import { RecipeGallery } from "@/components/recipe-gallery";
export default function DietitianRecipesPage() { return <><PageHeader title="Tariflerim" description="Kamp ve programlarda kullanabileceğiniz tarif koleksiyonu." action={<SmallPageAction href="/diyetisyen/tarifler/yeni">Yeni Tarif</SmallPageAction>} /><RecipeGallery hrefBase="/diyetisyen/tarifler" manage /></>; }
