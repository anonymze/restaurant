import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";


interface TabsMenuProps {
	titles: string[];
	content: {
		image: string;
		name: string;
		description: string;
		price: number;
		allergens: boolean;
	}[];
}

export function TabsMenu({ titles, content }: TabsMenuProps) {
	return (
		<Tabs defaultValue="entries" className="mt-6 max-w-[800px] mx-auto px-4">
			<p className="my-5 text-xs ">
				<span className="text-red-700">*</span> Signifie une présence d'allergènes
			</p>
			<TabsList className="grid w-full grid-cols-3 gap-4 h-11 p-0 mb-10 md:gap-5 ">
				{titles.map((title) => (
					<TabsTrigger
						key={title}
						className="h-full text-primary border border-primary rounded-none font-bold data-[state=active]:bg-primary [&[data-state=active]>h2]:text-white"
						value="entries"
					>
						<h2 className="text-lg">{title}</h2>
					</TabsTrigger>
				))}
			</TabsList>
			<section aria-label="Présentation des entrées de la carte">
				{content.map((entry) => (
					<article className="flex flex-row items-center gap-8 h-24 mb-6 ">
						<img
							className="object-cover"
							src="https://placehold.jp/150x150.png"
							alt={entry.name}
							width={96}
							height={96}
							loading="lazy"
						/>

						<div className="flex flex-col flex-1 h-full border-b border-gray-400/20 gap-2">
							<h3 className="text-lg font-bold">{entry.name}</h3>
							<p className="text-sm text-gray-600">
								{entry.description} {entry.allergens && <span className="text-red-700">*</span>}
							</p>
						</div>
						<p className="text-primary font-bold ml-auto">{entry.price} €</p>
					</article>
				))}
			</section>
		</Tabs>
	);
}

const entries = [
	{
		image: "/images/entries/1.jpg",
		name: "Entrée 1",
		description: "Description de l'entrée 1",
		price: 10,
		allergens: true,
	},
	{
		image: "/images/entries/2.jpg",
		name: "Entrée 2",
		description: "Description de l'entrée 2",
		price: 10,
		allergens: false,
	},
	{
		image: "/images/entries/3.jpg",
		name: "Entrée 3",
		description: "Description de l'entrée 3",
		allergens: true,
		price: 10,
	},
	{
		image: "/images/entries/4.jpg",
		name: "Entrée 4",
		description: "Description de l'entrée 4",
		price: 10,
		allergens: false,
	},
];
