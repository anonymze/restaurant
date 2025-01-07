"use client";

import { useState } from "react";
import { Calendar, Music, Gamepad, WineIcon as GlassWine } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Event } from "@/types/event";
import type { SanityDocument } from "@sanity/client";
import type { GetImageResult } from "astro";

interface Props {
	events: SanityDocument<Event>[];
	gamePlaceholder: GetImageResult;
	concertPlaceholder: GetImageResult;
	degustationPlaceholder: GetImageResult;
}

export default function EventsCard({
	events,
	gamePlaceholder,
	concertPlaceholder,
	degustationPlaceholder,
}: Props) {
	const [filter, setFilter] = useState<Event["type"] | "all">("all");

	const filteredEvents = filter === "all" ? events : events.filter((event) => event.type === filter);

	return (
		<>
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
						<SelectItem className="hover:bg-primary hover:text-white" value="game">
							Jeux
						</SelectItem>
						<SelectItem className="hover:bg-primary hover:text-white" value="degustation">
							Dégustations
						</SelectItem>
					</SelectContent>
				</Select>
			</div>

			{filteredEvents.length === 0 ? (
				<p className="text-center text-stone-600">Aucun événement trouvé</p>
			) : (
				<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
					{filteredEvents.map((event) => (
						<Card
							key={event._id}
							className="overflow-hidden bg-white shadow-lg transition-all duration-300 hover:shadow-xl rounded-none"
						>
							<div className="aspect-video relative">
								<img
									src={
										event.image
											? event.image
											: event.type === "game"
												? gamePlaceholder.src
												: event.type === "concert"
													? concertPlaceholder.src
													: event.type === "degustation"
														? degustationPlaceholder.src
														: ""
									}
									alt={event.title}
									className="object-cover w-full h-full"
								/>
								<Badge className="absolute top-4 right-4 text-white bg-primary" variant="outline">
									{event.type === "concert"
										? "Concert"
										: event.type === "game"
											? "Jeu"
											: event.type === "degustation"
												? "Dégustation"
												: "Autre"}
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
									à {event.date.split("T")[1].slice(0, 5)}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-stone-600">{event.description}</p>
							</CardContent>
						</Card>
					))}
				</div>
			)}
		</>
	);
}
