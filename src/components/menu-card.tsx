import { CalendarDays, Leaf, Soup, CakeSliceIcon, UtensilsCrossedIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Menu } from "@/types/menu";


interface Props {
	currentDay: string;
	entries: Menu["menuItems"];
	plates: Menu["menuItems"];
	desserts: Menu["menuItems"];
}

export default function MenuCard({ currentDay, entries, plates, desserts }: Props) {
	return (
		<Card className="mb-8 shadow-md border-green-700 rounded-none">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-b from-green-600 to-green-900">
				<CardTitle>
					<h2 className="text-2xl font-serif text-white">
						Menu du <span className="capitalize">{currentDay}</span>
					</h2>
				</CardTitle>
				<CalendarDays className="h-6 w-6 text-white" />
			</CardHeader>
			<CardContent className="pt-6">
				<div className="space-y-10">
					{contentMenu(entries, "Entrées", <Soup className="h-5 w-5 mr-2" />)}
					{contentMenu(plates, "Plats", <UtensilsCrossedIcon className="h-5 w-5 mr-2" />)}
					{contentMenu(desserts, "Desserts", <CakeSliceIcon className="h-5 w-5 mr-2" />)}
				</div>
			</CardContent>
		</Card>
	);
}

const contentMenu = (content: Menu["menuItems"], type: string, Icon: React.ReactNode) => {
	return (
		<div>
			<h3 className="text-xl font-serif  mb-4 capitalize flex items-center text-green-700">
				{Icon}
				{type}
			</h3>
			<ul className="space-y-4">
				{content.map((item) => (
					<li key={item.title} className="border-b border-tertiary/20 pb-4 last:border-b-0 last:pb-0">
						<div className="flex justify-between items-start">
							<div>
								<h4 className="font-medium text-primary">{item.title}</h4>
								<p className="text-sm text-stone-600">
									{item.description} {item.allergens && <span className="text-red-700">*</span>}
								</p>
								{item.vegetarian && (
									<div className="mt-1 space-x-1">
										<Badge variant="outline" className="text-xs">
											végétarien
										</Badge>
									</div>
								)}
							</div>
							<span className="font-medium text-primary">{item.price} €</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};
