"use client";

import { useState } from "react";
import { Calendar, Music, Gamepad, WineIcon as GlassWine, Utensils } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface Event {
	id: number;
	title: string;
	date: string;
	time: string;
	description: string;
	type: "concert" | "jeu" | "degustation" | "atelier";
	image: string;
}

const events: Event[] = [
	{
		id: 1,
		title: "Concert Jazz au Jardin",
		date: "2025-01-15",
		time: "20:00",
		description:
			"Profitez d'une soirée jazz en plein air dans notre jardin, accompagnée de nos délicieux tapas.",
		type: "concert",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 2,
		title: "Soirée Jeux de Société",
		date: "2025-01-22",
		time: "19:00",
		description:
			"Venez vous amuser avec notre sélection de jeux de société tout en dégustant nos planches apéritives.",
		type: "jeu",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 3,
		title: "Dégustation de Vins Biologiques",
		date: "2025-01-29",
		time: "18:30",
		description: "Découvrez une sélection de vins biologiques locaux, commentée par notre sommelier.",
		type: "degustation",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 4,
		title: "Atelier Cuisine : Les Secrets des Herbes",
		date: "2025-02-05",
		time: "15:00",
		description: "Apprenez à utiliser les herbes aromatiques dans votre cuisine avec notre chef.",
		type: "atelier",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 5,
		title: "Soirée Piano Bar",
		date: "2025-02-12",
		time: "20:30",
		description: "Une ambiance feutrée avec notre pianiste résident et cocktails signature.",
		type: "concert",
		image: "/placeholder.svg?height=400&width=600",
	},
	{
		id: 6,
		title: "Tournoi de Poker Gastronomique",
		date: "2025-02-19",
		time: "19:00",
		description: "Combinez votre passion du poker et de la gastronomie dans ce tournoi unique.",
		type: "jeu",
		image: "/placeholder.svg?height=400&width=600",
	},
];

export default function EventsPage() {
	const [filter, setFilter] = useState<Event["type"] | "all">("all");

	const filteredEvents = filter === "all" ? events : events.filter((event) => event.type === filter);

	return (
		<div className="container mx-auto max-w-6xl">
			<div className="flex justify-end mb-8">
				<Select onValueChange={(value) => setFilter(value as Event["type"] | "all")}>
					<SelectTrigger className="w-[200px]">
						<SelectValue placeholder="Filtrer par type" />
					</SelectTrigger>
					<SelectContent className="bg-white">
						<SelectItem className="hover:bg-primary hover:text-white" value="all">
							Tous les événements
						</SelectItem>
						<SelectItem className="hover:bg-primary hover:text-white" value="concert">
							Concerts
						</SelectItem>
						<SelectItem className="hover:bg-primary hover:text-white" value="jeu">
							Jeux
						</SelectItem>
						<SelectItem className="hover:bg-primary hover:text-white" value="degustation">
							Dégustations
						</SelectItem>
						<SelectItem className="hover:bg-primary hover:text-white" value="atelier">
							Ateliers
						</SelectItem>
					</SelectContent>
				</Select>
			</div>

			<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
				{filteredEvents.map((event) => (
					<Card
						key={event.id}
						className="overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl rounded-none"
					>
						<div className="aspect-video relative">
							<img src={event.image} alt={event.title} className="object-cover w-full h-full" />
							<Badge
								className="absolute top-4 right-4 text-stone-800 border-primary text-primary"
								variant="outline"
							>
								{event.type === "concert"
									? "Concert"
									: event.type === "jeu"
										? "Jeu"
										: event.type === "degustation"
											? "Dégustation"
											: "Atelier"}
							</Badge>
						</div>
						<CardHeader>
							<CardTitle className="text-xl font-serif text-stone-800">{event.title}</CardTitle>
							<CardDescription className="flex items-center gap-2">
								<Calendar className="inline-block w-4 h-4" />
								{new Date(event.date).toLocaleDateString("fr-FR", {
									weekday: "long",
									year: "numeric",
									month: "long",
									day: "numeric",
								})}{" "}
								à {event.time}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<p className="text-stone-600">{event.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	);
}
