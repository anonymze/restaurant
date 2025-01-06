import { CalendarDays, Leaf, Soup, CakeSliceIcon, UtensilsCrossedIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { SanityDocument } from "@sanity/client";
import { Badge } from "@/components/ui/badge";
import type { Menu } from "@/types/menu";


export default function MenuPage({menu}: {menu: SanityDocument<Menu>[]}) {

	return (
		<>
			<Card className="mb-8 bg-tertiary/20 border-tertiary shadow-md rounded-none">
				<CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-tertiary">
					<CardTitle className="text-2xl font-serif text-tertiary">{currentMenu.day}</CardTitle>
					<CalendarDays className="h-6 w-6 text-tertiary" />
				</CardHeader>
				<CardContent className="pt-6">
					<div className="space-y-12">
						{menu.map(([category, items]) => (
							<div key={category}>
								<h3 className="text-xl font-serif text-tertiary mb-4 capitalize flex items-center">
									{category === "entrées" ? (
										<Soup className="h-5 w-5 mr-2" />
									) : category === "plats" ? (
										<UtensilsCrossedIcon className="h-5 w-5 mr-2" />
									) : (
										<CakeSliceIcon className="h-5 w-5 mr-2" />
									)}
									{category}
								</h3>
								<ul className="space-y-4">
									{menu.menuItems.map((item) => (
										<li key={item.} className="border-b border-tertiary/20 pb-4 last:border-b-0 last:pb-0">
											<div className="flex justify-between items-start">
												<div>
													<h4 className="font-medium text-stone-800">{item.name}</h4>
													<p className="text-sm text-stone-600">{item.description} {item.allergens && <span className="text-red-700">*</span>}</p>
													{item.dietary && (
														<div className="mt-1 space-x-1">
															{item.dietary.map((diet) => (
																<Badge
																	key={diet}
																	variant="outline"
																	className="text-xs bg-tertiary/10 text-tertiary border-tertiary"
																>
																	{diet}
																</Badge>
															))}
														</div>
													)}
												</div>
												<span className="font-medium text-tertiary">{item.price} €</span>
											</div>
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</CardContent>
			</Card>

			<div className="p-6 shadow-sm border border-tertiary">
				<h3 className="text-xl font-serif text-tertiary mb-4 flex items-center">
					<Leaf className="h-5 w-5 mr-2" />
					Informations sur le menu
				</h3>
				<ul className="space-y-2 text-stone-700 list-disc list-inside">
					<li>
						Le menu change quotidiennement en fonction des arrivages et de l'inspiration du chef.
					</li>
					<li>
						Tous nos plats sont préparés sur place à partir de produits frais et de saison.
					</li>
					<li>
						Pour toute allergie ou régime alimentaire spécifique, n'hésitez pas à nous consulter.
					</li>
					<li>
						Nous essayons au maximum de proposer des plats végétariens en alternative.
					</li>
					<li>
						Le vendredi le menu sera composé de poisson.
					</li>
				</ul>
			</div>
		</>
	);
}
