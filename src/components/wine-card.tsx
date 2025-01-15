import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { WineItem } from "@/types/wine";
import { WineIcon } from "lucide-react";


interface Props {
	whiteWines: WineItem[];
	redWines: WineItem[];
	roseWines: WineItem[];
}

export default function WineCard({ whiteWines, redWines, roseWines }: Props) {
	return (
		<Card className="mb-8 shadow-md border-green-700 rounded-none">
			<CardHeader className="flex flex-row items-center justify-between space-y-0 bg-gradient-to-b from-green-600 to-green-900">
				<CardTitle>
					<h2 className="text-2xl font-serif text-white">Carte de nos vins</h2>
				</CardTitle>
				<WineIcon className="h-6 w-6 text-white" />
			</CardHeader>
			<CardContent className="pt-6">
				<div className="space-y-10">
					{contentMenu(redWines, "Rouges", <WineIcon className="h-5 w-5 mr-2" />)}
					{contentMenu(whiteWines, "Blancs", <WineIcon className="h-5 w-5 mr-2" />)}
					{contentMenu(roseWines, "Roses", <WineIcon className="h-5 w-5 mr-2" />)}
				</div>
			</CardContent>
		</Card>
	);
}

const contentMenu = (content: WineItem[], type: string, Icon: React.ReactNode) => {
	return (
		<div>
			<h3 className="text-xl font-serif  mb-4 capitalize flex items-center">
				{Icon}
				{type}
			</h3>
			<ul className="space-y-4">
				{content.map((item) => (
					<li key={item.name} className="border-b border-tertiary/20 pb-4 last:border-b-0 last:pb-0">
						<div className="flex justify-between items-start">
							<div>
								<h4 className="font-medium text-primary">{item.name}</h4>
								<p className="text-sm text-stone-600">{item.description}</p>
								{item.bio && (
									<div className="mt-1 space-x-1">
										<Badge variant="outline" className="text-xs bg-tertiary/10 text-tertiary border-tertiary">
											bio
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
