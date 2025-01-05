import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


export function TabsDemo() {
	return (
		<Tabs defaultValue="entries" className="mt-6 max-w-[800px] mx-auto">
			<TabsList className="grid w-full grid-cols-3 gap-5">
				<TabsTrigger
					className="text-primary border border-primary rounded-none  px-4 py-2 font-bold text-lg [&[data-state=active]]:bg-primary [&[data-state=active]]:text-white"
					value="entries"
				>
					Entrées
				</TabsTrigger>
				<TabsTrigger
					className="text-primary border border-primary rounded-none px-4 py-2 font-bold text-lg [&[data-state=active]]:bg-primary [&[data-state=active]]:text-white"
					value="plates"
				>
					Plats
				</TabsTrigger>
				<TabsTrigger
					className="text-primary border border-primary rounded-none px-4 py-2 font-bold text-lg [&[data-state=active]]:bg-primary [&[data-state=active]]:text-white"
					value="desserts"
				>
					Desserts
				</TabsTrigger>
			</TabsList>
			<TabsContent value="entries">
				<section aria-label="Présentation des entrées de la carte"></section>
			</TabsContent>
			<TabsContent value="plates">
				<section aria-label="Présentation des plats de la carte"></section>
			</TabsContent>
			<TabsContent value="desserts">
				<section aria-label="Présentation des desserts de la carte"></section>
			</TabsContent>
		</Tabs>
	);
}
