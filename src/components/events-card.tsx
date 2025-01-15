import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, CalendarClockIcon, Calendar1Icon } from "lucide-react";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';
import { Badge } from "@/components/ui/badge";
import { sanityClient } from 'sanity:client';
import type { GetImageResult } from "astro";
import type { Event } from "@/types/event";
import { useState } from "react";


// Get a pre-configured url-builder from your sanity client
const builder = imageUrlBuilder(sanityClient)

interface Props {
	events: SanityDocument<Event>[];
	gamePlaceholder: GetImageResult;
	concertPlaceholder: GetImageResult;
	degustationPlaceholder: GetImageResult;
	titleSection: string;
	iconSection: "week" | "next";
}

export default function EventsCard({
	events,
	gamePlaceholder,
	concertPlaceholder,
	degustationPlaceholder,
	titleSection,
	iconSection,
}: Props) {
	const [filter, setFilter] = useState<Event["type"] | "all">("all");
	const filteredEvents = filter === "all" ? events : events.filter((event) => event.type === filter);

	return (
		<>
			<div className="flex justify-between items-center mb-4 md:mb-6">
				<h2 className="text-2xl text-stone-800 flex items-center gap-3">
					{iconSection === "week" ? (
						<Calendar1Icon className="min-w-6 w-6 h-6 text-primary" />
					) : (
						<CalendarClockIcon className="min-w-6 w-6 h-6 text-primary" />
					)}{" "}
					{titleSection}
				</h2>

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
											? builder.image(event.image).url()
											: event.type === "game"
												? gamePlaceholder.src
												: event.type === "concert"
													? concertPlaceholder.src
													: degustationPlaceholder.src
									}
									alt={event.title}
									className="object-cover w-full h-full"
								/>
								<Badge className="absolute top-4 right-4 px-3 py-1 text-white text-sm bg-primary" variant="outline">
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
