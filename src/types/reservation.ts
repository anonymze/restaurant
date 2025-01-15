import { z } from "astro/zod";


export const reservationSchema = z.object({
	date: z.string().min(1, "La date est requise"),
	time: z.string().min(1, "L'heure est requise"),
	guests: z.string().min(1, "Le nombre de personnes est requis"),
	name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
	email: z.string().email("L'email n'est pas valide"),
	specialRequests: z.string().optional(),
});
