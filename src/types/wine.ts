export interface Wine {
	rouges: WineItem[];
	blancs: WineItem[];
	roses: WineItem[];
}

export interface WineItem {
	name: string;
	description: string;
	price: number;
	bio?: boolean;
}