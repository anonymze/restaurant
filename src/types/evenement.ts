export interface Evenement {
	date: string;
  menuItems: {
    category: "entry" | "plate" | "dessert";
    title: string;
    description: string;
    price: number;
    vegetarian?: boolean;
    allergens?: boolean
  }[];
} 