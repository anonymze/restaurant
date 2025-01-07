export interface Event {
	date: string;
  title: string;
  description: string;
  type: "concert" | "degustation" | "game" | "other";
  image?: string;
} 